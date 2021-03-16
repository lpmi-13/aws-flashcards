import { useState } from 'react';

const Card = ({
	description,
	isSlidingLeft,
	name,
}) => {

	const [flipped, setFlipped] = useState(false);
	const handleClick = () => setFlipped(!flipped)

	return (
		<div className={`flip-container ${isSlidingLeft ? 'slidingLeft' : ''}`} onClick={handleClick}>
          <div className={`flippable ${flipped ? 'flipme' : ''}`}>
		    <div className="front">
		      {name}
            </div>
            <div className="back">
			   {description || "no description provided"}
            </div>
          </div>
         </div>
	)
}

export default Card;