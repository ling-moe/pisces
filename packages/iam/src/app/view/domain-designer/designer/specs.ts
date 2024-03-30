import type { BlockSpec } from '@blocksuite/block-std';
import { PageRootBlockWidgetName, RootBlockSchema, PageRootService, EdgelessRootBlockWidgetName, EdgelessRootService, ListBlockSchema, ListService, NoteBlockSchema, NoteService, DatabaseBlockSchema, DatabaseService, DataViewBlockSchema, DividerBlockSchema, CodeBlockSchema, ImageBlockSchema, ImageService, ParagraphBlockSchema, ParagraphService, BookmarkBlockSchema, BookmarkService, AttachmentBlockSchema, AttachmentService, EmbedFigmaBlockSpec, EmbedYoutubeBlockSpec, EmbedGithubBlockSpec, EmbedHtmlBlockSpec, EmbedLinkedDocBlockSpec, EmbedLoomBlockSpec, SurfaceBlockSchema, SurfaceRefBlockSchema, SurfaceRefBlockService, SurfaceService, FrameBlockSchema } from '@blocksuite/blocks';
import { FontConfig } from '@blocksuite/blocks/dist/root-block/font-loader/font-loader';
import { AFFINE_DOC_REMOTE_SELECTION_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/doc-remote-selection/doc-remote-selection';
import { AFFINE_DRAG_HANDLE_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/drag-handle/drag-handle';
// import { AFFINE_EDGELESS_REMOTE_SELECTION_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/edgeless-remote-selection';
// import { AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/edgeless-zoom-toolbar';
import { AFFINE_FORMAT_BAR_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/format-bar/format-bar';
// import { AFFINE_LINKED_DOC_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/linked-doc';
import { AFFINE_MODAL_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/modal/modal';
import { AFFINE_PAGE_DRAGGING_AREA_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/page-dragging-area/page-dragging-area';
// import { AFFINE_SLASH_MENU_WIDGET } from '@blocksuite/blocks/dist/root-block/widgets/slash-menu';
import { CanvasTextFontFamily, CanvasTextFontWeight, CanvasTextFontStyle } from '@blocksuite/blocks/dist/surface-block/consts';
import { literal, unsafeStatic } from 'lit/static-html.js';
import { EmbedFeatureBlockSpec } from './ddd.block';


class CustomPageRootService extends PageRootService {
  override loadFonts() {
    this.fontLoader.load(CanvasTextFonts);
  }
}

class CustomEdgelessRootService extends EdgelessRootService {
  override loadFonts() {
    this.fontLoader.load(CanvasTextFonts);
  }
}


const DocPageSpec: BlockSpec<PageRootBlockWidgetName> = {
  schema: RootBlockSchema,
  service: CustomPageRootService,
  view: {
    component: literal`affine-page-root`,
    widgets: {
      // [AFFINE_BLOCK_HUB_WIDGET]: literal`${unsafeStatic(
      //   AFFINE_BLOCK_HUB_WIDGET
      // )}`,
      [AFFINE_MODAL_WIDGET]: literal`${unsafeStatic(AFFINE_MODAL_WIDGET)}`,
      ['affine-slash-menu-widget']: literal`${unsafeStatic(
        'affine-slash-menu-widget'
      )}`,
      ['affine-linked-doc-widget']: literal`${unsafeStatic(
        'affine-linked-doc-widget'
      )}`,
      [AFFINE_DRAG_HANDLE_WIDGET]: literal`${unsafeStatic(
        AFFINE_DRAG_HANDLE_WIDGET
      )}`,
      [AFFINE_FORMAT_BAR_WIDGET]: literal`${unsafeStatic(
        AFFINE_FORMAT_BAR_WIDGET
      )}`,
      [AFFINE_DOC_REMOTE_SELECTION_WIDGET]: literal`${unsafeStatic(
        AFFINE_DOC_REMOTE_SELECTION_WIDGET
      )}`,
      [AFFINE_PAGE_DRAGGING_AREA_WIDGET]: literal`${unsafeStatic(
        AFFINE_PAGE_DRAGGING_AREA_WIDGET
      )}`,
    },
  },
};

const EdgelessPageSpec: BlockSpec<EdgelessRootBlockWidgetName> = {
  schema: RootBlockSchema,
  service: CustomEdgelessRootService,
  view: {
    component: literal`affine-edgeless-root`,
    widgets: {
      // [AFFINE_BLOCK_HUB_WIDGET]: literal`${unsafeStatic(
      //   AFFINE_BLOCK_HUB_WIDGET
      // )}`,
      [AFFINE_MODAL_WIDGET]: literal`${unsafeStatic(AFFINE_MODAL_WIDGET)}`,
      ['affine-slash-menu-widget']: literal`${unsafeStatic(
        'affine-slash-menu-widget'
      )}`,
      ['affine-linked-doc-widget']: literal`${unsafeStatic(
        'affine-linked-doc-widget'
      )}`,
      [AFFINE_DRAG_HANDLE_WIDGET]: literal`${unsafeStatic(
        AFFINE_DRAG_HANDLE_WIDGET
      )}`,
      [AFFINE_FORMAT_BAR_WIDGET]: literal`${unsafeStatic(
        AFFINE_FORMAT_BAR_WIDGET
      )}`,
      [AFFINE_DOC_REMOTE_SELECTION_WIDGET]: literal`${unsafeStatic(
        AFFINE_DOC_REMOTE_SELECTION_WIDGET
      )}`,
      ['affine-edgeless-remote-selection-widget']: literal`${unsafeStatic(
        'affine-edgeless-remote-selection-widget'
      )}`,
      ['affine-edgeless-zoom-toolbar-widget']: literal`${unsafeStatic(
        'affine-edgeless-zoom-toolbar-widget'
      )}`,
    },
  },
};

const CommonFirstPartyBlockSpecs: BlockSpec[] = [
  {
    schema: ListBlockSchema,
    view: {
      component: literal`affine-list`,
    },
    service: ListService,
  },
  {
    schema: NoteBlockSchema,
    service: NoteService,
    view: {
      component: literal`affine-note`,
    },
  },
  {
    schema: DatabaseBlockSchema,
    service: DatabaseService,
    view: {
      component: literal`affine-database`,
    },
  },
  {
    schema: DataViewBlockSchema,
    view: {
      component: literal`affine-data-view`,
    },
  },
  {
    schema: DividerBlockSchema,
    view: {
      component: literal`affine-divider`,
    },
  },
  {
    schema: CodeBlockSchema,
    view: {
      component: literal`affine-code`,
    },
  },
  {
    schema: ImageBlockSchema,
    service: ImageService,
    view: {
      component: literal`affine-image`,
      widgets: {
        imageToolbar: literal`affine-image-toolbar-widget`,
      },
    },
  },
  {
    schema: ParagraphBlockSchema,
    view: {
      component: literal`affine-paragraph`,
    },
    service: ParagraphService,
  },
  {
    schema: BookmarkBlockSchema,
    view: {
      component: literal`affine-bookmark`,
    },
    service: BookmarkService,
  },
  {
    schema: AttachmentBlockSchema,
    view: {
      component: literal`affine-attachment`,
    },
    service: AttachmentService,
  },
  EmbedFigmaBlockSpec,
  EmbedYoutubeBlockSpec,
  EmbedGithubBlockSpec,
  EmbedHtmlBlockSpec,
  EmbedLinkedDocBlockSpec,
  EmbedLoomBlockSpec,
];

export const CustomBlockSpecs: BlockSpec[] = [
  EmbedFeatureBlockSpec,
  DocPageSpec,
  ...CommonFirstPartyBlockSpecs,
  {
    schema: SurfaceBlockSchema,
    view: {
      component: literal`affine-surface`,
    },
    service: SurfaceService,
  },
  {
    schema: SurfaceRefBlockSchema,
    service: SurfaceRefBlockService,
    view: {
      component: literal`affine-surface-ref`,
      widgets: {
        surfaceToolbar: literal`affine-surface-ref-toolbar`,
      },
    },
  },
];

export const EdgelessEditorBlockSpecs: BlockSpec[] = [
  EdgelessPageSpec,
  ...CommonFirstPartyBlockSpecs,
  {
    schema: SurfaceBlockSchema,
    view: {
      component: literal`affine-surface`,
    },
    service: SurfaceService,
  },
  {
    schema: FrameBlockSchema,
    view: {
      component: literal`affine-frame`,
    },
  },
  {
    schema: SurfaceRefBlockSchema,
    service: SurfaceRefBlockService,
    view: {
      component: literal`affine-edgeless-surface-ref`,
    },
  },
];


export const CanvasTextFonts: FontConfig[] = [
  // Inter, https://fonts.cdnfonts.com/css/inter?styles=29139,29134,29135,29136,29140,29141
  {
    font: CanvasTextFontFamily.Inter,
    url: '/assets/fonts/Inter-Light-BETA.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Inter,
    url: '/assets/fonts/Inter-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Inter,
    url: '/assets/fonts/Inter-SemiBold.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Inter,
    url: '/assets/fonts/Inter-LightItalic-BETA.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Inter,
    url: '/assets/fonts/Inter-Italic.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Inter,
    url: '/assets/fonts/Inter-SemiBoldItalic.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Italic,
  },
  // Kalam, https://fonts.cdnfonts.com/css/kalam?styles=15166,170689,170687
  {
    font: CanvasTextFontFamily.Kalam,
    url: '/assets/fonts/Kalam-Light.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Kalam,
    url: '/assets/fonts/Kalam-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Kalam,
    url: '/assets/fonts/Kalam-Bold.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Normal,
  },
  // Satoshi, https://fonts.cdnfonts.com/css/satoshi?styles=135009,135004,135005,135006,135002,135003
  {
    font: CanvasTextFontFamily.Satoshi,
    url: '/assets/fonts/Satoshi-Light.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Satoshi,
    url: '/assets/fonts/Satoshi-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Satoshi,
    url: '/assets/fonts/Satoshi-Bold.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Satoshi,
    url: '/assets/fonts/Satoshi-LightItalic.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Satoshi,
    url: '/assets/fonts/Satoshi-Italic.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Satoshi,
    url: '/assets/fonts/Satoshi-BoldItalic.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Italic,
  },
  // Poppins, https://fonts.cdnfonts.com/css/poppins?styles=20394,20389,20390,20391,20395,20396
  {
    font: CanvasTextFontFamily.Poppins,
    url: '/assets/fonts/Poppins-Light.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Poppins,
    url: '/assets/fonts/Poppins-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Poppins,
    url: '/assets/fonts/Poppins-SemiBold.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Poppins,
    url: '/assets/fonts/Poppins-LightItalic.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Poppins,
    url: '/assets/fonts/Poppins-Italic.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Poppins,
    url: '/assets/fonts/Poppins-SemiBoldItalic.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Italic,
  },
  // Lora, https://fonts.cdnfonts.com/css/lora-4?styles=50357,50356,50354,50355
  {
    font: CanvasTextFontFamily.Lora,
    url: '/assets/fonts/Lora-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Lora,
    url: '/assets/fonts/Lora-Bold.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.Lora,
    url: '/assets/fonts/Lora-Italic.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Italic,
  },
  {
    font: CanvasTextFontFamily.Lora,
    url: '/assets/fonts/Lora-BoldItalic.woff',
    weight: CanvasTextFontWeight.SemiBold,
    style: CanvasTextFontStyle.Italic,
  },
  // BebasNeue, https://fonts.cdnfonts.com/css/bebas-neue?styles=169713,17622,17620
  {
    font: CanvasTextFontFamily.BebasNeue,
    url: '/assets/fonts/BebasNeue-Light.woff',
    weight: CanvasTextFontWeight.Light,
    style: CanvasTextFontStyle.Normal,
  },
  {
    font: CanvasTextFontFamily.BebasNeue,
    url: '/assets/fonts/BebasNeue-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
  // OrelegaOne, https://fonts.cdnfonts.com/css/orelega-one?styles=148618
  {
    font: CanvasTextFontFamily.OrelegaOne,
    url: '/assets/fonts/OrelegaOne-Regular.woff',
    weight: CanvasTextFontWeight.Regular,
    style: CanvasTextFontStyle.Normal,
  },
];

