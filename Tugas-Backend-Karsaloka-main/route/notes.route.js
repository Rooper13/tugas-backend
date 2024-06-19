import express from 'express'
import {  getNotes,  insertNotes, updateNotes, getNotesById, deleteNotes } from '../controller/notes.controller.js'

const router = express.Router()

router.get('/notes', getNotes)
router.get('/notes/:id', getNotesById)
// router.get('/notesfilter', getNotesTest)
router.post('/notes', insertNotes)
router.put('/notes/:id', updateNotes)
router.delete('/notes/:id', deleteNotes)


export default router
