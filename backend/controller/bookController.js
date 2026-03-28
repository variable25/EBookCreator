const { isValidObjectId } = require('mongoose')
const Book = require('../Models/book')

const getUserId = (req) => req.user?.id || req.user?._id

const getBookQuery = (req) => ({
    _id: req.params.id,
    userId: getUserId(req),
})

const sendServerError = (res, error) => {
    console.error('Book controller error:', error)
    return res.status(500).json({ message: 'Server Error' })
}

const validateBookId = (res, bookId) => {
    if (!isValidObjectId(bookId)) {
        res.status(400).json({ message: 'Invalid book id' })
        return false
    }

    return true
}

const buildUpdatePayload = (body) => {
    const allowedFields = ['title', 'subtitle', 'author', 'chapters', 'status']

    return allowedFields.reduce((payload, field) => {
        if (body[field] !== undefined) {
            payload[field] = body[field]
        }

        return payload
    }, {})
}

//@desc     Create a new book
//@route    POST /api/books
//@access   Private
const createBook = async (req, res) => {
    try {
        const { title, subtitle, author, chapters, status } = req.body

        if (!title || !author) {
            return res.status(400).json({ message: 'Please provide a title and author' })
        }

        const book = await Book.create({
            userId: getUserId(req),
            title,
            subtitle,
            author,
            chapters,
            status,
        })

        return res.status(201).json(book)
    } catch (error) {
        return sendServerError(res, error)
    }
}

//@desc     Get all books by a user
//@route    GET /api/books
//@access   Private
const getBooks = async (req, res) => {
    try {
        const books = await Book.find({ userId: getUserId(req) })
            .sort({ createdAt: -1 })
            .lean()

        return res.status(200).json(books)
    } catch (error) {
        return sendServerError(res, error)
    }
}

//@desc     Get Single book by Id
//@route    GET /api/books/:id
//@access   Private
const getBookById = async (req, res) => {
    try {
        if (!validateBookId(res, req.params.id)) {
            return
        }

        const book = await Book.findOne(getBookQuery(req)).lean()

        if (!book) {
            return res.status(404).json({ message: 'Book not found' })
        }

        return res.status(200).json(book)
    } catch (error) {
        return sendServerError(res, error)
    }
}

//@desc     Update a book
//@route    PUT /api/books/:id
//@access   Private
const updateBook = async (req, res) => {
    try {
        if (!validateBookId(res, req.params.id)) {
            return
        }

        const updates = buildUpdatePayload(req.body)

        if (!Object.keys(updates).length) {
            return res.status(400).json({ message: 'No valid book fields provided for update' })
        }

        const updatedBook = await Book.findOneAndUpdate(
            getBookQuery(req),
            updates,
            {
                returnDocument: 'after',
                runValidators: true,
            }
        )

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' })
        }

        return res.status(200).json(updatedBook)
    } catch (error) {
        return sendServerError(res, error)
    }
}

//@desc     Delete a Book
//@route    DELETE /api/books/:id
//@access   Private
const deleteBook = async (req, res) => {
    try {
        if (!validateBookId(res, req.params.id)) {
            return
        }

        const deletedBook = await Book.findOneAndDelete(getBookQuery(req))

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' })
        }

        return res.status(200).json({ message: 'Book deleted successfully' })
    } catch (error) {
        return sendServerError(res, error)
    }
}

//@desc     Update Cover Image of a book
//@route    PUT /api/books/cover/:id
//@access   Private
const updateCoverImage = async (req, res) => {
    try {
        if (!validateBookId(res, req.params.id)) {
            return
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' })
        }

        const updatedBook = await Book.findOneAndUpdate(
            getBookQuery(req),
            { coverImage: `/uploads/${req.file.filename}` },
            {
                returnDocument: 'after',
                runValidators: true,
            }
        )

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' })
        }

        return res.status(200).json(updatedBook)
    } catch (error) {
        return sendServerError(res, error)
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
