import { BaseSelection, BlockElement, TextSelection } from '@blocksuite/block-std';
import { EdgelessRootBlockComponent, NoteBlockComponent } from '@blocksuite/blocks';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { isEqual } from 'lodash';
import { bufferWhen, distinct, distinctUntilChanged, filter, last, map, Observable, pairwise, startWith } from 'rxjs';
import { editorMode } from '../../designer/designer.component';
import { FeatureService } from './Feature-service';
import { FeatureBlockModel } from './feature-model';

@customElement('affine-feature')
export class FeatureBlockComponent extends BlockElement<FeatureBlockModel, FeatureService> {

  fields: string[] = [];

  override get topContenteditableElement() {
    if (this.rootElement instanceof EdgelessRootBlockComponent) {
      const note = this.closest<NoteBlockComponent>('affine-note');
      return note;
    }
    return this.rootElement;
  }

  override connectedCallback() {
    super.connectedCallback();

    const currentId = this.path[this.path.length - 1];
    // 初始化选择监听
    const { selection, command } = this.host;
    const ob = new Observable<BaseSelection[]>(observer => {
      const dis = selection.slots.changed.on(event => observer.next(event));
      return () => dis.dispose();
    }).pipe(
      filter(() => editorMode() === 'markField'),
      map(event => event.find(i => i.type === 'text') as TextSelection)
    );
    ob.pipe(
      startWith(new TextSelection({from: {length:0,path:[], index: 0}, to: null})),
      pairwise(),
      filter(([a,b]) => !isEqual(a,b)),
      map(([,b]) => b),
      // distinctUntilChanged((pre, cur)=> pre?.from.length === cur?.from.length || pre?.from.index === cur?.from.index),
      // bufferWhen(() => ob.pipe(filter(i => i?.from.length === 0))),
      // filter(i => i?.length >=2),
      // map((i) => i[i.length-2]),
      filter(event => event?.from.length !== 0 && event?.path.includes(currentId)),
    )
      .subscribe(event => {
        // FIXME 反选的时候blocksuite有bug， 会把widget移除
        command.chain().formatText({
          textSelection: event,
          styles: {
            color: 'blue'
          }
        }).run();
        const start = !event.reverse ? event.from.index : (event.from.index - event.from.length);
        const end = start + event.from.length;
        const field = this.doc.getBlock(event.blockId)?.yBlock.toJSON()['prop:text'].slice(start, end);
        const fieldIndex = this.fields.findIndex(i => field.includes(i));
        if(fieldIndex !== -1){
          this.fields[fieldIndex] =field;
        }else{
          this.fields.push(field);
        }
      });

    // 初始化结构

    if (this.model.children.length !== 0) {
      return;
    }
    this.doc.addBlock('affine:feature-content',
      { title: '故事', text: this.model.story }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '行为', text: this.model.action }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '命令', text: this.model.command }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '事件', text: this.model.event }, currentId);
    this.doc.addBlock('affine:feature-content',
      { title: '用例', text: this.model.case }, currentId);
  }

  override renderBlock() {
    // FIXME 修复fields不展示的问题
    return html`
      <div contenteditable="false" class="mat-elevation-z3 p-x-16 p-y-8 m-y-16 r-4">
      <span>${this.fields}</span>
      ${this.renderChildren(this.model)}
      </div>
    `;
  }
}
