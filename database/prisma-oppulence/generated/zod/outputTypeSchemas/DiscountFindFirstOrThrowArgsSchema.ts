import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DiscountIncludeSchema } from '../inputTypeSchemas/DiscountIncludeSchema'
import { DiscountWhereInputSchema } from '../inputTypeSchemas/DiscountWhereInputSchema'
import { DiscountOrderByWithRelationInputSchema } from '../inputTypeSchemas/DiscountOrderByWithRelationInputSchema'
import { DiscountWhereUniqueInputSchema } from '../inputTypeSchemas/DiscountWhereUniqueInputSchema'
import { DiscountScalarFieldEnumSchema } from '../inputTypeSchemas/DiscountScalarFieldEnumSchema'
import { ProgramArgsSchema } from './ProgramArgsSchema'
import { ProgramEnrollmentFindManyArgsSchema } from './ProgramEnrollmentFindManyArgsSchema'
import { DiscountCountOutputTypeArgsSchema } from './DiscountCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiscountSelectSchema: z.ZodType<Prisma.DiscountSelect> = z
    .object({
        id: z.boolean().optional(),
        amount: z.boolean().optional(),
        type: z.boolean().optional(),
        duration: z.boolean().optional(),
        interval: z.boolean().optional(),
        couponId: z.boolean().optional(),
        couponTestId: z.boolean().optional(),
        workspaceId: z.boolean().optional(),
        programId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        programEnrollments: z.union([z.boolean(), z.lazy(() => ProgramEnrollmentFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => DiscountCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const DiscountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DiscountFindFirstOrThrowArgs> = z
    .object({
        select: DiscountSelectSchema.optional(),
        include: DiscountIncludeSchema.optional(),
        where: DiscountWhereInputSchema.optional(),
        orderBy: z.union([DiscountOrderByWithRelationInputSchema.array(), DiscountOrderByWithRelationInputSchema]).optional(),
        cursor: DiscountWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([DiscountScalarFieldEnumSchema, DiscountScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default DiscountFindFirstOrThrowArgsSchema
