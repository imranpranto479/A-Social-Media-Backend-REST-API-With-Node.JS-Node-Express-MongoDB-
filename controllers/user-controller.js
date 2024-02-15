import User from "../models/User.js";
import bcrypt from 'bcryptjs';

const getAllUser = async(req, res, next) =>{ // it is an asynchronous task and HTTP requests are always asynchronous task 
let users;
try{
    users = await User.find();

}
catch(err)
{
    console.log(err);
}
if(!users){
    return res.status(404).json({message:"No users Found"});

}
return res.status(200).json({users}); 
};

// for signing upp

export const signup = async(req,res,next)=>{
    const{name,email,password} = req.body;  //receive data from frontend
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(existingUser)
    return res.status(400).json({message: "User Already Exists! Login Instead"})

    //for encrypt password
    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password:hashedPassword,
    });

    try{
        await user.save()//dsave the data intodatabase //asynchronus task thats why used await cz it wil take some time
    }
    catch(err)
    {
        return console.log(err);
    }
    return res.status(201).json({user});
}
//for login
export const login = async(req,res,next)=>{
    const{email,password} = req.body;  //receive data from frontend
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(!existingUser)
    return res.status(404).json({message: "Couldn't find user by this email"});


    const isPasswordCOorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCOorrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({message:"Login Successful"})


}
  
 export default getAllUser;