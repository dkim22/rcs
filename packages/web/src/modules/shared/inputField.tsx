import * as React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { FieldProps } from 'formik';

export const InputField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode; label?: string; useNumberComponent?: boolean }
> = ({
  field: { onChange, ...field },
  form: { errors, setFieldValue },
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = errors[field.name];

  const Comp: any = useNumberComponent ? InputNumber : Input;

  return (
    <Form.Item label={label} help={errorMsg} validateStatus={errorMsg ? 'error' : undefined}>
      <Comp
        {...field}
        {...props}
        onChange={
          useNumberComponent ? (newValue: string) => setFieldValue(field.name, newValue) : onChange
        }
      />
    </Form.Item>
  );
};
