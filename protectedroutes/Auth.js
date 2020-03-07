import { parseCookies } from "../lib/parseCookies"

import Cookie from "js-cookie"
import Axios from "axios"

import Router from "next/router"

const Auth = () => {
   const baseUrl = "http://localhost:3001/"

   const AdminProtectRoute = async (req, res, admin) => {
      const cookies = parseCookies(req)

      let token
      if (req || res) {
         token = cookies.techVoiceToken
      } else {
         token = cookies.techVoiceToken
         //  token = localStorage.getItem("techVoiceToken")
      }

      if (admin) {
         if (token) {
            Axios.defaults.headers.common["X-Auth-Token"] = token

            try {
               const _res = await Axios.get(`${baseUrl}api/auth/user`)

               const _data = {
                  token,
                  user: _res.data
               }

               return _data
            } catch (error) {
               if (req || res) {
                  Cookie.remove("techVoiceToken")
                  res.redirect("/admin/login")
               } else {
                  Cookie.remove("techVoiceToken")
                  localStorage.removeItem("techVoiceToken")
                  Router.push("/admin/login")
               }
            }
         } else {
            if (req || res) {
               res.redirect("/admin/login")
            } else {
               Router.push("/admin/login")
            }
         }
      } else {
         if (token) {
            Axios.defaults.headers.common["X-Auth-Token"] = token

            try {
               const _res = await Axios.get(`${baseUrl}api/auth/user`)

               const _data = {
                  token,
                  user: _res.data
               }

               if (req || res) {
                  res.redirect("/admin")
               } else {
                  Router.push("/admin")
               }
            } catch (error) {
               Cookie.remove("techVoiceToken")
               return
            }
         } else {
            return
         }
      }
   }

   const authenticateUser = async payload => {
      try {
         const res = await Axios.post("/api/auth", payload)

         Axios.defaults.headers.common["X-Auth-Token"] = res.data.token

         Cookie.set("techVoiceToken", res.data.token)
         localStorage.setItem("techVoiceToken", res.data.token)

         return {
            success: true
         }
      } catch (error) {
         return {
            success: false,
            message: error.response.data.msg,
            errorType: error.response.data.errorType
         }
      }
   }

   const loadUserData = _data => {
      dispatch({
         type: LOAD_USER_DATA,
         user: _data.user,
         token: _data.token
      })
   }

   return {
      AdminProtectRoute,
      authenticateUser
   }
}

export default Auth()
