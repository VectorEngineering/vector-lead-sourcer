import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';

export const ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema: z.ZodType<Prisma.ProgramEnrollmentUncheckedCreateWithoutApplicationInput> = z.object({
  id: z.string().cuid().optional(),
  partnerId: z.string(),
  programId: z.string(),
  linkId: z.string().optional().nullable(),
  commissionAmount: z.number().int().optional().nullable(),
  discountId: z.string().optional().nullable(),
  status: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema;
