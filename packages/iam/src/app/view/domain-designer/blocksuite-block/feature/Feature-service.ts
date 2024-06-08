import { BaseSelection, BlockService, TextSelection } from '@blocksuite/block-std';
import { FeatureBlockModel } from './feature-model';
import { isEqual } from 'lodash';
import { Observable, filter, map, startWith, pairwise, tap, debounceTime, distinct } from 'rxjs';
import { editorMode } from '../../designer/designer.component';
import { EditorService } from 'packages/iam/src/app/service/editor.service';
import { INJECTOR } from 'packages/iam/src/app/main.frontend';

export class FeatureService extends BlockService<FeatureBlockModel> {

  fields: string[] = [];

  fieldsOb!: Observable<string[]>;

  override mounted(): void {
    super.mounted();
    const editorService = INJECTOR.get(EditorService);
    // 初始化选择监听
    const { selection, command } = this.std;
    const ob = new Observable<BaseSelection[]>(observer => {
      const dis = selection.slots.changed.on(event => observer.next(event));
      return () => dis.dispose();
    }).pipe(
      filter(() => editorMode() === 'markField'),
      map(event => event.find(i => i.type === 'text') as TextSelection)
    );
    this.fieldsOb = ob.pipe(
      // FIXME 暂不支持反选字段时进行扫描，reverse会造成字段分离
      filter(event => event && event.from.length !== 0 && !event.reverse),
      distinct(event => String(event.from.index) + String(event.from.length)),
      map(event => {
        command.chain().formatText({
          textSelection: event,
          styles: {
            color: 'blue'
          }
        }).run();

        const start = event.from.index;
        const end = start + event.from.length;
        const field: string = this.doc.getBlock(event.blockId)?.yBlock.toJSON()['prop:text'].slice(start, end);
        return field;
      }),
      tap(field => editorService.refresh(field)),
      map(field => {
        const fieldIndex = this.fields.findIndex(i => field.includes(i));
        if (fieldIndex !== -1) {
          this.fields[fieldIndex] = field;
        } else {
          this.fields.push(field);
        }
        return [...this.fields];
      })
    );
  }
}
