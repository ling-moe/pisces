import { UnsuccessfulWorkflowExecution } from '@angular-devkit/schematics';
import { NodeWorkflow } from '@angular-devkit/schematics/tools';
import { createConsoleLogger } from '@angular-devkit/core/node';
import { schema } from '@angular-devkit/core';
import {blue, cyan, green, red, yellow, } from 'ansicolor';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * return package manager' name by lock file
 */
// function getPackageManagerName() {
//   // order by check priority
//   const LOCKS: Record<string, string> = {
//     'package-lock.json': 'npm',
//     'yarn.lock': 'yarn',
//     'pnpm-lock.yaml': 'pnpm',
//   };
//   const lockPath = findUp(Object.keys(LOCKS), process.cwd());
//   if (lockPath) {
//     return LOCKS[path.basename(lockPath)];
//   }

//   return 'npm';
// }

// function findUp(names: string | string[], from: string) {
//   if (!Array.isArray(names)) {
//     names = [names];
//   }
//   const root = path.parse(from).root;

//   let currentDir = from;
//   while (currentDir && currentDir !== root) {
//     for (const name of names) {
//       const p = path.join(currentDir, name);
//       if (existsSync(p)) {
//         return p;
//       }
//     }

//     currentDir = path.dirname(currentDir);
//   }

//   return null;
// }

function removeLeadingSlash(value: string): string {
  return value[0] === '/' ? value.slice(1) : value;
}

export async function main({
  debug = false,
  dryRunPresent = false,
  dryRun = false,
  force = false,
  allowPrivate = false,
  verbose = false,
  schematicOptions = {},
  // collection所在的目录
  collection = "./libs/musubi",
  // collection中的schematic
  schematic = "code-cdtr",
  stdout = process.stdout,
  stderr = process.stderr,
}): Promise<0 | 1> {


  /** Create the DevKit Logger used through the CLI. */
  const logger = createConsoleLogger(verbose, stdout, stderr,
     {
    info: (s) => s,
    debug: (s) => s,
    warn: (s) => yellow(s),
    error: (s) => red(s),
    fatal: (s) => red(s),
  }
);

  const isLocalCollection = collection.startsWith('.') || schematic.startsWith('/');


  /** Create the workflow scoped to the working directory that will be executed with this run. */
  const workflow = new NodeWorkflow(process.cwd(), {
    force,
    dryRun,
    resolvePaths: [process.cwd(), dirname(fileURLToPath(import.meta.url))],
    schemaValidation: true,
    // FIXME 临时写死pnpm
    packageManager: 'pnpm',
    // packageManager: getPackageManagerName(),
  });

  if (debug) {
    logger.info(
      `Debug mode enabled${isLocalCollection ? ' by default for local collections' : ''}.`,
    );
  }

  // Indicate to the user when nothing has been done. This is automatically set to off when there's
  // a new DryRunEvent.
  let nothingDone = true;

  // Logging queue that receives all the messages to show the users. This only get shown when no
  // errors happened.
  let loggingQueue: string[] = [];
  let error = false;

  /**
   * Logs out dry run events.
   *
   * All events will always be executed here, in order of discovery. That means that an error would
   * be shown along other events when it happens. Since errors in workflows will stop the Observable
   * from completing successfully, we record any events other than errors, then on completion we
   * show them.
   *
   * This is a simple way to only show errors when an error occur.
   */
  workflow.reporter.subscribe((event) => {
    nothingDone = false;
    // Strip leading slash to prevent confusion.
    const eventPath = removeLeadingSlash(event.path);

    switch (event.kind) {
      case 'error':
        error = true;
        logger.error(
          `ERROR! ${eventPath} ${event.description == 'alreadyExist' ? 'already exists' : 'does not exist'}.`,
        );
        break;
      case 'update':
        loggingQueue.push(`${cyan('UPDATE')} ${eventPath} (${event.content.length} bytes)`);
        break;
      case 'create':
        loggingQueue.push(`${green('CREATE')} ${eventPath} (${event.content.length} bytes)`);
        break;
      case 'delete':
        loggingQueue.push(`${yellow('DELETE')} ${eventPath}`);
        break;
      case 'rename':
        loggingQueue.push(
          `${blue('RENAME')} ${eventPath} => ${removeLeadingSlash(event.to)}`,
        );
        break;
    }
  });

  /**
   * Listen to lifecycle events of the workflow to flush the logs between each phases.
   */
  workflow.lifeCycle.subscribe((event) => {
    if (event.kind == 'workflow-end' || event.kind == 'post-tasks-start') {
      if (!error) {
        // Flush the log queue and clean the error state.
        loggingQueue.forEach((log) => logger.info(log));
      }

      loggingQueue = [];
      error = false;
    }
  });

  workflow.registry.addPostTransform(schema.transforms.addUndefinedDefaults);

  // Show usage of deprecated options
  workflow.registry.useXDeprecatedProvider((msg) => logger.warn(msg));

  // Pass the rest of the arguments as the smart default "argv". Then delete it.
  // workflow.registry.addSmartDefaultProvider('argv', (schema) =>
  //   'index' in schema ? _[Number(schema['index'])] : _,
  // );

  /**
   *  Execute the workflow, which will report the dry run events, run the tasks, and complete
   *  after all is done.
   *
   *  The Observable returned will properly cancel the workflow if unsubscribed, error out if ANY
   *  step of the workflow failed (sink or task), with details included, and will only complete
   *  when everything is done.
   */
  try {
    await workflow
      .execute({
        collection: collection,
        schematic: schematic,
        options: schematicOptions,
        allowPrivate: allowPrivate,
        debug: debug,
        logger: logger,
      })
      .toPromise();

    if (nothingDone) {
      logger.info('Nothing to be done.');
    } else if (dryRun) {
      logger.info(
        `Dry run enabled${dryRunPresent ? '' : ' by default in debug mode'
        }. No files written to disk.`,
      );
    }

    return 0;
  } catch (err) {
    if (err instanceof UnsuccessfulWorkflowExecution) {
      // "See above" because we already printed the error.
      logger.fatal('The Schematic workflow failed. See above.');
    } else if (debug && err instanceof Error) {
      logger.fatal(`An error occured:\n${err.stack}`);
    } else {
      logger.fatal(`Error: ${err instanceof Error ? err.message : err}`);
    }

    return 1;
  }
}
