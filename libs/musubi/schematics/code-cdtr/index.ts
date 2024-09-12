import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { runInNewContext } from "node:vm";
import { select, input, multi, number, group } from './form-builder';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function codeCdtr(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // console.log(runInNewContext(code,{ select, input, multi, number, group,}));
    console.log(111);
    console.log(tree.root);
    tree.create("111.txt", "红烧鸡翅成功了！");
    return tree;
  };
}

const code  = `
function test() {
  const chartname = input('chartname').label('姓名').placeholder('你叫什么名字？').required();
  const sex = input('sex')
    .label('性别')
    .placeholder('虽然正常来说只有男或女，可是也保不准有武装直升机？')
    .required();
  const player = input('player')
    .label('玩家')
    .placeholder('本尊在此')
    .defaultValue(() => this.user?.name)
    .required();
  const address = input('address').label('住地').placeholder('你现在住哪?').required();
  const time = select('time')
    .label('时代')
    .placeholder('你是哪个时代的人啊')
    .options(() => Time.map(i => ({ code: i.value, text: i.label })))
    .required();
  const hometown = input('hometown').label('故乡').placeholder('是M18星云吗？').required();

  const age = number('age').label('年龄').placeholder('您贵庚？').required();
  const jobval = select('jobval')
    .dict('jobs')
    .label('职业')
    .placeholder('师傅你是做什么工作的？')
    .required();

  const move = number('move').label('移动').required();
  const str = number('str').label('力量').required();
  // number('con').label('体质').required();
  // number('pow').label('意志').required();
  const dex = number('dex').label('敏捷').required();
  // number('app').label('外貌').required();
  const siz = number('siz').label('体型').required();
  // number('int').label('智力').required();

  multi([age, str, dex, siz]).control(move, ([ageProp, strProp, dexProp, sizProp]) =>
    move.value = calcMov({ str: strProp.value, age: ageProp.value, dex: dexProp.value, pow: sizProp.value })
  );
  // jobval.control(
  //   [],
  //   (props, move) =>
  //     (move.value = calcMov({ ...this.model.attribute, age: this.model.person.age }))
  // );

  // TODO 一对多 age.control([move,sex], (props, [move,sex]) => move.value = 12; sex.value = false))
  // TODO 多对多
  // TODO 无对一/多

  return [
    group('role', chartname, sex, player, address, time, hometown, age, jobval,move),
    group('prop', str, dex, siz),
  ];
}
test().map(i => i.toText());

`;
