const Book = require('../Models/book')

//@desc     Create a new book
//@route    POST /api/books
//@access   Private
const createBook = async (req,res) => {
    try {
        const {title, subtitle, author, chapters} = req.body

        if(!title || !author){
            return res.status(400).json({message: "Please provide a title and author"})
        }

        const book = await Book.create({
            userId: req.user.id,
            title,
            author,
            subtitle,
            chapters
        })

        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//@desc     Get all books by a user
//@route    GET /api/books
//@access   Private
const getBooks = async (req,res) => {
    try {
        const books = await Book.find({userId:req.user._id}).sort({createdAt:-1})
        res.status(201).json(books)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//@desc     Get Single book by Id
//@route    GET /api/books/:id
//@access   Private
const getBookById = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)

        if (!book) {
            return res.status(404).json({message:"Book not found"})
        }

        if(book.userId.toString() !== req.user._id.toString()){
            return res.status(401).json({message: "Not authorized to view this book"})
        }

        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//@desc     Update a book
//@route    PUT /api/books/:id
//@access   Private
const updateBook = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)

        if(!book){
            return res.status(404).json({message:"Book not found"})
        }

        if(book.userId.toString() !== req.user._id.toString()){
            return res.status(401).json({message:'Not authorized to make changes to this book'})
        }

        const updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//@desc     Delete a Book
//@route    DELETE /api/books/:id
//@access   Private
const deleteBook = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)

        if(!book){
            return res.status(404).json({message:"book not found"})
        }

        if(book.userId.toString() !== req.user._id.toString()){
            return res.status(401).json({message:"Not authorized to delete the book"})
        }

        await book.deleteOne()

        res.status(200).json({message:'Book deleted successfully'})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//@desc     Update Cover Image of a book
//@route    PUT /api/books/cover/:id
//@access   Private
const updateCoverImage = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id)

        if(!book){
            return res.status(404).json({message:'book not found'})
        }

        if(book.userId.toString() !== req.user._id.toString()){
            return res.status(401).json({message: 'Not authorized to update Cover Image of the book'})
        }

        if(req.file){
            book.coverImage = `/uploads/${req.file.filename}`
        }
        else{
            return res.status(400).json({message: 'No image file provided'})
        }

        const updatedBook = await book.save()
        
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
    updateCoverImage,
}