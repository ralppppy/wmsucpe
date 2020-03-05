import AdminLayout from "../../components/layouts/admin/AdminLayout"
import { Typography } from "antd"
import Auth from "../../protectedroutes/Auth"
import Head from "next/head"

const { Title } = Typography

function transaction({ userData, logo }) {
   return (
      <>
         <Head>
            <title>Transaction</title>
         </Head>
         <Title>THis is a title</Title>
      </>
   )
}

transaction.getInitialProps = async ({ req, res }) => {
   let userData = await Auth.AdminProtectRoute(req, res, true)

   return {
      userData
   }
}
export default transaction
