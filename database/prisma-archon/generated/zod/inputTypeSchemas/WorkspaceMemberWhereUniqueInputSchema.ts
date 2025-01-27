import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceMemberWhereInputSchema } from './WorkspaceMemberWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { WorkspaceRelationFilterSchema } from './WorkspaceRelationFilterSchema'
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const WorkspaceMemberWhereUniqueInputSchema: z.ZodType<Prisma.WorkspaceMemberWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => WorkspaceMemberWhereInputSchema), z.lazy(() => WorkspaceMemberWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => WorkspaceMemberWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => WorkspaceMemberWhereInputSchema), z.lazy(() => WorkspaceMemberWhereInputSchema).array()])
                    .optional(),
                workspaceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                role: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                workspace: z.union([z.lazy(() => WorkspaceRelationFilterSchema), z.lazy(() => WorkspaceWhereInputSchema)]).optional(),
                user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional()
            })
            .strict()
    )

export default WorkspaceMemberWhereUniqueInputSchema
