import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MARS Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="MARS Landing" />
        <p className="description">
         Hello! You have reached simple sample page by <a href="https://marketactionresearch.com">Market Action Research, Inc.</a>
        </p>
    
        <p>Market Action Reseaerch is a professional web development, marketing and tech consulting company based in Los Angeles, CA 🏖️ </p>
    
        <h2>What is this?</h2>
         <ul> 
            <li>This is a placeholder landing page that might be 😎 coming soon or 🤔 is no more.</li>
            <li>This is happening because the domain points to our server, but they do not have a site yet!</li>
            <li>Need a new website or ecommerce platform? Contact <a href="https://marketactionresearch.com">MARS</a> today!</li>
         </ul>
      
      </main>

      <Footer />
    </div>
  )
}
