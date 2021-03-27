import Link from 'next/link';
import Layout from '../src/Layout';

const Home = () => {

  return (
    <Layout>
      <h1 className="info-text">Sometimes there's lots of stuff in your AWS environment.</h1>
      <h2 className="info-text-small">Here's an app to help you learn what it all is.</h2>
      <div className="links">
        <Link href="/study">Study your lambdas</Link>
      </div>
      <div className="links">
        <Link href="/quiz">Take a quiz on your lambdas</Link>
      </div>
    </Layout>
  )
}

export default Home;