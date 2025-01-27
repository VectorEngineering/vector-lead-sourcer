import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadHistoryIncludeSchema } from '../inputTypeSchemas/LeadHistoryIncludeSchema'
import { LeadHistoryCreateInputSchema } from '../inputTypeSchemas/LeadHistoryCreateInputSchema'
import { LeadHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadHistoryUncheckedCreateInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadHistorySelectSchema: z.ZodType<Prisma.LeadHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        action: z.boolean().optional(),
        description: z.boolean().optional(),
        changes: z.boolean().optional(),
        metadata: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        changeType: z.boolean().optional(),
        source: z.boolean().optional(),
        ipAddress: z.boolean().optional(),
        userAgent: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadHistoryCreateArgsSchema: z.ZodType<Prisma.LeadHistoryCreateArgs> = z
    .object({
        select: LeadHistorySelectSchema.optional(),
        include: LeadHistoryIncludeSchema.optional(),
        data: z.union([LeadHistoryCreateInputSchema, LeadHistoryUncheckedCreateInputSchema])
    })
    .strict()

export default LeadHistoryCreateArgsSchema
