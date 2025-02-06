import { z } from 'zod';

export const TransactionEnrichmentScalarFieldEnumSchema = z.enum(['id','projectId','name','description','categorySlug','website','merchantId','merchantName','merchantCategory','merchantLocation','merchantLogo','merchantMetadata','confidence','source','status','version','matchingRules','patterns','keywords','sentiment','riskScore','anomalyScore','isRecurring','isSubscription','isBillPayment','isRefund','customData','metadata','system','enabled','priority','createdAt','updatedAt','lastAppliedAt']);

export default TransactionEnrichmentScalarFieldEnumSchema;
