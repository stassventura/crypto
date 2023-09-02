import mongoose from 'mongoose'

const connect = async () =>{
  try {
    await mongoose.connect('mongodb+srv://stasventura2008:Sister24052004@cluster.qdmopkc.mongodb.net/?retryWrites=true&w=majority')
    console.log("Mongo connection successful");
    
  } catch (error) {
      throw new Error("Error in connecting")
  }
}

export default connect