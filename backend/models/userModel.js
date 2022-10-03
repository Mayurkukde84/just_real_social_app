const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        trin:true,
        maxlength:25
    },
    username:{
        type:String,
        require:true,
        trin:true,
        maxlength:25
    },
    email:{
        type:String,
        require:true,
        trin:true,
        maxlength:25
    },
    password:{
        type:String,
        require:true,
        
    },
    avatar:{
        type:String,
        default: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'
    },
    role:{type:String, default:'user'},
    gender:{type:String,default:'male'},
    mobile:{type:String,default:''},
    address:{type:String, default:''},
    story:{
        type:String,
        default:'',
        maxlength:200
    },
    website: {type:String, default:''},
    followers:[{type: mongoose.Types.ObjectId, ref:'user'}],
    following:[{type:mongoose.Types.ObjectId, ref:'user'}]

},{
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)