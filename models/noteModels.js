const mongoose =require('mongoose')


const notesSchema = {
    title:String,
    fullplot:String
}

const Note = mongoose.model('Note' ,notesSchema, 'movies' )
module.exports = Note;