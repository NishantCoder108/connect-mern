const mongoose =require('mongoose')


const notesSchema = {
    title:String,
    fullplot:String
}

const Note = mongoose.model('Note' ,notesSchema, 'ten' )
module.exports = Note;