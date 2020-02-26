import { Layout } from "antd"

const { Content: Contents } = Layout

function Content({ children }) {
   return (
      <Contents
         style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: "auto"
         }}
      >
         {children}
      </Contents>
   )
}

export default Content
