const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
    course:{
        type:String,
        required: true
    }
})

const courseModel = mongoose.model('course', courseSchema)
module.exports = courseModel