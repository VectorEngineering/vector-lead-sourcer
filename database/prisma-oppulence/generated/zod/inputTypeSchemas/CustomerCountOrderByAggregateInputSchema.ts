import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const CustomerCountOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        avatar: z.lazy(() => SortOrderSchema).optional(),
        externalId: z.lazy(() => SortOrderSchema).optional(),
        stripeCustomerId: z.lazy(() => SortOrderSchema).optional(),
        linkId: z.lazy(() => SortOrderSchema).optional(),
        clickId: z.lazy(() => SortOrderSchema).optional(),
        clickedAt: z.lazy(() => SortOrderSchema).optional(),
        country: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        projectConnectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        addressLine1: z.lazy(() => SortOrderSchema).optional(),
        addressLine2: z.lazy(() => SortOrderSchema).optional(),
        city: z.lazy(() => SortOrderSchema).optional(),
        contact: z.lazy(() => SortOrderSchema).optional(),
        countryCode: z.lazy(() => SortOrderSchema).optional(),
        state: z.lazy(() => SortOrderSchema).optional(),
        zip: z.lazy(() => SortOrderSchema).optional(),
        note: z.lazy(() => SortOrderSchema).optional(),
        phone: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        vatNumber: z.lazy(() => SortOrderSchema).optional(),
        website: z.lazy(() => SortOrderSchema).optional(),
        companyName: z.lazy(() => SortOrderSchema).optional(),
        tradingName: z.lazy(() => SortOrderSchema).optional(),
        registrationNumber: z.lazy(() => SortOrderSchema).optional(),
        isVendor: z.lazy(() => SortOrderSchema).optional(),
        alternativePhone: z.lazy(() => SortOrderSchema).optional(),
        fax: z.lazy(() => SortOrderSchema).optional(),
        contactTitle: z.lazy(() => SortOrderSchema).optional(),
        contactEmail: z.lazy(() => SortOrderSchema).optional(),
        contactPhone: z.lazy(() => SortOrderSchema).optional(),
        billingAddressLine1: z.lazy(() => SortOrderSchema).optional(),
        billingAddressLine2: z.lazy(() => SortOrderSchema).optional(),
        billingCity: z.lazy(() => SortOrderSchema).optional(),
        billingState: z.lazy(() => SortOrderSchema).optional(),
        billingZip: z.lazy(() => SortOrderSchema).optional(),
        billingCountryCode: z.lazy(() => SortOrderSchema).optional(),
        billingEmail: z.lazy(() => SortOrderSchema).optional(),
        taxId: z.lazy(() => SortOrderSchema).optional(),
        taxExempt: z.lazy(() => SortOrderSchema).optional(),
        taxExemptionNumber: z.lazy(() => SortOrderSchema).optional(),
        currency: z.lazy(() => SortOrderSchema).optional(),
        preferredPaymentMethod: z.lazy(() => SortOrderSchema).optional(),
        paymentTerms: z.lazy(() => SortOrderSchema).optional(),
        creditLimit: z.lazy(() => SortOrderSchema).optional(),
        bankName: z.lazy(() => SortOrderSchema).optional(),
        bankAccountName: z.lazy(() => SortOrderSchema).optional(),
        bankAccountNumber: z.lazy(() => SortOrderSchema).optional(),
        bankRoutingNumber: z.lazy(() => SortOrderSchema).optional(),
        bankSwiftCode: z.lazy(() => SortOrderSchema).optional(),
        bankIban: z.lazy(() => SortOrderSchema).optional(),
        industry: z.lazy(() => SortOrderSchema).optional(),
        customerType: z.lazy(() => SortOrderSchema).optional(),
        customerStatus: z.lazy(() => SortOrderSchema).optional(),
        customerRating: z.lazy(() => SortOrderSchema).optional(),
        discountTerms: z.lazy(() => SortOrderSchema).optional(),
        latePaymentPenalty: z.lazy(() => SortOrderSchema).optional(),
        creditScore: z.lazy(() => SortOrderSchema).optional(),
        customFields: z.lazy(() => SortOrderSchema).optional(),
        lastOrderDate: z.lazy(() => SortOrderSchema).optional(),
        accountManager: z.lazy(() => SortOrderSchema).optional(),
        shippingAddresses: z.lazy(() => SortOrderSchema).optional(),
        billingAddresses: z.lazy(() => SortOrderSchema).optional(),
        warehouseAddresses: z.lazy(() => SortOrderSchema).optional(),
        billingCurrency: z.lazy(() => SortOrderSchema).optional(),
        billingCycle: z.lazy(() => SortOrderSchema).optional(),
        invoiceDeliveryMethod: z.lazy(() => SortOrderSchema).optional(),
        invoiceFormat: z.lazy(() => SortOrderSchema).optional(),
        purchaseOrderRequired: z.lazy(() => SortOrderSchema).optional(),
        autoInvoice: z.lazy(() => SortOrderSchema).optional(),
        taxExemptionExpiry: z.lazy(() => SortOrderSchema).optional(),
        taxJurisdiction: z.lazy(() => SortOrderSchema).optional(),
        taxClassification: z.lazy(() => SortOrderSchema).optional(),
        withholdingTaxRate: z.lazy(() => SortOrderSchema).optional(),
        taxDocuments: z.lazy(() => SortOrderSchema).optional(),
        availableCredit: z.lazy(() => SortOrderSchema).optional(),
        riskRating: z.lazy(() => SortOrderSchema).optional(),
        insurancePolicy: z.lazy(() => SortOrderSchema).optional(),
        insuranceExpiry: z.lazy(() => SortOrderSchema).optional(),
        insuranceCoverage: z.lazy(() => SortOrderSchema).optional(),
        earlyPaymentDiscount: z.lazy(() => SortOrderSchema).optional(),
        minimumOrderValue: z.lazy(() => SortOrderSchema).optional(),
        maximumOrderValue: z.lazy(() => SortOrderSchema).optional(),
        averagePaymentDays: z.lazy(() => SortOrderSchema).optional(),
        paymentFrequency: z.lazy(() => SortOrderSchema).optional(),
        bankAccounts: z.lazy(() => SortOrderSchema).optional(),
        contractStartDate: z.lazy(() => SortOrderSchema).optional(),
        contractEndDate: z.lazy(() => SortOrderSchema).optional(),
        contractRenewalDate: z.lazy(() => SortOrderSchema).optional(),
        contractStatus: z.lazy(() => SortOrderSchema).optional(),
        legalStatus: z.lazy(() => SortOrderSchema).optional(),
        complianceStatus: z.lazy(() => SortOrderSchema).optional(),
        certifications: z.lazy(() => SortOrderSchema).optional(),
        licenses: z.lazy(() => SortOrderSchema).optional(),
        ndaStatus: z.lazy(() => SortOrderSchema).optional(),
        ndaExpiryDate: z.lazy(() => SortOrderSchema).optional(),
        customerSegment: z.lazy(() => SortOrderSchema).optional(),
        accountTier: z.lazy(() => SortOrderSchema).optional(),
        leadSource: z.lazy(() => SortOrderSchema).optional(),
        marketingCampaigns: z.lazy(() => SortOrderSchema).optional(),
        preferredLanguage: z.lazy(() => SortOrderSchema).optional(),
        communicationPreferences: z.lazy(() => SortOrderSchema).optional(),
        subscriptionStatus: z.lazy(() => SortOrderSchema).optional(),
        loyaltyPoints: z.lazy(() => SortOrderSchema).optional(),
        referralSource: z.lazy(() => SortOrderSchema).optional(),
        referralCode: z.lazy(() => SortOrderSchema).optional(),
        lifetimeValue: z.lazy(() => SortOrderSchema).optional(),
        acquisitionCost: z.lazy(() => SortOrderSchema).optional(),
        retentionRate: z.lazy(() => SortOrderSchema).optional(),
        satisfactionScore: z.lazy(() => SortOrderSchema).optional(),
        lastReviewDate: z.lazy(() => SortOrderSchema).optional(),
        nextReviewDate: z.lazy(() => SortOrderSchema).optional(),
        erpId: z.lazy(() => SortOrderSchema).optional(),
        crmId: z.lazy(() => SortOrderSchema).optional(),
        accountingId: z.lazy(() => SortOrderSchema).optional(),
        lastLoginDate: z.lazy(() => SortOrderSchema).optional(),
        lastInteractionDate: z.lazy(() => SortOrderSchema).optional(),
        totalOrders: z.lazy(() => SortOrderSchema).optional(),
        totalReturns: z.lazy(() => SortOrderSchema).optional(),
        activeSubscriptions: z.lazy(() => SortOrderSchema).optional(),
        metadata: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default CustomerCountOrderByAggregateInputSchema
