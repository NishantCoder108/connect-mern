const express =require('express')
const router= express.Router()
const Note =require("../models/noteModels")


router.route("/create").post((req, res) => {
    const title =req.body.title;
    const fullplot =req.body.fullplot;
    const newNote = new Note({
        title,
       fullplot

    })

    newNote.save()
})

router.route("/notes").get((req,res) => {
    Note.find().then(foundNotes => res.json(foundNotes))
})
module.exports =router;