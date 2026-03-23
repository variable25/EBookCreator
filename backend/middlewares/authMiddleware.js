const jwt = require('jsonwebtoken')
const User = require('../Models/user')

const protect = async (req,res,next) => {
    let token

    if(
        req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ){
        try {
            //Remover Bearer from header, get token
            token = req.headers.authorization.split(' ')[1] 
            
            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from token
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            return res.status(401).json({message: 'Not authorized, token failed'})
        }
    }

    if(!token){
        return res.status(401).json({message:'Not authorized, no token'})
    }

}

module.exports = {protect}