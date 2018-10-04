import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Segment,
  Grid,
  Header
} from "semantic-ui-react";

class SignupForm extends Component {
    state = {
        
    }
  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Sign-Up to LambdaMUD
            </Header>
            <Segment stacked>
              <Form size="large">
                <Form.Field>
                  <label>UserName</label>
                  <input placeholder="UserName" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="password" />
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <input placeholder="password" />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignupForm;
