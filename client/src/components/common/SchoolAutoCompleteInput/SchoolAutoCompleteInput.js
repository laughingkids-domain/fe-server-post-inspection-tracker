/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from './node_modules/react';
import { Query } from './node_modules/react-apollo';
import { loader } from './node_modules/graphql.macro';
import * as Styles from './SchoolAutoCompleteInput.css'; 
const keywordQuery = loader('../../graphql/keywordsQuery.graphql');

export default class SchoolAutoCompleteInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"",
			suburb:"",
			type:"",
			keyword:null,
			level: 0,
			selective: 0
		}
	}
	renderDropdown = (keywords) => {
		return (
			<select onChange={this.handleDropdownClick}>
				{keywords.names.map((school)=>(<option value={school} data-type="school" >
					{school} 
				</option>))}
				{keywords.suburbs.map((suburb)=>(<option value={suburb} data-type="suburb" >
					{suburb} 
				</option>))}
			</select>
		)
	}
	handleDropdownClick = (event) => {
		const option = {
			value: event.currentTarget.value,
		}
		this.setState({
			keyword: option.value
		})
		console.log(option)
	}
	handleInputChange = (event) => {
		this.setState({
			keyword: event.currentTarget.value
		})
	}
	render() {
		const {keyword} = this.state;
		return (
			<div css={Styles.container}>
				<input type="text" onChange={this.handleInputChange} value={keyword} />
				<Query query={keywordQuery} variables={{term: keyword}} skip={!keyword}>
				{({ loading, error, data }) => {
						if (loading || !data) return null;
						if (error) return `Error! ${error}`;
						return this.renderDropdown(data.keywords);
					}}
				</Query>
			</div>
			
		)
	}
}