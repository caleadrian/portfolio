import '../styles/globals.css'
import Navigations from '../components/Navigations'
import PageContainer from '../components/PageContainer'


function MyApp({ Component, pageProps }) {
  return (
    <div className="app flex justify-center">
      <Navigations />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </div>
  )
}

export default MyApp
