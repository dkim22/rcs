import React from 'react';

export class TestMain extends React.PureComponent {
  render() {
    return (
      <>
        <div>/register</div>
        <div>/login</div>
        <div>/logout</div>
        <div>/forgot-password</div>
        <div>/change-password/:key</div>
        <div>/m</div>
        <div>/listings</div>
        <div>/test-sub</div>
        <div>/listing/:listingId</div>
        <div>/listing/:listingId/chat</div>
        <div>/listing/:listingId/edit</div>
        <div>/create-listing</div>
      </>
    );
  }
}
