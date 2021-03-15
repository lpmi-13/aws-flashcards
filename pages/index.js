import { Fragment, useEffect, useState } from 'react';
import fs from 'fs'
import path from 'path'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//import FlashCard from '../src/FlashCard';
import Card from '../src/card';

const PAUSE_LENGTH = 1500;

const Home = ({jsonData}) => {

  const finalIndex = jsonData.length;
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSlidingLeft, setIsSlidingLeft] = useState(false)

  useEffect(() => {
    setIsSlidingLeft(false);
  }, [currentIndex])

  const { FunctionName: name, Description: description } = jsonData[currentIndex];

  // if we got to the end of the list, just start over
  const newIndex = currentIndex => currentIndex === finalIndex ? 0 : currentIndex + 1;

  // move on to the next flashcard
  const handleClickLeft = () => {
    setIsSlidingLeft(true);
    setTimeout(() => setCurrentIndex(newIndex), PAUSE_LENGTH); 
  }

  return (
    <Fragment>
      <div className="container">
          {/* <FlashCard description={description} functionName={name}/> */}
          <Card description={description} name={name} />
      </div>
      <div role="button" aria-label="flashcard name" className="swipe-arrows">
          <div className="left-arrow" onClick={handleClickLeft}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
      </div>
    </Fragment>
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