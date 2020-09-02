import * as React from 'react';
import { FormikHelpers } from 'formik';
import { withCreateListing, WithCreateListing } from '@abb/controller';
import { ListingFormValues, ListingForm } from '../shared/ListingForm';

class C extends React.PureComponent<{} & WithCreateListing> {
  submit = async (
    values: ListingFormValues,
    { setSubmitting }: FormikHelpers<ListingFormValues>,
  ) => {
    await this.props.createListing(values);
    setSubmitting(false);
  };

  render() {
    return <ListingForm submit={this.submit} />;
  }
}

export const CreateListingConnector = withCreateListing(C);
