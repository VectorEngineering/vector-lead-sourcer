import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'
import { LeadSegmentationHistoryFindManyArgsSchema } from '../outputTypeSchemas/LeadSegmentationHistoryFindManyArgsSchema'
import { LeadSegmentationCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadSegmentationCountOutputTypeArgsSchema'

export const LeadSegmentationSelectSchema: z.ZodType<Prisma.LeadSegmentationSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        industrySegment: z.boolean().optional(),
        companySize: z.boolean().optional(),
        geographicRegion: z.boolean().optional(),
        purchaseHistory: z.boolean().optional(),
        productUsage: z.boolean().optional(),
        engagementLevel: z.boolean().optional(),
        decisionMaking: z.boolean().optional(),
        innovationLevel: z.boolean().optional(),
        riskTolerance: z.boolean().optional(),
        customerLifetimeValue: z.boolean().optional(),
        profitabilitySegment: z.boolean().optional(),
        growthPotential: z.boolean().optional(),
        segmentTags: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        segmentationHistory: z.union([z.boolean(), z.lazy(() => LeadSegmentationHistoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadSegmentationCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default LeadSegmentationSelectSchema
