import { useState } from 'react';

export default function Card({
	description,
	name,
}) {
	const [flipped, setFlipped] = useState(false);
	const [flippedStatus, setFlippedStatus] = useState('DEFAULT');

	const handleClick = () => {
		if (flipped) {
			setFlipped(false);
			setFlippedStatus('DEFAULT');
		} else {
			setFlipped(true);
			setFlippedStatus('FLIPPED');
		}
	}

	// return (
		// <div className="flip-card" onClick={handleClick} data-flipped-status={flippedStatus}>
			{/* <div className="flip-card-inner"> */}
			  {/* <button className="flip-card-front"> */}
			  	{/* {name} */}
			  {/* </button> */}
			  {/* <button className="flip-card-back"> */}
			  	{/* {description || "no description provided"} */}
			  {/* </button> */}
			{/* </div> */}
		{/* </div> */}
	// );
	return (
		<div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img alt="Avatar" className="imergz"/>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
         </div>
	)
}
