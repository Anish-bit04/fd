import {z} from 'zod'

export const usernameValidation = z.string()
    .min(3, "Username must be atleast 3 characters")
    .max(20, "Username must be under 30 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special character ") // only contain the character in regex


    export const signUpSchema = z.object({

        username: usernameValidation,
        email:z.string().email({message: 'Invalid email address'}),
        password: z.string().min(6,{message: 'password must be atleast 6 characters'})
        
    })