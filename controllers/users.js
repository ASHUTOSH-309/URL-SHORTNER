const User=require("../models/users")
const {v4:uuidv4}=require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req,res){

    const {name,email,password}=req.body;
    await User.create({
            name,
            email,
            password
    }).then(()=>{

        console.log("User Created Sucesfully")


    }).
    catch((err)=>{

            console.log("Some error occured while creating the user")


    })

return res.redirect("/")

}
async function handleUserLogin(req,res){

    const {email,password}=req.body;
    const user=await User.findOne({
            email,
            password
    })

    if(!user){

        return res.render("login",{
            error:"Invalid username or password"
        })
    }

    const sessionId=uuidv4();
    setUser(sessionId,user)

    res.cookie("uid",sessionId)
    return res.redirect("/")

}

module.exports={

    handleUserSignUp,
    handleUserLogin,


}