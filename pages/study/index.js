import Link from 'next/link';
import { useEffect, useState } from 'react';
import fs from 'fs'
import path from 'path'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';

import Layout from '../../src/Layout';
import Card from '../../src/card';

const PAUSE_LENGTH = 1200;

const Study = ({jsonData}) => {

  const finalIndex = jsonData.length;
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSlidingLeft, setIsSlidingLeft] = useState(false)
  const [currentFunction, setCurrentFunction] = useState(jsonData[0])

  useEffect(() => {
    setIsSlidingLeft(false);
    setCurrentFunction(jsonData[currentIndex])
  }, [currentIndex])

  const { FunctionName: name, Description: description } = currentFunction;

  // if we got to the end of the list, just start over
  const newIndex = () => currentIndex + 1 === finalIndex ? 0 : currentIndex + 1;

  // move on to the next flashcard
  const handleClickLeft = () => {
    setIsSlidingLeft(true);
    setTimeout(() => setCurrentIndex(newIndex), PAUSE_LENGTH); 
  }

  return (
    <Layout>
      <div className="header">
        <Link href="/"><FontAwesomeIcon icon={faHome} /></Link>
      </div>
      <div className="container">
          <Card description={description} isSlidingLeft={isSlidingLeft} name={name} />
      </div>
      <div role="button" aria-label="flashcard name" className="swipe-arrows">
          <div className="left-arrow" onClick={handleClickLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filename = 'lambdas.json';
  const fileDirectory = path.join(process.cwd(), 'data')

  const filePath = path.join(fileDirectory, filename)
  const fileContents = fs.readFileSync(filePath, 'utf-8')

  const lambdaInfo = JSON.parse(fileContents)["Functions"]

  return {
    props: {
      jsonData: lambdaInfo,
    }
  }
}

export default Study;