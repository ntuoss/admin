// Include Material ui

import React, { PureComponent } from 'react';
import Input from 'components/Input';
import TextField from 'components/TextField';
import BooleanBadge from 'components/BooleanBadge';
import {
  Form,
  FullSection,
  FillSection,
  Avatar,
  SubSection,
  SubSectionStart,
  BreakLine
} from '../../styles/Form';

class Person {
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
    this.person = new Person();
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

  header = () => [
    {
      key: 'name',
      name: 'name',
      type: 'text',
      placeholder: "Speaker's name",
      value: this.state.name,
      onChange: e => {
        this.setState({ name: e.target.value });
      }
    },
    {
      key: 'position',
      name: 'position',
      type: 'text',
      placeholder: "Speaker's position",
      value: this.state.position,
      onChange: e => {
        this.setState({ position: e.target.value });
      }
    }
  ];
  config = () => [
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
      placeholder: "Speaker's website",
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
        <Avatar src={this.state.src} />
        <FillSection>
          <SubSection>
            {this.header().map(item => (
              <Input {...item} />
            ))}
          </SubSection>
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
