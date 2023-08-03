import {
  EmitHint,
  InterfaceDeclaration,
  Node,
  ScriptTarget,
  SyntaxKind,
  createPrinter,
  createSourceFile,
  factory,
  isMethodSignature,
} from 'typescript';

const printer = createPrinter();
const temp = createSourceFile('t','',ScriptTarget.Latest, true);

function print(node: Node): string{
  return printer.printNode(EmitHint.Unspecified, node, temp);
}

export function createImportNodeText(
  importNames: string[],
  packageName: string
): string {
  return print(factory
    .createImportDeclaration(
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports(
          importNames.map((i) =>
            factory.createImportSpecifier(
              false,
              undefined,
              factory.createIdentifier(i)
            )
          )
        )
      ),
      factory.createStringLiteral(packageName),
      undefined
    ));
}


export function createImportClauseNodeText(importNames: string[]): string {
  return print(factory
    .createImportClause(
      false,
      undefined,
      factory.createNamedImports(
        importNames.map((importName) =>
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(importName)
          )
        )
      )
    ));
}

export function createTypeAliasDeclarationText(typeName: string): string {
  return [factory
    .createTypeAliasDeclaration(
      [factory.createToken(SyntaxKind.ExportKeyword)],
      factory.createIdentifier(`${typeName}Provider`),
      undefined,
      factory.createTypeReferenceNode(factory.createIdentifier('Provider'), [
        factory.createTypeReferenceNode(
          factory.createIdentifier(typeName),
          undefined
        ),
      ])
    ),
    factory
    .createTypeAliasDeclaration(
      [factory.createToken(SyntaxKind.ExportKeyword)],
      factory.createIdentifier(`${typeName}Consumer`),
      undefined,
      factory.createTypeReferenceNode(factory.createIdentifier('Consumer'), [
        factory.createTypeReferenceNode(
          factory.createIdentifier(typeName),
          undefined
        ),
      ])
    )].map(print).join('\n');
}

/**
 * 根据接口生成Provider类
 * @param interfaceNode interface节点
 * @returns Provider类
 */
export function createProviderFromInterface(
  interfaceNode: InterfaceDeclaration
): string | undefined {
  const interfaceName = getInterfaceName(interfaceNode);
  const classContent = `
import { Injectable } from '@nestjs/common';
import { ${interfaceName}Provider } from '../musubi.types';

@Injectable()
export class ${interfaceName} implements ${interfaceName}Provider {
  ${generateProviderMethodImpl(interfaceNode)}
}
  `;
  return classContent;
}

/**
 * 根据接口生成consumer类
 * @param interfaceNode interface节点
 * @returns consumer类
 */
export function createConsumerFromInterface(
  interfaceNode: InterfaceDeclaration
): string | undefined {
  const interfaceName = getInterfaceName(interfaceNode);
  const classContent = `
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ${interfaceName}Consumer } from '../musubi.types';

@Injectable({
  providedIn: 'root',
})
export class ${interfaceName} implements ${interfaceName}Consumer {

  constructor(protected http: HttpClient) {
  }

  ${generateConsumerMethodImpl(interfaceNode)}

}
  `;
  return classContent;
}

// 获取接口名称
export function getInterfaceName(node: InterfaceDeclaration): string {
  return node.name ? node.name.text : '';
}

// 生成接口方法的实现
function generateConsumerMethodImpl(node: InterfaceDeclaration): string {
  return node.members
    .filter(isMethodSignature)
    .map((member) => {
      return `${member.name.getText()}(${member.parameters
        .map((token) => token.getText())
        .join(', ')}): Observable<${
        member.type?.getText() ?? 'void'
      }> {\n    throw new Error("Method need implementation")\n  }`;
    })
    .join('\n\n');
}

function generateProviderMethodImpl(node: InterfaceDeclaration): string {
  return node.members
    .filter(isMethodSignature)
    .map((member) => {
      return `${member.name.getText()}(${member.parameters
        .map((token) => token.getText())
        .join(', ')}): ${
        member.type?.getText() ?? 'void'
      } {\n    throw new Error("Method need implementation")\n  }`;
    })
    .join('\n\n');
}
