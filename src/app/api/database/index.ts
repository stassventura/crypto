import mongoose from 'mongoose'

const connect = async () =>{
  try {
    await mongoose.connect(`${process.env.DB_CONNECTION}`)
    console.log("Mongo connection successful");
    
  } catch (error) {
      throw new Error("Error in connecting")
  }
}

export default connect