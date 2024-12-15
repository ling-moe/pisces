import { NoteBlockSchema, ParagraphBlockSchema, ListBlockSchema, AffineSchemas } from "@blocksuite/blocks";
import { FeatureContentBlockSchema } from "./feature-content/feature-content-model";
import { FeatureBlockSchema } from "./feature/feature-model";

NoteBlockSchema.model.children.push('affine:feature');
NoteBlockSchema.model.parent.push('affine:feature');
ParagraphBlockSchema.model.parent.push('affine:feature', 'affine:feature-content');
ListBlockSchema.model.parent.push('affine:feature');

export const CustomSchemas = [
  ...AffineSchemas,
  FeatureBlockSchema,
  FeatureContentBlockSchema,
  NoteBlockSchema,
  ParagraphBlockSchema,
  ListBlockSchema
];
