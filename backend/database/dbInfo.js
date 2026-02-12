import mongoose from 'mongoose'
const URL=`mongodb+srv://Atul:Atulcluster@mycluster.bboyjhe.mongodb.net/project_db`

export const dbConnect= async()=>{
    try{
     const connection=  await mongoose.connect(URL)
     console.log(`Database connection established successfully`);
     

    }
    catch(error){
        console.log(error);
        

    }

}