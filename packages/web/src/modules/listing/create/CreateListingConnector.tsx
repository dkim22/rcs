import * as React from "react";
import { Form, Button } from "antd";
import { Formik } from "formik";
import { Page1 } from "./ui/Page1";
import { Page2 } from "./ui/Page2";
import { Page3 } from "./ui/Page3";

interface FormValues {
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

export class CreateListingConnector extends React.PureComponent<{}, State> {
  state = {
    page: 0
  }

  submit = (values: any) => {
    console.log("values: ", values);
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    return (
      <div style={{ margin: "0 auto", maxWidth: 400 }}>
        <Formik<FormValues>
          initialValues={{
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
          {() => (
            <Form
              name="login"
              className="abb-create-listing__form"
              onFinish={this.submit}
            >
              {pages[this.state.page]}
              <Form.Item>
                {this.state.page === pages.length - 1 ?
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="abb-create-listing__button"
                  >
                    Create listing
                  </Button>
                  :
                  <Button
                    type="primary"
                    className="abb-create-listing__button"
                    onClick={this.nextPage}
                  >
                    Next page
                  </Button>
                }
              </Form.Item>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
