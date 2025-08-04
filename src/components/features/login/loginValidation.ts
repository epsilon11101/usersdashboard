import { z } from "zod";

const loginSchema = z.object({
  email: z.email("You must to use a valid email"),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

export default loginSchema;
