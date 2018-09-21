import express from 'express'
import Spider from '../controller/spider/spider'

const router = express.Router()

router.post('/search',Spider.search)

export default router