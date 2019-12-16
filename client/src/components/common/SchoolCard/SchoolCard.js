import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import SchoolCardStyle from './SchoolCard.css';

export default function SchoolCard(props) {
	const {name,street,suburb,postcode,website,phone,cardClickEvent,code} = props;
	const disableAddress = `${street} ${suburb} ${postcode}`;
	const telephone = `tel:${phone}`;
	return (
		<div css={SchoolCardStyle.container} onClick={cardClickEvent} data-code={code}>
			<a css={SchoolCardStyle.schoolName} href={website} rel="noopener" target="_blank">{name}</a>
			<p css={SchoolCardStyle.schoolAddress}>{disableAddress}</p>
			<a css={SchoolCardStyle.schoolPhone} href={telephone}>Call them</a>
		</div>
	)
}