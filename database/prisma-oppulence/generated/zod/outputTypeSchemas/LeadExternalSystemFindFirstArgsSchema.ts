import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadExternalSystemIncludeSchema } from '../inputTypeSchemas/LeadExternalSystemIncludeSchema'
import { LeadExternalSystemWhereInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereInputSchema'
import { LeadExternalSystemOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadExternalSystemOrderByWithRelationInputSchema'
import { LeadExternalSystemWhereUniqueInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereUniqueInputSchema'
import { LeadExternalSystemScalarFieldEnumSchema } from '../inputTypeSchemas/LeadExternalSystemScalarFieldEnumSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadExternalSystemSelectSchema: z.ZodType<Prisma.LeadExternalSystemSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        provider: z.boolean().optional(),
        externalId: z.boolean().optional(),
        lastSynced: z.boolean().optional(),
        syncStatus: z.boolean().optional(),
        errorMessage: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadExternalSystemFindFirstArgsSchema: z.ZodType<Prisma.LeadExternalSystemFindFirstArgs> = z
    .object({
        select: LeadExternalSystemSelectSchema.optional(),
        include: LeadExternalSystemIncludeSchema.optional(),
        where: LeadExternalSystemWhereInputSchema.optional(),
        orderBy: z
            .union([LeadExternalSystemOrderByWithRelationInputSchema.array(), LeadExternalSystemOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadExternalSystemWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadExternalSystemScalarFieldEnumSchema, LeadExternalSystemScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadExternalSystemFindFirstArgsSchema
