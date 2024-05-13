import { NoteBlockSchema, ParagraphBlockSchema, ListBlockSchema } from "@blocksuite/blocks";
import { FeatureContentBlockSchema } from "../blocksuite-block/feature-content/feature-content-model";
import { FeatureBlockSchema } from "../blocksuite-block/feature/feature-model";

NoteBlockSchema.model.children.push('affine:feature');
NoteBlockSchema.model.parent.push('affine:feature');
ParagraphBlockSchema.model.parent.push('affine:feature', 'affine:feature-content');
ListBlockSchema.model.parent.push('affine:feature');

export const CustomSchemas = [
  FeatureBlockSchema,
  FeatureContentBlockSchema,
  NoteBlockSchema,
  NoteBlockSchema,
  ParagraphBlockSchema,
  ListBlockSchema
];
