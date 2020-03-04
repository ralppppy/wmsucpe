import axios from "axios"
import fetch from "isomorphic-unfetch"

const Auth = () => {
   const SecurityCheck = async () => {
      const token = localStorage.getItem("techVoiceToken")

      if (token) {
         axios.defaults.headers.common["X-Auth-Token"] = token

         try {
            const res1 = await fetch.get("api/auth/user")

            const res = await res1.json()

            const _data = {
               token,
               user: res.data
            }

            loadUserData(_data)
         } catch (error) {
            return false
         }
      } else {
         return true
      }
   }

   const authenticateUser = async payload => {
      try {
         const res = await axios.post("api/auth", payload)

         axios.defaults.headers.common["X-Auth-Token"] = res.data.token

         localStorage.removeItem("techVoiceToken")

         localStorage.setItem("techVoiceToken", res.data.token)

         loadUserData(res.data)

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

   return { SecurityCheck, authenticateUser }
}

export default Auth()
