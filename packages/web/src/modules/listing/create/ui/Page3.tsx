import * as React from "react";
import { Field } from "formik";
import { InputField } from "../../../../modules/shared/InputField";
import { TagField } from "../../../shared/TagField";

export const Page3 = () => (
  <>
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
    <Field
      name="amenities"
      placeholder="Amenities"
      component={TagField}
    />
  </>
);
