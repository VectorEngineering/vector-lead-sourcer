import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { EnumAdminRoleNullableFilterSchema } from './EnumAdminRoleNullableFilterSchema'
import { AdminRoleSchema } from './AdminRoleSchema'
import { EnumOrganizationSizeNullableFilterSchema } from './EnumOrganizationSizeNullableFilterSchema'
import { OrganizationSizeSchema } from './OrganizationSizeSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ProjectUsersListRelationFilterSchema } from './ProjectUsersListRelationFilterSchema'
import { ProjectInviteListRelationFilterSchema } from './ProjectInviteListRelationFilterSchema'
import { SentEmailListRelationFilterSchema } from './SentEmailListRelationFilterSchema'
import { LinkListRelationFilterSchema } from './LinkListRelationFilterSchema'
import { DomainListRelationFilterSchema } from './DomainListRelationFilterSchema'
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema'
import { ProgramListRelationFilterSchema } from './ProgramListRelationFilterSchema'
import { InvoiceListRelationFilterSchema } from './InvoiceListRelationFilterSchema'
import { CustomerListRelationFilterSchema } from './CustomerListRelationFilterSchema'
import { DefaultDomainsListRelationFilterSchema } from './DefaultDomainsListRelationFilterSchema'
import { RestrictedTokenListRelationFilterSchema } from './RestrictedTokenListRelationFilterSchema'
import { OAuthCodeListRelationFilterSchema } from './OAuthCodeListRelationFilterSchema'
import { IntegrationListRelationFilterSchema } from './IntegrationListRelationFilterSchema'
import { InstalledIntegrationListRelationFilterSchema } from './InstalledIntegrationListRelationFilterSchema'
import { WebhookListRelationFilterSchema } from './WebhookListRelationFilterSchema'
import { RegisteredDomainListRelationFilterSchema } from './RegisteredDomainListRelationFilterSchema'
import { DashboardListRelationFilterSchema } from './DashboardListRelationFilterSchema'
import { UtmTemplateListRelationFilterSchema } from './UtmTemplateListRelationFilterSchema'
import { YearInReviewListRelationFilterSchema } from './YearInReviewListRelationFilterSchema'
import { BankConnectionListRelationFilterSchema } from './BankConnectionListRelationFilterSchema'
import { AppListRelationFilterSchema } from './AppListRelationFilterSchema'
import { InboxListRelationFilterSchema } from './InboxListRelationFilterSchema'
import { BankAccountListRelationFilterSchema } from './BankAccountListRelationFilterSchema'
import { TransactionListRelationFilterSchema } from './TransactionListRelationFilterSchema'
import { TransactionAttachmentListRelationFilterSchema } from './TransactionAttachmentListRelationFilterSchema'
import { TransactionCategoryListRelationFilterSchema } from './TransactionCategoryListRelationFilterSchema'
import { TransactionEnrichmentListRelationFilterSchema } from './TransactionEnrichmentListRelationFilterSchema'
import { DocumentListRelationFilterSchema } from './DocumentListRelationFilterSchema'
import { CustomerTagListRelationFilterSchema } from './CustomerTagListRelationFilterSchema'
import { ContractTemplateListRelationFilterSchema } from './ContractTemplateListRelationFilterSchema'
import { ReportListRelationFilterSchema } from './ReportListRelationFilterSchema'
import { InvoiceTemplateListRelationFilterSchema } from './InvoiceTemplateListRelationFilterSchema'

export const ProjectWhereUniqueInputSchema: z.ZodType<Prisma.ProjectWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            inviteCode: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            slug: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            inviteCode: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            stripeConnectId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            shopifyStoreId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            invoicePrefix: z.string()
        }),
        z.object({
            id: z.string().cuid(),
            referralLinkId: z.string()
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            inviteCode: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            slug: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            slug: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            slug: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            slug: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            inviteCode: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            inviteCode: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            stripeConnectId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            stripeId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            stripeId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeId: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            shopifyStoreId: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            stripeConnectId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            stripeConnectId: z.string()
        }),
        z.object({
            shopifyStoreId: z.string(),
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            shopifyStoreId: z.string(),
            invoicePrefix: z.string()
        }),
        z.object({
            shopifyStoreId: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            shopifyStoreId: z.string()
        }),
        z.object({
            invoicePrefix: z.string(),
            referralLinkId: z.string()
        }),
        z.object({
            invoicePrefix: z.string()
        }),
        z.object({
            referralLinkId: z.string()
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                slug: z.string().optional(),
                inviteCode: z.string().optional(),
                stripeId: z.string().optional(),
                stripeConnectId: z.string().optional(),
                shopifyStoreId: z.string().optional(),
                invoicePrefix: z.string().optional(),
                referralLinkId: z.string().optional(),
                AND: z.union([z.lazy(() => ProjectWhereInputSchema), z.lazy(() => ProjectWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => ProjectWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => ProjectWhereInputSchema), z.lazy(() => ProjectWhereInputSchema).array()]).optional(),
                name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                logo: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                plan: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                billingCycleStart: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                paymentFailedAt: z
                    .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
                    .optional()
                    .nullable(),
                payoutMethodId: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                adminRole: z
                    .union([z.lazy(() => EnumAdminRoleNullableFilterSchema), z.lazy(() => AdminRoleSchema)])
                    .optional()
                    .nullable(),
                organizationSize: z
                    .union([z.lazy(() => EnumOrganizationSizeNullableFilterSchema), z.lazy(() => OrganizationSizeSchema)])
                    .optional()
                    .nullable(),
                reason: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                usage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                usageLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                linksUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                linksLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                salesUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                salesLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                domainsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                tagsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                usersLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                aiUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                aiLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                transactionCategoriesLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                bankConnectionsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                bankConnectionsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                bankAccountsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                bankAccountsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                documentsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                documentsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                documentStorageUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                documentStorageLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                contractTemplatesUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                contractTemplatesLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                activeContractsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                activeContractsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                invoiceTemplatesUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                invoiceTemplatesLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                monthlyInvoicesUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                monthlyInvoicesLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                customersUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                customersLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                customerTagsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                customerTagsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                reportsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                reportsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                reportStorageUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                reportStorageLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                apiRequestsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                apiRequestsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                webhooksUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                webhooksLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                integrationsUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                integrationsLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                apiTokensUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                apiTokensLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                teamMembersUsage: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                teamMembersLimit: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                auditLogRetention: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                referredSignups: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
                webhookEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                conversionEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                partnersEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                ssoEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                dotLinkClaimed: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                usageLastChecked: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                users: z.lazy(() => ProjectUsersListRelationFilterSchema).optional(),
                invites: z.lazy(() => ProjectInviteListRelationFilterSchema).optional(),
                sentEmails: z.lazy(() => SentEmailListRelationFilterSchema).optional(),
                links: z.lazy(() => LinkListRelationFilterSchema).optional(),
                domains: z.lazy(() => DomainListRelationFilterSchema).optional(),
                tags: z.lazy(() => TagListRelationFilterSchema).optional(),
                programs: z.lazy(() => ProgramListRelationFilterSchema).optional(),
                invoices: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
                customers: z.lazy(() => CustomerListRelationFilterSchema).optional(),
                defaultDomains: z.lazy(() => DefaultDomainsListRelationFilterSchema).optional(),
                restrictedTokens: z.lazy(() => RestrictedTokenListRelationFilterSchema).optional(),
                oAuthCodes: z.lazy(() => OAuthCodeListRelationFilterSchema).optional(),
                integrations: z.lazy(() => IntegrationListRelationFilterSchema).optional(),
                installedIntegrations: z.lazy(() => InstalledIntegrationListRelationFilterSchema).optional(),
                webhooks: z.lazy(() => WebhookListRelationFilterSchema).optional(),
                registeredDomains: z.lazy(() => RegisteredDomainListRelationFilterSchema).optional(),
                dashboards: z.lazy(() => DashboardListRelationFilterSchema).optional(),
                utmTemplates: z.lazy(() => UtmTemplateListRelationFilterSchema).optional(),
                yearInReviews: z.lazy(() => YearInReviewListRelationFilterSchema).optional(),
                bankConnections: z.lazy(() => BankConnectionListRelationFilterSchema).optional(),
                apps: z.lazy(() => AppListRelationFilterSchema).optional(),
                Inbox: z.lazy(() => InboxListRelationFilterSchema).optional(),
                BankAccount: z.lazy(() => BankAccountListRelationFilterSchema).optional(),
                Transaction: z.lazy(() => TransactionListRelationFilterSchema).optional(),
                TransactionAttachment: z.lazy(() => TransactionAttachmentListRelationFilterSchema).optional(),
                TransactionCategory: z.lazy(() => TransactionCategoryListRelationFilterSchema).optional(),
                TransactionEnrichment: z.lazy(() => TransactionEnrichmentListRelationFilterSchema).optional(),
                Document: z.lazy(() => DocumentListRelationFilterSchema).optional(),
                CustomerTag: z.lazy(() => CustomerTagListRelationFilterSchema).optional(),
                ContractTemplate: z.lazy(() => ContractTemplateListRelationFilterSchema).optional(),
                Report: z.lazy(() => ReportListRelationFilterSchema).optional(),
                InvoiceTemplate: z.lazy(() => InvoiceTemplateListRelationFilterSchema).optional()
            })
            .strict()
    )

export default ProjectWhereUniqueInputSchema
