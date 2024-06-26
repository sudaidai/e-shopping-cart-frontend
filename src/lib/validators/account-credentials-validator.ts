import z from 'zod'; // Zod is a TypeScript library used for building schemas and performing validations

// Define a schema for validating authentication credentials
export const AuthCredentialsValidator = z.object({
  email: z.string().email(),        // Email must be a valid email string
  password: z.string().min(8, {
    message: `Password must be at least 8 characters long.`
  }),                               // Password must be at least 8 characters long
});

// Type definition for authentication credentials inferred from the Zod schema
export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
