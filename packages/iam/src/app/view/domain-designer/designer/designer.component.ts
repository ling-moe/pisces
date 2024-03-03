import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { createEmptyPage, DocEditor } from "@blocksuite/presets";

@Component({
  selector: 'pisces-designer',
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss'
})
export class DesignerComponent implements OnInit {

  @ViewChild('container', {static: true})
  container!: ElementRef;
  constructor(
    private route: ActivatedRoute,
  ) {
  }
  productId!: bigint;

  ngOnInit(): void {
    this.productId =this.route.snapshot.params['id'];
    const editor = new DocEditor();
    const doc = createEmptyPage().init();
    editor.page = doc;
    const {docModeSpecs, edgelessModeSpecs} = getSpecs()
    editor.specs = docModeSpecs;
    this.container.nativeElement.appendChild(editor);

    // The first block will be added as root
    const rootId = doc.addBlock('affine:page');

// Insert second block as a child of the root with empty props
    const props = {};
    const noteId = doc.addBlock('affine:note', props, rootId);
  }

}


import { DocEditorBlockSpecs, EdgelessEditorBlockSpecs, DocPageService, EdgelessPageService } from '@blocksuite/blocks';

class CustomDocPageService extends DocPageService {
  override loadFonts() {}
}

class CustomEdgelessPageService extends EdgelessPageService {
  override loadFonts() {}
}

export const getSpecs = () => {
  const docModeSpecs = DocEditorBlockSpecs.map((preset) => {
    if (preset.schema.model.flavour === 'affine:page') {
      return {
        ...preset,
        service: CustomDocPageService,
      };
    }

    return preset;
  });

  const edgelessModeSpecs = EdgelessEditorBlockSpecs.map((preset) => {
    if (preset.schema.model.flavour === 'affine:page') {
      return {
        ...preset,
        service: CustomEdgelessPageService,
      };
    }

    return preset;
  });

  return {
    docModeSpecs,
    edgelessModeSpecs,
  };
};
