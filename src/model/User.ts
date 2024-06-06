import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content: string ;
    createdAt: Date
}

const MessageSchema :Schema<Message> = new Schema({
    content : {
        type : String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified: boolean;
    isAcceptingMessage : boolean;
    message: Message[]
}

const UserSchema : Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique:true
    },
    email:{
        type: String,
        required:[true, "Email is required"],
        unique: true,
        match:[/.+\@.+\..+/, "Email is invaild."]
    },
    password:{
        type: String,
        required:[true, "Password is required"], 
    },
    verifyCode:{
        type: String,
        required:[true, "Verify Code  is required"], 
    },
    verifyCodeExpiry:{
        type: Date,
        required:[true, "Password is required"], 
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: false
    },
    message:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model("User",UserSchema) 

// in nextjs it don't know whether the server is run first or already run previously ,
// So to solve it we export for both the condition already runned and first time

export default UserModel;
