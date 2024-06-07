import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helper/sendVerificationEmail";

export async function POST(request: Request){
    await dbConnect();

    try{
        const {username, eamil, password}  =await request.json()
        UserModel

    }catch(error){
        console.error("Error in POST /api/sign-up",error);
        return Response.json(
            {
                success:false,
                message:"Error registering user"
            },
            {
                status:500
            }
        )
    }
}