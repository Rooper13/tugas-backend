import express from 'express'
import notesRoute from '../route/notes.route.js'

const router = express()

router.use(notesRoute)


export default router
