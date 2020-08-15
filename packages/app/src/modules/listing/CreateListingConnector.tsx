import * as React from 'react';
import { Formik, Field } from 'formik';
import { withCreateListing, WithCreateListing } from '@abb/controller';
import { RouteComponentProps } from 'react-router-native';
import { Text, View, ScrollView } from 'react-native';
import { InputField } from '../shared/inputField';
import { Button } from 'react-native-elements';

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
    values: FormValues,
    // { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    // await this.props.createListing(values);
    // setSubmitting(false);
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
          <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <ScrollView style={{ padding: 20, marginTop: 20 }}>
              <Text style={{ fontSize: 28, marginBottom: 10 }}>Create Listing</Text>
              <Field
                name="name"
                placeholder="Name"
                containerStyle={{ width: '100%' }}
                autoCapitalize="none"
                component={InputField}
              />
              <Field name="category" placeholder="Category" component={InputField} />
              <Field name="description" placeholder="Description" component={InputField} />
              <Field
                label="Price"
                name="price"
                placeholder="Price"
                useNumberComponent={true}
                component={InputField}
              />
              <Field
                label="Beds"
                name="beds"
                placeholder="Beds"
                useNumberComponent={true}
                component={InputField}
              />
              <Field
                label="Guests"
                name="guests"
                placeholder="Guests"
                useNumberComponent={true}
                component={InputField}
              />
              <Field
                label="Latitude"
                name="latitude"
                placeholder="Latitude"
                useNumberComponent={true}
                component={InputField}
              />
              <Field
                label="Longitude"
                name="longitude"
                placeholder="Longitude"
                useNumberComponent={true}
                component={InputField}
              />
              <Button onPress={props.handleSubmit as any} title="save listing" />
            </ScrollView>
          </View>
        )}
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(C);
