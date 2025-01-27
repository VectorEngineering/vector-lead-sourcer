import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'

export const CustomerScalarWhereInputSchema: z.ZodType<Prisma.CustomerScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => CustomerScalarWhereInputSchema), z.lazy(() => CustomerScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => CustomerScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => CustomerScalarWhereInputSchema), z.lazy(() => CustomerScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        name: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        email: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        avatar: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        externalId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        stripeCustomerId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        linkId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        clickId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        clickedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        country: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        projectId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        projectConnectId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        addressLine1: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        addressLine2: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        city: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contact: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        countryCode: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        state: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        zip: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        note: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        phone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        token: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        vatNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        website: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        companyName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tradingName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        registrationNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        isVendor: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        alternativePhone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fax: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contactTitle: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contactEmail: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        contactPhone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingAddressLine1: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingAddressLine2: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingCity: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingState: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingZip: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingCountryCode: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingEmail: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        taxId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        taxExempt: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        taxExemptionNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        currency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        preferredPaymentMethod: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentTerms: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        creditLimit: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        bankName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankAccountName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankAccountNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankRoutingNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankSwiftCode: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankIban: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        industry: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerType: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerRating: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        discountTerms: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        latePaymentPenalty: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        creditScore: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
        lastOrderDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        accountManager: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        shippingAddresses: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingAddresses: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        warehouseAddresses: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingCurrency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        billingCycle: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        invoiceDeliveryMethod: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        invoiceFormat: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        purchaseOrderRequired: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        autoInvoice: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        taxExemptionExpiry: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        taxJurisdiction: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        taxClassification: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        withholdingTaxRate: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        taxDocuments: z.lazy(() => JsonNullableFilterSchema).optional(),
        availableCredit: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        riskRating: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        insurancePolicy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        insuranceExpiry: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        insuranceCoverage: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        earlyPaymentDiscount: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        minimumOrderValue: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        maximumOrderValue: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        averagePaymentDays: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        paymentFrequency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        bankAccounts: z.lazy(() => JsonNullableFilterSchema).optional(),
        contractStartDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        contractEndDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        contractRenewalDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        contractStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        legalStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        certifications: z.lazy(() => JsonNullableFilterSchema).optional(),
        licenses: z.lazy(() => JsonNullableFilterSchema).optional(),
        ndaStatus: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        ndaExpiryDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        customerSegment: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accountTier: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        leadSource: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        marketingCampaigns: z.lazy(() => JsonNullableFilterSchema).optional(),
        preferredLanguage: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        communicationPreferences: z.lazy(() => JsonNullableFilterSchema).optional(),
        subscriptionStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        loyaltyPoints: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        referralSource: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        referralCode: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lifetimeValue: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        acquisitionCost: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        retentionRate: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        satisfactionScore: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        lastReviewDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        nextReviewDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        erpId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        crmId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        accountingId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        lastLoginDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lastInteractionDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        totalOrders: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        totalReturns: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        activeSubscriptions: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        notes: z.lazy(() => JsonNullableFilterSchema).optional()
    })
    .strict()

export default CustomerScalarWhereInputSchema
