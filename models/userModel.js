const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})

userSchema.statics.signup = async function(name, email, password){
    
    if(!email || !password || !name){
        throw Error('All fields must be filled')
    }
    if(!name){
        throw Error('Name is required')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    const exist = await this.findOne({email})
    if(exist){
        throw Error('Email id already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({name, email, password: hash})
    return user
}

const userModel = mongoose.model('users', userSchema)
module.exports = userModel
