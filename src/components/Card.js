import React from 'react';

const Card = ({id, name, email}) => {
	//const Card = (props) => {
	//const {id, name, email} = props;
	return(
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?set=set1&size=200x200`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;