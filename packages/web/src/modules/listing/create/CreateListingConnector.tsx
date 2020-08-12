import * as React from "react";
import { Form, Button } from "antd";
import { Formik, FormikHelpers } from "formik";
import { withCreateListing, WithCreateListing } from "@abb/controller";
import ImageFile from "react-dropzone";

import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";

interface FormValues {
  picture: typeof ImageFile | null;
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

interface State {
  page: number;
}

const pages = [<Page1 />, <Page2 />, <Page3 />];

class C extends React.PureComponent<{} & WithCreateListing, State> {
  state = {
    page: 0
  }

  submit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    await this.props.createListing(values);
    setSubmitting(false);
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    return (
      <div style={{ margin: "0 auto", maxWidth: 400 }}>
        <Formik<FormValues>
          initialValues={{
            picture: null,
            name: "",
            category: "",
            description: "",
            price: 0,
            beds: 0,
            guests: 0,
            latitude: 0,
            longitude: 0,
            amenities: []
          }}
          onSubmit={this.submit}
        >
          {(props) => (
            <Form
              name="login"
              className="abb-create-listing__form"
              onFinish={props.handleSubmit as any}
            >
              {pages[this.state.page]}
              <Form.Item>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {this.state.page === pages.length - 1 ?
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit" 
                      className="abb-create-listing__submit-button"
                      disabled={props.isSubmitting}
                    >
                      Create listing
                    </Button>
                  </div>
                  :
                  <Button
                    type="primary"
                    className="abb-create-listing__button"
                    onClick={this.nextPage}
                  >
                    Next page
                  </Button>
                }
                </div>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export const CreateListingConnector = withCreateListing(C);
