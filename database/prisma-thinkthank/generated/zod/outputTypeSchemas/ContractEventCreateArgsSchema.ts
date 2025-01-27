import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractEventIncludeSchema } from '../inputTypeSchemas/ContractEventIncludeSchema'
import { ContractEventCreateInputSchema } from '../inputTypeSchemas/ContractEventCreateInputSchema'
import { ContractEventUncheckedCreateInputSchema } from '../inputTypeSchemas/ContractEventUncheckedCreateInputSchema'
import { ContractArgsSchema } from './ContractArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContractEventSelectSchema: z.ZodType<Prisma.ContractEventSelect> = z
    .object({
        id: z.boolean().optional(),
        contractId: z.boolean().optional(),
        type: z.boolean().optional(),
        description: z.boolean().optional(),
        status: z.boolean().optional(),
        dueDate: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional()
    })
    .strict()

export const ContractEventCreateArgsSchema: z.ZodType<Prisma.ContractEventCreateArgs> = z
    .object({
        select: ContractEventSelectSchema.optional(),
        include: ContractEventIncludeSchema.optional(),
        data: z.union([ContractEventCreateInputSchema, ContractEventUncheckedCreateInputSchema])
    })
    .strict()

export default ContractEventCreateArgsSchema
