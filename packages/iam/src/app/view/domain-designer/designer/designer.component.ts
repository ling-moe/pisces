import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Doc } from "@blocksuite/store";
import { Consumer, RemoteService } from "@pisces/musubi/client";
import { fromUint8Array } from 'js-base64';
import { encodeStateAsUpdate } from "yjs";
import { ProductDomainService } from "../../../domain/product.entity";
import { EditorProviderService } from "./editor-provider.service";

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent implements OnInit, AfterViewInit {

  @ViewChild('editor', { static: true })
  editor!: ElementRef;

  productId!: bigint;

  constructor(
    private route: ActivatedRoute,
    @Inject(RemoteService)
    private productRepository: Consumer<ProductDomainService>,
    private cdr: ChangeDetectorRef,
    private editorProviderService: EditorProviderService
  ) {
  }

  ngOnInit(): void {
    this.productId = BigInt(this.route.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
    const editor = this.editorProviderService.getEditor();
    if (this.editor.nativeElement && editor) {
      this.editor.nativeElement.appendChild(editor);
    }
    // this.productRepository.detailProduct(this.productId).subscribe(res => {
    //   if(res?.data){
    //     applyUpdate(doc.spaceDoc, res.data)
    //   }
    // })
  }

  save() {
    this.productRepository.saveProductDocData(this.productId, fromUint8Array(encodeStateAsUpdate(this.editorProviderService.getDoc().spaceDoc))).subscribe(console.log)

    //Y.encodeStateAsUpdate（全量），Y.encodeStateVector(状态向量差异)，存储在数据库要用byte
    // console.log(this.doc..toJSON());
  }
  addNewFeature() {
    const doc = this.editorProviderService.getDoc();
    const note = doc.getBlockByFlavour("affine:note")[0];
    doc.addBlock('affine:feature', {},note.id);
  }

}

