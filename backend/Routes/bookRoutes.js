const express = require("express")
const   router = express.Router()
const {createBook,getBooks,getBookById,updateBook,deleteBook,updateCoverImage} = require('../controller/bookController')
const {protect} = require('../middlewares/authMiddleware')
const upload = require('../middlewares/uploadMiddleware')

//Apply protect middleware to all the routes in this file
router.use(protect)

router.route('/').post(createBook).get(getBooks)
router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook)
router.route("/cover/:id").put(upload, updateCoverImage)

module.exports = router
