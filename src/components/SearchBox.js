import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				tye='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;