import { useState } from "react"
import Head from "next/head"
import { Card, Typography, Input, Button, Form } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import Router from "next/router"

//AUTH
import Auth from "../../protectedroutes/Auth"

//STYLE
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.min.css"

const { Title, Text } = Typography

function login() {
   const [loginSuccess, setLoginSuccess] = useState("")
   const [buttonLoading, setButtonLoading] = useState(false)

   const handleSubmit = e => {
      e.preventDefault()
      validateFields(async (err, values) => {
         if (!err) {
            setButtonLoading(true)
            let success = await Auth.authenticateUser(values)

            if (success.success) {
               Router.push("/admin")
               // setButtonLoading(false)
            } else {
               setButtonLoading(false)
               setLoginSuccess(success)
            }
         }
      })
   }

   const onFinish = async values => {
      setButtonLoading(true)
      let success = await Auth.authenticateUser(values)
      console.log(success)
      if (success.success) {
         Router.push("/admin")
         // setButtonLoading(false)
      } else {
         setButtonLoading(false)
         setLoginSuccess(success)
      }
   }

   const onFinishFailed = errorInfo => {
      console.log("Failed:", errorInfo)
   }

   return (
      <>
         <Head>
            <title>Login</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <div className="d-flex justify-content-center align-items-center ">
            <Card className="h-auto w-50 shadow-sm text-center rounded">
               <Title>Login</Title>

               {loginSuccess && !loginSuccess.success && (
                  <div className="alert alert-danger">
                     <Text className="text-center text-danger">
                        {loginSuccess.message}
                     </Text>
                  </div>
               )}

               <Form
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  //onFinishFailed={onFinishFailed}
                  className="login-form"
               >
                  <Form.Item
                     name="email"
                     rules={[
                        {
                           required: true,
                           message: "Please input your Email!"
                        },
                        {
                           type: "email",
                           message: "Please input a valid email!"
                        }
                     ]}
                  >
                     <Input
                        prefix={
                           <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        placeholder="Email"
                     />
                  </Form.Item>

                  <Form.Item
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: "Please input your Password!"
                        }
                     ]}
                  >
                     <Input
                        prefix={
                           <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        type="password"
                        placeholder="Password"
                     />
                  </Form.Item>
                  <Form.Item>
                     <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        loading={buttonLoading ? true : false}
                     >
                        {buttonLoading ? "Logging in" : "Log in"}
                     </Button>
                  </Form.Item>
               </Form>
            </Card>
         </div>

         <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
               height: 100%;
            }

            .login-form-button {
               width: 100%;
               border-color: #b61927;
               background-color: #b61927;
               transition: all 0.2s ease-in-out;
            }
            .ant-btn-primary:focus,
            .ant-btn-primary:hover {
               color: #fff;
               background-color: #b61927;
               border-color: #b61927;
               transform: scale(0.99);
            }
         `}</style>
      </>
   )
}

login.getInitialProps = async ({ req, res }) => {
   let pathName = await Auth.AdminProtectRoute(req, res, false)

   return { ok: true }
}

export default login
