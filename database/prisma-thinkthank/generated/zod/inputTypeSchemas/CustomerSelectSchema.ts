import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
import { SaleFindManyArgsSchema } from '../outputTypeSchemas/SaleFindManyArgsSchema'
import { CustomerTagFindManyArgsSchema } from '../outputTypeSchemas/CustomerTagFindManyArgsSchema'
import { ContractFindManyArgsSchema } from '../outputTypeSchemas/ContractFindManyArgsSchema'
import { InvoiceFindManyArgsSchema } from '../outputTypeSchemas/InvoiceFindManyArgsSchema'
import { CustomerCountOutputTypeArgsSchema } from '../outputTypeSchemas/CustomerCountOutputTypeArgsSchema'

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        email: z.boolean().optional(),
        avatar: z.boolean().optional(),
        externalId: z.boolean().optional(),
        stripeCustomerId: z.boolean().optional(),
        linkId: z.boolean().optional(),
        clickId: z.boolean().optional(),
        clickedAt: z.boolean().optional(),
        country: z.boolean().optional(),
        projectId: z.boolean().optional(),
        projectConnectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        addressLine1: z.boolean().optional(),
        addressLine2: z.boolean().optional(),
        city: z.boolean().optional(),
        contact: z.boolean().optional(),
        countryCode: z.boolean().optional(),
        state: z.boolean().optional(),
        zip: z.boolean().optional(),
        note: z.boolean().optional(),
        phone: z.boolean().optional(),
        token: z.boolean().optional(),
        vatNumber: z.boolean().optional(),
        website: z.boolean().optional(),
        companyName: z.boolean().optional(),
        tradingName: z.boolean().optional(),
        registrationNumber: z.boolean().optional(),
        isVendor: z.boolean().optional(),
        alternativePhone: z.boolean().optional(),
        fax: z.boolean().optional(),
        contactTitle: z.boolean().optional(),
        contactEmail: z.boolean().optional(),
        contactPhone: z.boolean().optional(),
        billingAddressLine1: z.boolean().optional(),
        billingAddressLine2: z.boolean().optional(),
        billingCity: z.boolean().optional(),
        billingState: z.boolean().optional(),
        billingZip: z.boolean().optional(),
        billingCountryCode: z.boolean().optional(),
        billingEmail: z.boolean().optional(),
        taxId: z.boolean().optional(),
        taxExempt: z.boolean().optional(),
        taxExemptionNumber: z.boolean().optional(),
        currency: z.boolean().optional(),
        preferredPaymentMethod: z.boolean().optional(),
        paymentTerms: z.boolean().optional(),
        creditLimit: z.boolean().optional(),
        bankName: z.boolean().optional(),
        bankAccountName: z.boolean().optional(),
        bankAccountNumber: z.boolean().optional(),
        bankRoutingNumber: z.boolean().optional(),
        bankSwiftCode: z.boolean().optional(),
        bankIban: z.boolean().optional(),
        industry: z.boolean().optional(),
        customerType: z.boolean().optional(),
        customerStatus: z.boolean().optional(),
        customerRating: z.boolean().optional(),
        discountTerms: z.boolean().optional(),
        latePaymentPenalty: z.boolean().optional(),
        creditScore: z.boolean().optional(),
        customFields: z.boolean().optional(),
        lastOrderDate: z.boolean().optional(),
        accountManager: z.boolean().optional(),
        shippingAddresses: z.boolean().optional(),
        billingAddresses: z.boolean().optional(),
        warehouseAddresses: z.boolean().optional(),
        billingCurrency: z.boolean().optional(),
        billingCycle: z.boolean().optional(),
        invoiceDeliveryMethod: z.boolean().optional(),
        invoiceFormat: z.boolean().optional(),
        purchaseOrderRequired: z.boolean().optional(),
        autoInvoice: z.boolean().optional(),
        taxExemptionExpiry: z.boolean().optional(),
        taxJurisdiction: z.boolean().optional(),
        taxClassification: z.boolean().optional(),
        withholdingTaxRate: z.boolean().optional(),
        taxDocuments: z.boolean().optional(),
        availableCredit: z.boolean().optional(),
        riskRating: z.boolean().optional(),
        insurancePolicy: z.boolean().optional(),
        insuranceExpiry: z.boolean().optional(),
        insuranceCoverage: z.boolean().optional(),
        earlyPaymentDiscount: z.boolean().optional(),
        minimumOrderValue: z.boolean().optional(),
        maximumOrderValue: z.boolean().optional(),
        averagePaymentDays: z.boolean().optional(),
        paymentFrequency: z.boolean().optional(),
        bankAccounts: z.boolean().optional(),
        contractStartDate: z.boolean().optional(),
        contractEndDate: z.boolean().optional(),
        contractRenewalDate: z.boolean().optional(),
        contractStatus: z.boolean().optional(),
        legalStatus: z.boolean().optional(),
        complianceStatus: z.boolean().optional(),
        certifications: z.boolean().optional(),
        licenses: z.boolean().optional(),
        ndaStatus: z.boolean().optional(),
        ndaExpiryDate: z.boolean().optional(),
        customerSegment: z.boolean().optional(),
        accountTier: z.boolean().optional(),
        leadSource: z.boolean().optional(),
        marketingCampaigns: z.boolean().optional(),
        preferredLanguage: z.boolean().optional(),
        communicationPreferences: z.boolean().optional(),
        subscriptionStatus: z.boolean().optional(),
        loyaltyPoints: z.boolean().optional(),
        referralSource: z.boolean().optional(),
        referralCode: z.boolean().optional(),
        lifetimeValue: z.boolean().optional(),
        acquisitionCost: z.boolean().optional(),
        retentionRate: z.boolean().optional(),
        satisfactionScore: z.boolean().optional(),
        lastReviewDate: z.boolean().optional(),
        nextReviewDate: z.boolean().optional(),
        erpId: z.boolean().optional(),
        crmId: z.boolean().optional(),
        accountingId: z.boolean().optional(),
        lastLoginDate: z.boolean().optional(),
        lastInteractionDate: z.boolean().optional(),
        totalOrders: z.boolean().optional(),
        totalReturns: z.boolean().optional(),
        activeSubscriptions: z.boolean().optional(),
        metadata: z.boolean().optional(),
        notes: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional(),
        sales: z.union([z.boolean(), z.lazy(() => SaleFindManyArgsSchema)]).optional(),
        CustomerTags: z.union([z.boolean(), z.lazy(() => CustomerTagFindManyArgsSchema)]).optional(),
        Contracts: z.union([z.boolean(), z.lazy(() => ContractFindManyArgsSchema)]).optional(),
        Invoice: z.union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CustomerCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default CustomerSelectSchema
