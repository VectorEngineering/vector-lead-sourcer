import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        programId: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        number: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        fee: z.lazy(() => SortOrderSchema).optional(),
        total: z.lazy(() => SortOrderSchema).optional(),
        receiptUrl: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        currency: z.lazy(() => SortOrderSchema).optional(),
        customerId: z.lazy(() => SortOrderSchema).optional(),
        customerName: z.lazy(() => SortOrderSchema).optional(),
        discount: z.lazy(() => SortOrderSchema).optional(),
        dueDate: z.lazy(() => SortOrderSchema).optional(),
        filePath: z.lazy(() => SortOrderSchema).optional(),
        fileSize: z.lazy(() => SortOrderSchema).optional(),
        internalNote: z.lazy(() => SortOrderSchema).optional(),
        invoiceNumber: z.lazy(() => SortOrderSchema).optional(),
        issueDate: z.lazy(() => SortOrderSchema).optional(),
        note: z.lazy(() => SortOrderSchema).optional(),
        paidAt: z.lazy(() => SortOrderSchema).optional(),
        reminderSentAt: z.lazy(() => SortOrderSchema).optional(),
        sentTo: z.lazy(() => SortOrderSchema).optional(),
        subtotal: z.lazy(() => SortOrderSchema).optional(),
        tax: z.lazy(() => SortOrderSchema).optional(),
        teamId: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        url: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        vat: z.lazy(() => SortOrderSchema).optional(),
        viewedAt: z.lazy(() => SortOrderSchema).optional(),
        version: z.lazy(() => SortOrderSchema).optional(),
        language: z.lazy(() => SortOrderSchema).optional(),
        timezone: z.lazy(() => SortOrderSchema).optional(),
        paymentMethod: z.lazy(() => SortOrderSchema).optional(),
        paymentStatus: z.lazy(() => SortOrderSchema).optional(),
        paymentDue: z.lazy(() => SortOrderSchema).optional(),
        refundAmount: z.lazy(() => SortOrderSchema).optional(),
        conversionRate: z.lazy(() => SortOrderSchema).optional(),
        processingFees: z.lazy(() => SortOrderSchema).optional(),
        profitMargin: z.lazy(() => SortOrderSchema).optional(),
        autoRemind: z.lazy(() => SortOrderSchema).optional(),
        approvalStatus: z.lazy(() => SortOrderSchema).optional(),
        approvedBy: z.lazy(() => SortOrderSchema).optional(),
        approvedAt: z.lazy(() => SortOrderSchema).optional(),
        taxExempt: z.lazy(() => SortOrderSchema).optional(),
        taxExemptReason: z.lazy(() => SortOrderSchema).optional(),
        templateId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceMinOrderByAggregateInputSchema
