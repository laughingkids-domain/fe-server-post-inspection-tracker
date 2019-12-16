/**@jsx jsx */
import {jsx} from "@emotion/core";
import React from 'react';
import MapViewStyle from './MapView.css';
import SchoolList from '../../components/SchoolList';
import { Query } from 'react-apollo';
import { loader } from 'graphql.macro';
const schoolCardQuery = loader('../../graphql/schoolCardQuery.graphql');

class MapView extends React.Component {
  constructor(props) {
    super(props)
  }
  clickSchool = (event) => {
    alert(`school ${event.currentTarget.dataset.code} clicked`);
  }
  render() {
    return (
      <div css={MapViewStyle.container}>
        <div css={MapViewStyle.listContainer}>
          <Query query={schoolCardQuery}>
            {({ data: { schools }, loading }) => {
              if (loading || typeof loading === undefined) {
                return <div>Loading ...</div>;
              }
              return (
                <SchoolList schools={schools} schoolCardClick={this.clickSchool}/>
              );
            }}
          </Query>
        </div>
        <div css={MapViewStyle.mapContainer}>
          map goes here
        </div>
      </div>
    )
  }
}

export default MapView;