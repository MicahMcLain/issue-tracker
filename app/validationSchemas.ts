import { z } from "zod";

//only need values for anything that doesnt have default vaules on db
export const issueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});
