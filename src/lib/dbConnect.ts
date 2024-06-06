import mongoose from 'mongoose'

type ConnectionObject ={
    isConnected?:number
}

const connection : ConnectionObject ={} // initally empty , possible bcoz of optional variable

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '')

        connection.isConnected=  db.connections[0].readyState
        console.log("Db connected Successfully")

    }catch(error){
        console.log("db conection failed",error)
        process.exit(1)
    }
}

export default dbConnect