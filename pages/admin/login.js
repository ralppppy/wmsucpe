import Head from "next/head"
import { Card, Typography, Form, Icon, Input, Button, Checkbox } from "antd"

const { Title, Text } = Typography

function login({ form }) {
   const { getFieldDecorator, validateFields } = form

   const handleSubmit = e => {
      e.preventDefault()
      validateFields((err, values) => {
         if (!err) {
            console.log("Received values of form: ", values)
         }
      })
   }

   return (
      <>
         <Head>
            <title>Login</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <link
               rel="stylesheet"
               type="text/css"
               href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            />

            <link
               rel="stylesheet"
               type="text/css"
               href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.12/antd.min.css"
            />
         </Head>
         <div className="d-flex justify-content-center align-items-center ">
            <Card className="h-auto w-50 shadow-sm text-center rounded">
               <Title>Login</Title>
               <Form onSubmit={handleSubmit} className="login-form">
                  <Form.Item>
                     {getFieldDecorator("username", {
                        rules: [
                           {
                              required: true,
                              message: "Please input your username!"
                           }
                        ]
                     })(
                        <Input
                           prefix={
                              <Icon
                                 type="user"
                                 style={{ color: "rgba(0,0,0,.25)" }}
                              />
                           }
                           placeholder="Username"
                        />
                     )}
                  </Form.Item>
                  <Form.Item>
                     {getFieldDecorator("password", {
                        rules: [
                           {
                              required: true,
                              message: "Please input your Password!"
                           }
                        ]
                     })(
                        <Input
                           prefix={
                              <Icon
                                 type="lock"
                                 style={{ color: "rgba(0,0,0,.25)" }}
                              />
                           }
                           type="password"
                           placeholder="Password"
                        />
                     )}
                  </Form.Item>
                  <Form.Item>
                     <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                     >
                        Log in
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

export default Form.create({ name: "normal_login" })(login)
