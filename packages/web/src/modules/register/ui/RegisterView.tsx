import * as React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikErrors, FormikProps } from "formik";
import * as yup from "yup";

// formik hooks 사용시 코드 많이 줄일 수 있음
// HOC가 사용하기 복잡함

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues>> | null;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      errors,
    } = this.props;
    return (
      <div style={{ margin: "0 auto", maxWidth: 400 }}>
        {/* TODO: name, className 변경 */}
        <Form
          name="normal_login"
          className="login-form"
          onFinish={handleSubmit as any}
        >
          <Form.Item
            name="email"
            help={errors.email}
            validateStatus={errors.email ? "error" : undefined}
          >
            <Input
              name="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="password"
            help={errors.password}
            validateStatus={errors.password ? "error" : undefined}
          >
            <Input
              name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Or <a href="">login now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup.string().min(3, passwordNotLongEnough).max(255).required(),
});

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema,
  isInitialValid: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
