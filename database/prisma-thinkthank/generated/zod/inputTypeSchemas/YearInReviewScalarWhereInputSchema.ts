import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const YearInReviewScalarWhereInputSchema: z.ZodType<Prisma.YearInReviewScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => YearInReviewScalarWhereInputSchema),z.lazy(() => YearInReviewScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => YearInReviewScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => YearInReviewScalarWhereInputSchema),z.lazy(() => YearInReviewScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  totalLinks: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  totalClicks: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  topLinks: z.lazy(() => JsonFilterSchema).optional(),
  topCountries: z.lazy(() => JsonFilterSchema).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default YearInReviewScalarWhereInputSchema;
