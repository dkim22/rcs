import * as React from 'react';
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { validUserSchema } from '@abb/common';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { InputField } from '../../shared/inputField';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Card>
          <Text style={{ fontSize: 28, marginBottom: 10 }}>Register</Text>
          <Field
            name="email"
            placeholder="Email"
            containerStyle={{ width: '100%' }}
            autoCapitalize="none"
            component={InputField}
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            containerStyle={{ width: '100%' }}
            autoCapitalize="none"
            component={InputField}
          />
          <Button style={{ marginTop: 8 }} title="Submit" onPress={handleSubmit as any} />
        </Card>
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
