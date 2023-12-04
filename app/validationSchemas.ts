import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Titile is required").max(255),
  description: z.string().min(1, "Description is required"),
});
