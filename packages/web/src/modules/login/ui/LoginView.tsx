import * as React from "react";
import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field } from "formik";
import { loginSchema } from "@abb/common";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@abb/controller";
import { InputField } from "../../shared/inputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ margin: "0 auto", maxWidth: 400 }}>
        <Form
          name="login"
          className="abb-login__form"
          onFinish={handleSubmit as any}
        >
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
            <Button
              type="primary"
              htmlType="submit"
              className="abb-login__button"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            Or <Link to="/register">register</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  // FIXME: 실시간 벨리데이션이 아니라 Login 버튼을 눌렀을 때만 에러를 표시하게 했지만 서버에러를 어떻게 표시하냐에 따라서 변경 할 수도 있음
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
