const mongoose = require('mongoose');
const validator = require('validator');

const {Schema} = mongoose;

const userSchema = new Schema({
    pseudo:{ type: String,
         required :true,
          minLength: 2,
           maxLength: 50, 
           unique:true,
           trim:true},
    email:{type:String,
        required:true,
        unique:true,
        trim:true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email!'
          },
        minLength: 5,
        maxLength:50,
    },
    password: {
        type:String,
        required:true,
        minLength:8,
        minNumber:1,
    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;