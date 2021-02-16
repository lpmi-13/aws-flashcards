import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'

const Home = ({jsonData}) => {

  return (
    <h1>
      {jsonData.map(lambdas => (
        <div>
          <h2>
            {lambdas.FunctionName}
          </h2>
          <p>
            {lambdas.Description || "no description given"}
          </p>
        </div>
      ))}
    </h1>
  )
}

export async function getStaticProps() {
  const filename = 'lambdas.json';
  const fileDirectory = path.join(process.cwd(), 'data')

  const filePath = path.join(fileDirectory, filename)
  const fileContents = fs.readFileSync(filePath, 'utf-8')

  const lambdInfo = JSON.parse(fileContents)["Functions"]

  return {
    props: {
      jsonData: lambdInfo,
    }
  }
}

export default Home;