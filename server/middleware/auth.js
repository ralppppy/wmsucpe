'use strict'
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')


/**
 * @IMPORTANT
 * @PUBLICKEY
 * DONT SHARE TO ANYONE
 */
const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'), 'utf8')

function auth(req, res, next) {
   
   const token = req.header('X-Auth-Token')

   if(!token) return res.status(401).json({msg: 'Unauthorized'})
   
   const issuer  = 'Exactconstruct Synology'
   const subject  = 'raffi.muloc@exact-construct.ch'
   const audience  = 'http://localhost:8080'

   const verifyOptions = {
      issuer,
      subject,
      audience,
      expiresIn:  "8h",
      algorithm:  ["RS256"]
   };
   try {
      
      // Verify token   
      const decode = jwt.verify(token, publicKey, verifyOptions)
      // Add to user
      req.user = decode
   
      next()

   } catch (e) {
      return res.status(400).json({msg: 'Token is not valid'})
   }
}

module.exports = auth