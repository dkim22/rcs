import * as React from "react";
import { Form, Select } from "antd";
import { FieldProps } from "formik";

export const TagField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode, label?: string }
> = ({ field: { onChange, onBlur: _, ...field }, form: { errors, setFieldValue }, label, ...props }) => {
  const errorMsg = errors[field.name];


  return (
    <Form.Item label={label} help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Select
        {...field}
        {...props}
        mode="tags"
        onChange={(newValue: string) => setFieldValue(field.name, newValue)}
      />
    </Form.Item>
  );
};
