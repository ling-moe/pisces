import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Signal,
  signal,
  viewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Consumer, RemoteService } from "@pisces/musubi/client";
import { ProductDomainService } from "../../../domain/product.entity";
import { EditorService } from "../../../service/editor.service";
import { AbstractEditor } from "@blocksuite/blocks";
import { ToastrService } from "ngx-toastr";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

export const editorMode = signal<'edit' | 'markField' | 'markDomain' | 'markMethod'>('edit');

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent implements OnInit, AfterViewInit, OnDestroy {

  editorEle = viewChild.required<ElementRef>('editor');
  editor!: AbstractEditor;

  productId!: bigint;
  mode: Signal<'edit' | 'markField' | 'markDomain' | 'markMethod'> = editorMode;
  fields = signal<string[]>([]);
  domainName?: string;
  domains: {name: string, fields: [], methods: []}[] = [];
  unUsedFields: string[] = ['qqq','www'];
  unUsedMethods: string[] = ['eee', 'rrr'];


  constructor(
    private route: ActivatedRoute,
    @Inject(RemoteService)
    private productRepository: Consumer<ProductDomainService>,
    private editorService: EditorService,
    private toast: ToastrService,
  ) {
  }

  get domainFieldContainers(){
    return this.domains.map(i => i.name + 'Field').concat('unUsedFieldsContainer');
  }

  get domainMethodContainers(){
    return this.domains.map(i => i.name + 'Method').concat('unUsedMethodsContainer');
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  creatDomain() {
    if(!this.domainName){
      return;
    }
    if(this.domains.find(i => i.name === this.domainName)){
      this.toast.warning("当前领域名称已存在，请检查！");
      return;
    }
    this.domains = [...this.domains, {name: this.domainName, fields: [], methods: []}]
    this.domainName = undefined;
  }

  save() {
    const str = this.editorService.doc2String(this.editor.doc);
    console.log(this.editor.doc.blockCollection.yBlocks.toJSON());

    this.productRepository
      .saveProductDocData(this.productId, str)
      .subscribe(() => {
        this.toast.success("保存成功");
      });
  }
  addNewFeature() {
    const doc = this.editor.doc;
    const note = doc.getBlocksByFlavour("affine:note")[0];
    doc.addBlock('affine:feature', {}, note.id);
  }

  ngOnInit(): void {
    this.productId = BigInt(this.route.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
    this.productRepository.detailProduct(this.productId).subscribe(res => {
      this.editor = this.editorService.createEditor(res?.base64Data);
      this.editorEle().nativeElement.appendChild(this.editor);
    });
  }

  ngOnDestroy(): void {
    this.editorService.removeDoc(this.editor?.doc);
  }
}

