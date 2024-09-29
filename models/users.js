const mongoose=require("mongoose")



const userSchema=new mongoose.Schema({

        name:{
                type:String,
                required:true
        },

        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
                type:String,
                required:true,
        }
},{timestamps:true})


const User=mongoose.model('user',userSchema)
//The first parameter signifies the model name in the mongoDb database, it will be automatically pluralized

module.exports=User