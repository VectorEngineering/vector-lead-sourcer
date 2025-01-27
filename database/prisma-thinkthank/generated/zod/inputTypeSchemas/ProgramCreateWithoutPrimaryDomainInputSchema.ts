import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramTypeSchema } from './ProgramTypeSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DiscountCreateNestedManyWithoutProgramInputSchema } from './DiscountCreateNestedManyWithoutProgramInputSchema'
import { ProjectCreateNestedOneWithoutProgramsInputSchema } from './ProjectCreateNestedOneWithoutProgramsInputSchema'
import { ProgramEnrollmentCreateNestedManyWithoutProgramInputSchema } from './ProgramEnrollmentCreateNestedManyWithoutProgramInputSchema'
import { PayoutCreateNestedManyWithoutProgramInputSchema } from './PayoutCreateNestedManyWithoutProgramInputSchema'
import { SaleCreateNestedManyWithoutProgramInputSchema } from './SaleCreateNestedManyWithoutProgramInputSchema'
import { InvoiceCreateNestedManyWithoutProgramInputSchema } from './InvoiceCreateNestedManyWithoutProgramInputSchema'
import { ProgramResourceCreateNestedManyWithoutProgramInputSchema } from './ProgramResourceCreateNestedManyWithoutProgramInputSchema'
import { ProgramApplicationCreateNestedManyWithoutProgramInputSchema } from './ProgramApplicationCreateNestedManyWithoutProgramInputSchema'
import { ProgramInviteCreateNestedManyWithoutProgramInputSchema } from './ProgramInviteCreateNestedManyWithoutProgramInputSchema'
import { LinkCreateNestedManyWithoutProgramInputSchema } from './LinkCreateNestedManyWithoutProgramInputSchema'

export const ProgramCreateWithoutPrimaryDomainInputSchema: z.ZodType<Prisma.ProgramCreateWithoutPrimaryDomainInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        slug: z.string(),
        logo: z.string().optional().nullable(),
        wordmark: z.string().optional().nullable(),
        brandColor: z.string().optional().nullable(),
        url: z.string().optional().nullable(),
        type: z.lazy(() => ProgramTypeSchema).optional(),
        cookieLength: z.number().int().optional(),
        commissionAmount: z.number().int().optional(),
        commissionType: z.lazy(() => CommissionTypeSchema).optional(),
        commissionDuration: z.number().int().optional().nullable(),
        commissionInterval: z
            .lazy(() => CommissionIntervalSchema)
            .optional()
            .nullable(),
        landerData: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        discounts: z.lazy(() => DiscountCreateNestedManyWithoutProgramInputSchema).optional(),
        workspace: z.lazy(() => ProjectCreateNestedOneWithoutProgramsInputSchema),
        partners: z.lazy(() => ProgramEnrollmentCreateNestedManyWithoutProgramInputSchema).optional(),
        payouts: z.lazy(() => PayoutCreateNestedManyWithoutProgramInputSchema).optional(),
        sales: z.lazy(() => SaleCreateNestedManyWithoutProgramInputSchema).optional(),
        invoices: z.lazy(() => InvoiceCreateNestedManyWithoutProgramInputSchema).optional(),
        resources: z.lazy(() => ProgramResourceCreateNestedManyWithoutProgramInputSchema).optional(),
        applications: z.lazy(() => ProgramApplicationCreateNestedManyWithoutProgramInputSchema).optional(),
        invites: z.lazy(() => ProgramInviteCreateNestedManyWithoutProgramInputSchema).optional(),
        links: z.lazy(() => LinkCreateNestedManyWithoutProgramInputSchema).optional()
    })
    .strict()

export default ProgramCreateWithoutPrimaryDomainInputSchema
