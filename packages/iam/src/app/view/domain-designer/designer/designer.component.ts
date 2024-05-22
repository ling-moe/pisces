import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injector,
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

  constructor(
    private route: ActivatedRoute,
    @Inject(RemoteService)
    private productRepository: Consumer<ProductDomainService>,
    private editorService: EditorService,
    private toast: ToastrService,
    private di: Injector,
  ) {
  }
  save() {
    const str = this.editorService.doc2String(this.editor.doc);
    this.productRepository.saveProductDocData(this.productId, str)
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

