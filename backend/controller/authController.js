const jwt  = require('jsonwebtoken')
const User = require('../Models/user')

//Helper: Generate JWT
const generateToken = (id) => {
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )
}

//@desc Register new user
//@route POST /api/auth/register
//@access Public
exports.registerUser = async (req,res) => {
    console.log("REGISTER CONTROLLER HIT - NEW VERSION");
    console.log("BODY NOW:", req.body);

    const { name, email, password } = req.body || {};
    console.log("req.body =", req.body);
    console.log("content-type =", req.headers["content-type"]);

    try {
        if(!name || !email || !password){
            return res.status(400).json({message: 'Please fill all the fields'})
        }

        //Check whether the user exists
        const userExists = await User.findOne({ email })
        if (userExists){
            return res.status(400).json({message:'User already exists'})
        }

        //Create user
        const user = await User.create({name, email, password})

        if(user){
            res.status(201).json({
                message: "User generated Successfully",
                token: generateToken(user._id)
            })
        }
        else{
            return res.status(400).json({message: 'Invalid User Data'})
        }
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        return res.status(500).json({
        message: "Server error",
        error: error.message
    });
}
}

//@desc Login User
//@route POST /api/auth/login
//@access Public
exports.loginUser = async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await User.findOne({email}).select('+password')

        if(user && (await user.matchPassword(password))){
            res.json({
                message: "Login successfull",
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }
        else{
            return res.status(400).json({message:"Invalid Credentials"})
        }
    } catch (error) {
        return res.status(500).json({message:'Server error'})
    }
}

//@desc Get current logged-in user
//@route GET /api/auth/profile
//@access Private
exports.getProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.id)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            isPro: user.isPro,
        })
    } catch (error) {
        return res.status(500).json({message:'Server error'})
    }
}

//@desc Update User profile
//@route PUT /api/auth/me
//@access Private
exports.updateUserProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.id)

        if(user){
            user.name = req.body.name || user.name

            const updatedUser = await user.save()

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name
            })
        }
        else{
            return res.status(404).json({message: "User Not found"})
        }
    } catch (error) {
        return res.status(500).json({message:'Server error'})
    }
}

