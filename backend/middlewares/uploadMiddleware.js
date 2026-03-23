const multer = require('multer')
const path = require('path')
const fs = require('fs')

//create uploads directory if it doesn't exist
const uploadDir = "uploads"
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, {recursive:true})
}

//set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req,file,cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        )
    }
})

//Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype && extname){
        return cb(null, true)
    }
    else{
        cb("Error: Images only Please")
    }
}

//Initialize upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 2 * 1024 * 1024}, //2MB File Size
    fileFilter: function(req, file, cb){
        checkFileType(file,cb)
    }
}).single('coverImage')

module.exports = upload

