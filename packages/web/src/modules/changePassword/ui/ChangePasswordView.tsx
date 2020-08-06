import * as React from "react";
import { Form, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { withFormik, FormikProps, Field } from "formik";
import { NormalizedErrorMap, forgotPasswordChangeMutationVariables } from "@abb/controller";
import { changePasswordSchema } from "@abb/common";
import { InputField } from "../../shared/InputField";

interface FormValues {
  newPassword: string;
}

interface Props {
  token: string;
  onFinish: () => void;
  submit: (values: forgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{ margin: "0 auto", maxWidth: 400 }}>
        <Form
          name="change-password"
          className="abb-forgot-password__form"
          onFinish={handleSubmit as any}
        >
          <Field
            name="newPassword"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="New Password"
            component={InputField}
          />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="abb-forgot-password__button"
            >
              Change password
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({ newPassword, key: props.token });
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  },
})(C);
