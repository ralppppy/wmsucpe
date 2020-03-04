import { parseCookies } from "../lib/parseCookies"
import fetch from "isomorphic-unfetch"
import Cookie from "js-cookie"
import Axios from "axios"

const Auth = () => {
   const baseUrl = "http://localhost:3001/"

   const AdminProtectRoute = async (req, res, admin) => {
      const cookies = parseCookies(req)

      const token = cookies.techVoiceToken

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
               Cookie.remove("techVoiceToken")
               res.redirect("/admin/login")
            }
         } else {
            res.redirect("/admin/login")
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

               res.redirect("/admin")
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

   return {
      AdminProtectRoute,
      authenticateUser
   }
}

export default Auth()
