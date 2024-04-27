import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EditorProviderService } from "./editor-provider.service";
import { FeatureModel } from "./ddd.block";
import { BlockModel } from "@blocksuite/store";
import { baseTextAttributes, InlineEditor } from '@blocksuite/inline';
import { Doc, UndoManager } from 'yjs';
import { z } from "zod";
import { RichText } from "@blocksuite/blocks";
import { nothing } from "lit";

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent implements AfterViewInit {
  save() {
    const doc = this.editorProvider.getWorkspace().getDoc('page1');
    console.log(doc?.spaceDoc)
    const blocks = doc!.getBlockByFlavour('affine:embed-feature') as BlockModel<FeatureModel>[];
    console.log(blocks.map(block => block.bizFlow.yText.toString()))

  }
  addNewFeature() {
    const doc = this.editorProvider.getWorkspace().getDoc('page1');
    const blocks = doc!.getBlockByFlavour('affine:note');
    doc?.addBlock('affine:embed-feature', {}, blocks[blocks?.length -1].id)
  }

  @ViewChild('container', {static: true})
  container!: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private ngzone: NgZone,
    private editorProvider: EditorProviderService,
  ) {
  }
  productId!: bigint;

  ngAfterViewInit() {
    const customSchema = baseTextAttributes.extend({
      reference: z
        .object({
          type: z.enum([
            'LinkedPage',
          ]),
          pageId: z.string(),
        })
        .optional()
        .nullable()
        .catch(undefined),
      background: z.string().optional().nullable().catch(undefined),
      color: z.string().optional().nullable().catch(undefined),
    });
    const doc = new Doc();
    const yText = doc.getText('text');
    const inlineEditor = new InlineEditor(yText);
    inlineEditor.setAttributeSchema(customSchema);


    const myEditor = this.container.nativeElement;
    inlineEditor.mount(myEditor);
    // const editor = this.editorProvider.getEditor();
    // if (this.container.nativeElement && editor) {
    //   this.container.nativeElement.appendChild(editor);
    // }
  }

}

