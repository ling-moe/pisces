/** Legacy entry used for AFFiNE ESM module compat */
/// <reference types="@blocksuite/global" />
// Import models only, the bundled file should not include anything else.
import { CodeBlockSchema, ParagraphBlockSchema, RootBlockSchema, ListBlockSchema, NoteBlockSchema, DividerBlockSchema, ImageBlockSchema, SurfaceBlockSchema, BookmarkBlockSchema, FrameBlockSchema, DatabaseBlockSchema, SurfaceRefBlockSchema, DataViewBlockSchema, AttachmentBlockSchema, EmbedYoutubeBlockSpec, EmbedFigmaBlockSpec, EmbedGithubBlockSpec, EmbedHtmlBlockSpec, EmbedLinkedDocBlockSpec, EmbedLoomBlockSpec } from '@blocksuite/blocks';
import type { BlockSchema } from '@blocksuite/store';
import type { z } from 'zod';
import { EmbedFeatureBlockSpec } from './ddd.block';
import { BizFlowBlockSchema } from './biz-flow';

/** Built-in first party block models built for affine */
export const CustomSchemas: z.infer<typeof BlockSchema>[] = [
  CodeBlockSchema,
  ParagraphBlockSchema,
  RootBlockSchema,
  ListBlockSchema,
  NoteBlockSchema,
  DividerBlockSchema,
  ImageBlockSchema,
  SurfaceBlockSchema,
  BookmarkBlockSchema,
  FrameBlockSchema,
  DatabaseBlockSchema,
  SurfaceRefBlockSchema,
  DataViewBlockSchema,
  AttachmentBlockSchema,
  EmbedYoutubeBlockSpec.schema,
  EmbedFigmaBlockSpec.schema,
  EmbedGithubBlockSpec.schema,
  EmbedHtmlBlockSpec.schema,
  EmbedLinkedDocBlockSpec.schema,
  EmbedLoomBlockSpec.schema,
  EmbedFeatureBlockSpec.schema,
  BizFlowBlockSchema,
];
