import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAccessRuleIncludeSchema } from '../inputTypeSchemas/PipelineAccessRuleIncludeSchema'
import { PipelineAccessRuleCreateInputSchema } from '../inputTypeSchemas/PipelineAccessRuleCreateInputSchema'
import { PipelineAccessRuleUncheckedCreateInputSchema } from '../inputTypeSchemas/PipelineAccessRuleUncheckedCreateInputSchema'
import { AccessRuleConditionFindManyArgsSchema } from './AccessRuleConditionFindManyArgsSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
import { PipelineAccessRuleCountOutputTypeArgsSchema } from './PipelineAccessRuleCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineAccessRuleSelectSchema: z.ZodType<Prisma.PipelineAccessRuleSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        roleId: z.boolean().optional(),
        userId: z.boolean().optional(),
        teamId: z.boolean().optional(),
        accessLevel: z.boolean().optional(),
        conditions: z.union([z.boolean(), z.lazy(() => AccessRuleConditionFindManyArgsSchema)]).optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineAccessRuleCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const PipelineAccessRuleCreateArgsSchema: z.ZodType<Prisma.PipelineAccessRuleCreateArgs> = z
    .object({
        select: PipelineAccessRuleSelectSchema.optional(),
        include: PipelineAccessRuleIncludeSchema.optional(),
        data: z.union([PipelineAccessRuleCreateInputSchema, PipelineAccessRuleUncheckedCreateInputSchema])
    })
    .strict()

export default PipelineAccessRuleCreateArgsSchema
