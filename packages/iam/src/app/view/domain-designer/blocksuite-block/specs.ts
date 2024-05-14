import { EdgelessEditorBlockSpecs, PageEditorBlockSpecs } from "@blocksuite/blocks";
import { CustomDocPageService, CustomEdgelessPageService } from "./fix-font";
import { FeatureBlockSpec } from "./feature";
import { FeatureContentSpec } from "./feature-content";

//fix font
const docModeSpecs = PageEditorBlockSpecs.map((preset) => {
  if (preset.schema.model.flavour === 'affine:page') {
    return {
      ...preset,
      service: CustomDocPageService,
    };
  }
  return preset;
});
export const edgelessModeSpecs = EdgelessEditorBlockSpecs.map((preset) => {
  if (preset.schema.model.flavour === 'affine:page') {
    return {
      ...preset,
      service: CustomEdgelessPageService,
    };
  }
  return preset;
})


export const CustomBlockSpecs = [...docModeSpecs, FeatureBlockSpec, FeatureContentSpec];
