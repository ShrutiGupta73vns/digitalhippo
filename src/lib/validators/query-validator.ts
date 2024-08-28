import { z } from "zod";

export const Queryvalidator= z.object({
    category: z.string().optional(),
    sort: z.enum(["asc","desc"]).optional(),
    limit: z.number().optional(),
})


export type TQueryValidator = z.infer<typeof Queryvalidator >