import { PageEditorBlockSpecs } from "@blocksuite/blocks";
import { FeatureBlockSpec } from "../blocksuite-block/feature";
import { FeatureContentSpec } from "../blocksuite-block/feature-content";

export const CustomBlockSpecs = [...PageEditorBlockSpecs, FeatureBlockSpec, FeatureContentSpec];
