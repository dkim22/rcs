import * as React from 'react';
import { Form, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withFormik, FormikProps, Field } from 'formik';
import { validUserSchema } from '@abb/common';
import { Link } from 'react-router-dom';
import { NormalizedErrorMap } from '@abb/controller';
import { InputField } from '../../shared/InputField';
// formik hooks 사용시 코드 많이 줄일 수 있음
// HOC가 사용하기 복잡함

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ margin: '0 auto', maxWidth: 400 }}>
        <Form name="register" className="abb-register__form" onFinish={handleSubmit as any}>
          <Field
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            component={InputField}
            autoComplete="on"
          />
          <Form.Item>
            <Link to="/forgot-password">Forgot password</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="abb-register__button">
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Or <Link to="/login">login now!</Link>
          </Form.Item>
        </Form>
      </div>
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
    } else {
      props.onFinish();
    }
  },
})(C);
