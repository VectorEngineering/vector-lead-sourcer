import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { PayoutStatusSchema } from './PayoutStatusSchema'
import { EnumPayoutStatusFieldUpdateOperationsInputSchema } from './EnumPayoutStatusFieldUpdateOperationsInputSchema'
import { PayoutTypeSchema } from './PayoutTypeSchema'
import { EnumPayoutTypeFieldUpdateOperationsInputSchema } from './EnumPayoutTypeFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { PartnerUpdateOneRequiredWithoutPayoutsNestedInputSchema } from './PartnerUpdateOneRequiredWithoutPayoutsNestedInputSchema'
import { InvoiceUpdateOneWithoutPayoutsNestedInputSchema } from './InvoiceUpdateOneWithoutPayoutsNestedInputSchema'
import { SaleUpdateManyWithoutPayoutNestedInputSchema } from './SaleUpdateManyWithoutPayoutNestedInputSchema'

export const PayoutUpdateWithoutProgramInputSchema: z.ZodType<Prisma.PayoutUpdateWithoutProgramInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        status: z.union([z.lazy(() => PayoutStatusSchema), z.lazy(() => EnumPayoutStatusFieldUpdateOperationsInputSchema)]).optional(),
        type: z.union([z.lazy(() => PayoutTypeSchema), z.lazy(() => EnumPayoutTypeFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        periodStart: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        periodEnd: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        quantity: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        stripeTransferId: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        paidAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        partner: z.lazy(() => PartnerUpdateOneRequiredWithoutPayoutsNestedInputSchema).optional(),
        invoice: z.lazy(() => InvoiceUpdateOneWithoutPayoutsNestedInputSchema).optional(),
        sales: z.lazy(() => SaleUpdateManyWithoutPayoutNestedInputSchema).optional()
    })
    .strict()

export default PayoutUpdateWithoutProgramInputSchema
