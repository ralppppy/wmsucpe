import AdminLayout from "../components/layouts/admin/AdminLayout"
import {
   BrowserView,
   MobileView,
   isBrowser,
   isMobile
} from "react-device-detect"
import Mobile from "../components/layouts/admin/mobile/Mobile"

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
   return (
      <>
         {pageProps.userData ? (
            <>
               <BrowserView>
                  <AdminLayout userData={pageProps.userData.user}>
                     <Component {...pageProps} />
                  </AdminLayout>
               </BrowserView>
               <MobileView>
                  <Mobile userData={pageProps.userData.user}>
                     <Component {...pageProps} />
                  </Mobile>
               </MobileView>
            </>
         ) : (
            <Component {...pageProps} />
         )}
      </>
   )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.getInitialProps = async ({ Component, router, ctx }) => {
   let pageProps = {}

   if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
   }

   return { pageProps }
}

export default MyApp
