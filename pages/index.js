import Link from 'next/link';
import Layout from '../src/Layout';

const Home = () => {

  return (
    <Layout>
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