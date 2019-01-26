import React, { PureComponent } from 'react';
import Input from 'components/Input';
import TextField from 'components/TextField';
import BooleanBadge from 'components/BooleanBadge';
import {
  Form,
  FullSection,
  FillSection,
  Avatar,
  BreakLine,
  SubSectionStart
} from '../../styles/Form';

class Org {
  id: string;
  name: string;
  about: string;
  githubUrl: string;
  websiteUrl: string;
  avatarUrl: string;
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      processing: false
    };
    this.person = new Org();
    this.submit = {
      key: 'submit',
      type: 'submit',
      value: this.state.processing ? '...' : 'Submit',
      onClick: e => {
        this.setState({ processing: true });
        e.preventDefault();
      }
    };
  }
  config = () => [
    {
      key: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Organization',
      value: this.state.name,
      onChange: e => {
        this.setState({ email: e.target.value });
      }
    },
    {
      key: 'github',
      name: 'github',
      label: 'GitHub',
      type: 'text',
      placeholder: 'https://github.com/',
      value: this.state.github,
      onChange: e => {
        this.setState({ github: e.target.value });
      }
    },
    {
      key: 'website',
      name: 'website',
      type: 'text',
      placeholder: 'Organization website',
      value: this.state.website,
      onChange: e => {
        this.setState({ website: e.target.value });
      }
    }
  ];

  render() {
    return (
      <Form>
        <SubSectionStart>
          <BooleanBadge>placeholder</BooleanBadge>
        </SubSectionStart>
        <BreakLine />
        <Avatar>+</Avatar>
        <FillSection>
          {this.config().map(item => (
            <Input {...item} />
          ))}
        </FillSection>
        <FullSection>
          <TextField placeholder="About the speaker" />
          <Input {...this.submit} />
        </FullSection>
      </Form>
    );
  }
}

export default App;
