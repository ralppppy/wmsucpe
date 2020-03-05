import AdminLayout from "../../components/layouts/admin/AdminLayout"
import { Typography } from "antd"
import Auth from "../../protectedroutes/Auth"

const { Title } = Typography

function transaction({ userData, logo }) {
   return <Title>THis is a title</Title>
}

transaction.getInitialProps = async ({ req, res }) => {
   let userData = await Auth.AdminProtectRoute(req, res, true)

   return {
      userData
   }
}
export default transaction
