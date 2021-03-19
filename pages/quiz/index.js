import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Layout from '../../src/Layout';

const Quiz = () => {

  return (
    <Layout>
      <div className="header">
        <Link href="/"><FontAwesomeIcon icon={faHome} /></Link>
      </div>
      <div>This will be a quiz!</div>
    </Layout>
  )
}

export default Quiz;