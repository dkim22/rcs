import * as React from 'react';
import { FieldProps } from 'formik';
import { Input } from 'react-native-elements';

const errStyle = {
  color: 'red',
};

export class InputField extends React.Component<FieldProps<any>> {
  onChangeText = (text: string) => {
    const {
      form: { setFieldValue },
      field: { name },
    } = this.props;
    setFieldValue(name, text);
  };

  render() {
    const {
      field,
      form: { errors },
      ...props
    } = this.props;
    const errorMsg = errors[field.name];
    return (
      <Input
        {...props}
        errorStyle={errStyle}
        errorMessage={errorMsg as any}
        onChangeText={this.onChangeText}
        value={field.value}
      />
    );
  }
}
