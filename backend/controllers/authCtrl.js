const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authCtrl = {
    register: async (req,res) =>{
        try {
            const {fullname,username,email,password,gender} = req.body
            let newUserName = username.toLowerCase().replace(/ /g,' ')

            const user_name = await Users.findOne({username:newUserName})
            if(user_name) return res.status(400).json({msg:"This user name already exists."})
           
            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({msg:"This user name already exists "})
           
            res.json({msg:'Registed'})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    login: async (req,res) =>{
        try {
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    logout: async (req,res) =>{
        try {
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    generateAccessToken: async (req,res) =>{
        try {
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
}

module.exports = authCtrl