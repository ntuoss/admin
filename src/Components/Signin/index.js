import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import { withFirebase } from 'api/firebase';
import * as ROUTE from 'utils/routes';
import { withRouter } from 'react-router-dom';
const Form = styled.form`
  /* ...*/
`;

class Signin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      processing: false,
      email: process.env.REACT_APP_FIREBASE_EMAIL || '',
      password: process.env.REACT_APP_FIREBASE_PASSWORD || ''
    };
  }
  inputField = () => [
    {
      key: 'email',
      name: 'email',
      type: 'text',
      placeholder: 'email address',
      value: this.state.email,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ email: e.target.value });
      }
    },
    {
      key: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'password',
      autoComplete: 'off',
      value: this.state.password,
      onChange: e => {
        this.setState({ password: e.target.value });
      }
    },
    {
      key: 'submit',
      type: 'submit',
      value: this.state.processing ? '...' : 'Sign In',
      onClick: e => {
        this.setState({ processing: true });
        const { email, password } = this.state;
        e.preventDefault();
        this.props.firebase
          .signin(email, password)
          .then()
          .then(() => {
            this.setState({ processing: false });
            this.props.history.push(ROUTE.LANDING);
          });
      }
    }
  ];
  render() {
    return (
      <Form>
        {this.inputField().map(item => (
          <Input {...item} />
        ))}
      </Form>
    );
  }
}

export default withRouter(withFirebase(Signin));
