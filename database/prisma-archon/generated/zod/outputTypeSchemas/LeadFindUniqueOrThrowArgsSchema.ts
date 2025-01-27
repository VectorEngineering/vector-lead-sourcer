import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadIncludeSchema } from '../inputTypeSchemas/LeadIncludeSchema'
import { LeadWhereUniqueInputSchema } from '../inputTypeSchemas/LeadWhereUniqueInputSchema'
import { EndpointArgsSchema } from './EndpointArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSelectSchema: z.ZodType<Prisma.LeadSelect> = z
    .object({
        id: z.boolean().optional(),
        endpointId: z.boolean().optional(),
        data: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        endpoint: z.union([z.boolean(), z.lazy(() => EndpointArgsSchema)]).optional()
    })
    .strict()

export const LeadFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LeadFindUniqueOrThrowArgs> = z
    .object({
        select: LeadSelectSchema.optional(),
        include: LeadIncludeSchema.optional(),
        where: LeadWhereUniqueInputSchema
    })
    .strict()

export default LeadFindUniqueOrThrowArgsSchema
