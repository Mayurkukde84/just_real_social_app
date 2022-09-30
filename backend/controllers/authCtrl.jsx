const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authCtrl = {
    register: async (req,res) =>{
        try {
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
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