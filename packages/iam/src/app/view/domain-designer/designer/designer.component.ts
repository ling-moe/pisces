import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { createEmptyDoc, PageEditor } from '@blocksuite/presets';
import { Doc } from "@blocksuite/store";
import { Consumer, RemoteService } from "@pisces/musubi/client";
import { FeatureBlockComponent } from '../blocksuite-block/feature';
import { FeatureContentBlockComponent } from '../blocksuite-block/feature-content';
import { ProductFeatureDomainService } from './../../../domain/product-feature.entity';
import { CustomSchemas } from './schemas';
import { CustomBlockSpecs } from './specs';

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent implements OnInit, AfterViewInit {

  @ViewChild('editor', { static: true })
  editor!: ElementRef;
  doc!: Doc;
  noteId!: string;

  productId!: bigint;

  constructor(
    private route: ActivatedRoute,
    @Inject(RemoteService)
    private menuRepository: Consumer<ProductFeatureDomainService>,
  ) {
  }

  ngOnInit(): void {
    this.route.snapshot.params['productId'];
  }

  ngAfterViewInit(): void {
    const doc = createEmptyDoc().init();
    doc.schema.register(CustomSchemas);
    const editor = new PageEditor();
    editor.doc = doc;
    editor.specs = CustomBlockSpecs;
    this.doc = doc;
    this.editor.nativeElement.appendChild(editor);
    FeatureBlockComponent;
    FeatureContentBlockComponent;
    const pageBlockId = doc.addBlock('affine:page', {});
    doc.addBlock('affine:surface', {}, pageBlockId);
    this.noteId = doc.addBlock('affine:note', {}, pageBlockId);
    doc.addBlock('affine:feature', {}, this.noteId);
  }

  save() {
    //Y.encodeStateAsUpdate（全量），Y.encodeStateVector(状态向量差异)，存储在数据库要用byte
    console.log(this.doc.yBlocks.toJSON());
  }
  addNewFeature() {
    this.doc.addBlock('affine:feature', {}, this.noteId);
  }

}

