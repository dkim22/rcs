import * as React from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { withCreateListing, WithCreateListing } from '@abb/controller';
import { RouteComponentProps } from 'react-router-native';
import { Text, ScrollView } from 'react-native';
import { InputField } from '../../shared/inputField';
import { Button } from 'react-native-elements';
import { CheckboxGroupField } from '../../shared/CheckboxGroupField';
import { PictureField } from '../../shared/PictureField';

interface FormValues {
  picture: null;
  name: string;
  category: string;
  description: string;
  price: string;
  beds: string;
  guests: string;
  latitude: string;
  longitude: string;
  amenities: string[];
}

class C extends React.PureComponent<RouteComponentProps<{}> & WithCreateListing> {
  submit = async (
    { price, beds, guests, latitude, longitude, ...values }: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ) => {
    console.log(values);
    await this.props.createListing({
      ...values,
      price: parseInt(price, 10),
      beds: parseInt(beds, 10),
      guests: parseInt(guests, 10),
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    });
    setSubmitting(false);
  };

  render() {
    return (
      <Formik<FormValues>
        initialValues={{
          picture: null,
          name: '',
          category: '',
          description: '',
          price: '0',
          beds: '0',
          guests: '0',
          latitude: '0',
          longitude: '0',
          amenities: [],
        }}
        onSubmit={this.submit}
      >
        {(props) => (
          <ScrollView style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 28, marginBottom: 10 }}>Create Listing</Text>
            <Field
              name="name"
              placeholder="Name"
              containerStyle={{ width: '100%' }}
              autoCapitalize="none"
              component={InputField}
            />
            <Field
              name="picture"
              title="Pick a picture"
              containerStyle={{ width: '100%' }}
              component={PictureField}
            />
            <Field
              name="category"
              placeholder="Category"
              autoCapitalize="none"
              component={InputField}
            />
            <Field
              name="description"
              placeholder="Description"
              autoCapitalize="none"
              component={InputField}
            />
            <Field
              label="Price"
              name="price"
              placeholder="Price"
              component={InputField}
              keyboardType="numeric"
            />
            <Field
              label="Beds"
              name="beds"
              placeholder="Beds"
              useNumberComponent={true}
              component={InputField}
              keyboardType="numeric"
            />
            <Field
              label="Guests"
              name="guests"
              placeholder="Guests"
              useNumberComponent={true}
              component={InputField}
              keyboardType="numeric"
            />
            <Field
              label="Latitude"
              name="latitude"
              placeholder="Latitude"
              useNumberComponent={true}
              component={InputField}
              keyboardType="numeric"
            />
            <Field
              label="Longitude"
              name="longitude"
              placeholder="Longitude"
              useNumberComponent={true}
              component={InputField}
              keyboardType="numeric"
            />
            <Field
              name="amenities"
              options={['pool', 'basketball', 'soccer field', 'yard']}
              component={CheckboxGroupField}
            />
            <Button onPress={props.handleSubmit as any} title="save listing" />
          </ScrollView>
        )}
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(C);
