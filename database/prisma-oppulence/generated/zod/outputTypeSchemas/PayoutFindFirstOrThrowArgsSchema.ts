import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PayoutIncludeSchema } from '../inputTypeSchemas/PayoutIncludeSchema'
import { PayoutWhereInputSchema } from '../inputTypeSchemas/PayoutWhereInputSchema'
import { PayoutOrderByWithRelationInputSchema } from '../inputTypeSchemas/PayoutOrderByWithRelationInputSchema'
import { PayoutWhereUniqueInputSchema } from '../inputTypeSchemas/PayoutWhereUniqueInputSchema'
import { PayoutScalarFieldEnumSchema } from '../inputTypeSchemas/PayoutScalarFieldEnumSchema'
import { ProgramArgsSchema } from './ProgramArgsSchema'
import { PartnerArgsSchema } from './PartnerArgsSchema'
import { InvoiceArgsSchema } from './InvoiceArgsSchema'
import { SaleFindManyArgsSchema } from './SaleFindManyArgsSchema'
import { PayoutCountOutputTypeArgsSchema } from './PayoutCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PayoutSelectSchema: z.ZodType<Prisma.PayoutSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        invoiceId: z.boolean().optional(),
        amount: z.boolean().optional(),
        currency: z.boolean().optional(),
        status: z.boolean().optional(),
        type: z.boolean().optional(),
        description: z.boolean().optional(),
        periodStart: z.boolean().optional(),
        periodEnd: z.boolean().optional(),
        quantity: z.boolean().optional(),
        stripeTransferId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        paidAt: z.boolean().optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        invoice: z.union([z.boolean(), z.lazy(() => InvoiceArgsSchema)]).optional(),
        sales: z.union([z.boolean(), z.lazy(() => SaleFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PayoutCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const PayoutFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PayoutFindFirstOrThrowArgs> = z
    .object({
        select: PayoutSelectSchema.optional(),
        include: PayoutIncludeSchema.optional(),
        where: PayoutWhereInputSchema.optional(),
        orderBy: z.union([PayoutOrderByWithRelationInputSchema.array(), PayoutOrderByWithRelationInputSchema]).optional(),
        cursor: PayoutWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([PayoutScalarFieldEnumSchema, PayoutScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default PayoutFindFirstOrThrowArgsSchema
