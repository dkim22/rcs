import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../../modules/shared/InputField';

export const Page2 = () => (
  <>
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
  </>
);
