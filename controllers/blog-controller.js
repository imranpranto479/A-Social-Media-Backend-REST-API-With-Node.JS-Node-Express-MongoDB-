import Blog from "../models/Blog.js";

 export const getAllBlogs = async(req, res, next) =>{ // it is an asynchronous task and HTTP requests are always asynchronous task 
    let blogs;
    try{
        blogs = await Blog.find();
    
    }
    catch(err)
    {
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message:"No blogs Found"});
    
    }
    return res.status(200).json({blogs}); 
    };


    //addblog
    export const addBlog = async(req, res, next) =>{ // it is an asynchronous task and HTTP requests are always asynchronous task 
        const {title, description, image, user} = req.body;
        const blog = new Blog({
            title,
            description,
            image,
            user,
        });
        try{
            await blog.save();
        
        }
        catch(err)
        {
            return console.log(err);
        }
        
        return res.status(200).json({blog}); 
        };

        //upodate blog

        export const updateBlog = async(req,res,next)=>{
            const {title,description} =req.body;
            const blogId = req.params.id;
            let blog;
            try{
                blog = await Blog.findByIdAndUpdate(blogId,{
                    title,
                    description
                })
            }
            catch(err)
            {
                return console.log(err);
            }
        }

    // export default getAllBlogs;