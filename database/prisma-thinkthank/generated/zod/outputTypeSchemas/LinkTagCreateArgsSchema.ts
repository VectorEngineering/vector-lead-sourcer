import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkTagIncludeSchema } from '../inputTypeSchemas/LinkTagIncludeSchema'
import { LinkTagCreateInputSchema } from '../inputTypeSchemas/LinkTagCreateInputSchema'
import { LinkTagUncheckedCreateInputSchema } from '../inputTypeSchemas/LinkTagUncheckedCreateInputSchema'
import { LinkArgsSchema } from "../outputTypeSchemas/LinkArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LinkTagSelectSchema: z.ZodType<Prisma.LinkTagSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  linkId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const LinkTagCreateArgsSchema: z.ZodType<Prisma.LinkTagCreateArgs> = z.object({
  select: LinkTagSelectSchema.optional(),
  include: LinkTagIncludeSchema.optional(),
  data: z.union([ LinkTagCreateInputSchema,LinkTagUncheckedCreateInputSchema ]),
}).strict() ;

export default LinkTagCreateArgsSchema;
