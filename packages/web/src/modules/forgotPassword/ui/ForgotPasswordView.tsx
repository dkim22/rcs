import * as React from "react";
import { Form, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field } from "formik";
import { NormalizedErrorMap } from "@abb/controller";
import { InputField } from "../../shared/inputField";

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ margin: "0 auto", maxWidth: 400 }}>
        <Form
          name="forgot-password"
          className="abb-forgot-password__form"
          onFinish={handleSubmit as any}
        >
          <Field
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            component={InputField}
          />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="abb-forgot-password__button"
            >
              Reset password
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },
})(C);
