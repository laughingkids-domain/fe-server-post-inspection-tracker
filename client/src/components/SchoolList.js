import React from 'react';
import SchoolCard from './common/SchoolCard/SchoolCard';
/** @jsx jsx */
import {jsx,css} from '@emotion/core';

export default function SchoolList(props) {
	const {schools,schoolCardClick} = props;
	const schoolListStyle = css`
		margin: 0px;
		padding: 0px;
	`;
	return (
		<ul css={schoolListStyle}>
		    {schools.map((school) => ( 
		        <SchoolCard 
							key={school.School_code} 
							code={school.School_code}
		          name={school.School_name}
		          street={school.Street}
		          suburb={school.Town_suburb}
		          postcode={school.Postcode}
		          website={school.Website}
		          phone={school.Phone}
		          latitude={school.Latitude}
							longitude={school.Longitude}
							cardClickEvent={schoolCardClick}
		          onList
		        />
		      )
		    )}
	  	</ul>
	)
}