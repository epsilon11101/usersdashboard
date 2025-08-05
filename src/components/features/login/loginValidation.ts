import { z } from "zod";

const loginSchema = z.object({
  email: z.email("You must to use a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

export default loginSchema;
