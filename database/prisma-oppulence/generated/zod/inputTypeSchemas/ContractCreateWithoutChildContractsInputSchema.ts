import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { CustomerCreateNestedOneWithoutContractsInputSchema } from './CustomerCreateNestedOneWithoutContractsInputSchema'
import { ContractCreateNestedOneWithoutChildContractsInputSchema } from './ContractCreateNestedOneWithoutChildContractsInputSchema'
import { ContractEventCreateNestedManyWithoutContractInputSchema } from './ContractEventCreateNestedManyWithoutContractInputSchema'
import { ContractApprovalCreateNestedManyWithoutContractInputSchema } from './ContractApprovalCreateNestedManyWithoutContractInputSchema'
import { ContractDocumentCreateNestedManyWithoutContractInputSchema } from './ContractDocumentCreateNestedManyWithoutContractInputSchema'
import { ContractVersionCreateNestedManyWithoutContractInputSchema } from './ContractVersionCreateNestedManyWithoutContractInputSchema'

export const ContractCreateWithoutChildContractsInputSchema: z.ZodType<Prisma.ContractCreateWithoutChildContractsInput> = z
    .object({
        id: z.string().cuid().optional(),
        contractNumber: z.string(),
        title: z.string(),
        description: z.string().optional().nullable(),
        type: z.string(),
        category: z.string().optional().nullable(),
        department: z.string().optional().nullable(),
        businessUnit: z.string().optional().nullable(),
        priority: z.string().optional().nullable(),
        status: z.string(),
        stage: z.string().optional().nullable(),
        version: z.number().int().optional(),
        isTemplate: z.boolean().optional(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional().nullable(),
        signedDate: z.coerce.date().optional().nullable(),
        effectiveDate: z.coerce.date().optional().nullable(),
        terminationDate: z.coerce.date().optional().nullable(),
        nextReviewDate: z.coerce.date().optional().nullable(),
        renewalDate: z.coerce.date().optional().nullable(),
        lastAmendmentDate: z.coerce.date().optional().nullable(),
        value: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        currency: z.string().optional().nullable(),
        billingFrequency: z.string().optional().nullable(),
        billingTerms: z.string().optional().nullable(),
        paymentTerms: z.string().optional().nullable(),
        autoRenewal: z.boolean().optional(),
        renewalTerms: z.string().optional().nullable(),
        terminationFee: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        earlyTerminationTerms: z.string().optional().nullable(),
        terms: z.string().optional().nullable(),
        conditions: z.string().optional().nullable(),
        governingLaw: z.string().optional().nullable(),
        disputeResolution: z.string().optional().nullable(),
        confidentialityLevel: z.string().optional().nullable(),
        complianceStatus: z.string().optional().nullable(),
        riskLevel: z.string().optional().nullable(),
        riskAssessment: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        contractOwner: z.string().optional().nullable(),
        counterpartyId: z.string().optional().nullable(),
        counterpartyName: z.string().optional().nullable(),
        counterpartyContact: z.string().optional().nullable(),
        witnesses: z.string().optional().nullable(),
        signatories: z.string().optional().nullable(),
        stakeholders: z.string().optional().nullable(),
        deliverables: z.string().optional().nullable(),
        milestones: z.string().optional().nullable(),
        slaTerms: z.string().optional().nullable(),
        performanceMetrics: z.string().optional().nullable(),
        obligations: z.string().optional().nullable(),
        penalties: z.string().optional().nullable(),
        insuranceRequirements: z.string().optional().nullable(),
        liabilityTerms: z.string().optional().nullable(),
        indemnificationTerms: z.string().optional().nullable(),
        limitationOfLiability: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        intellectualProperty: z.string().optional().nullable(),
        licensedAssets: z.string().optional().nullable(),
        restrictions: z.string().optional().nullable(),
        amendments: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        changeHistory: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        approvalHistory: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        documentUrl: z.string().optional().nullable(),
        supportingDocs: z.string().optional().nullable(),
        attachments: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        signatures: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        accessLevel: z.string().optional().nullable(),
        accessControlList: z.string().optional().nullable(),
        encryptionLevel: z.string().optional().nullable(),
        notificationSettings: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        reminderSettings: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        alertContacts: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        customFields: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        notes: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        externalReferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        relatedContracts: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        updatedBy: z.string().optional().nullable(),
        reviewedBy: z.string().optional().nullable(),
        approvedBy: z.string().optional().nullable(),
        archivedAt: z.coerce.date().optional().nullable(),
        archivedBy: z.string().optional().nullable(),
        customer: z.lazy(() => CustomerCreateNestedOneWithoutContractsInputSchema),
        parentContract: z.lazy(() => ContractCreateNestedOneWithoutChildContractsInputSchema).optional(),
        contractEvents: z.lazy(() => ContractEventCreateNestedManyWithoutContractInputSchema).optional(),
        contractApprovals: z.lazy(() => ContractApprovalCreateNestedManyWithoutContractInputSchema).optional(),
        contractDocuments: z.lazy(() => ContractDocumentCreateNestedManyWithoutContractInputSchema).optional(),
        contractVersions: z.lazy(() => ContractVersionCreateNestedManyWithoutContractInputSchema).optional()
    })
    .strict()

export default ContractCreateWithoutChildContractsInputSchema
