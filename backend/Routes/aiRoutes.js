const express = require('express')
const {generateChapterContent,generateOutline} = require('../controller/aiController')
const {protect} = require('../middlewares/authMiddleware')
const router = express.Router()

//Apply Protect Middleware to all routes
router.use(protect)

router.post('/generate-outline',generateOutline)
router.post('/generate-chapter-content',generateChapterContent)

module.exports = router
