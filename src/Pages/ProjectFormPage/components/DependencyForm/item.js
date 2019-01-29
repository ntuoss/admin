import React, { Component } from 'react';
import Input from 'components/Input';
import { Form, FullSection, SubSection, BreakLine } from '../../styles/Form';

// export class Dependency { ***
// 	label: string;
// 	specification: string;
// 	referenceUrl: string;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      dependency: '',
      specification: ''
    };
  }
  header = () => [
    {
      key: 'label',
      name: 'label',
      type: 'text',
      placeholder: 'Label of dependency',
      value: this.state.label,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ label: e.target.value });
      }
    },
    {
      key: 'specification',
      name: 'specification',
      type: 'text',
      placeholder: 'Specification',
      value: this.state.specification,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ specification: e.target.value });
      }
    }
  ];
  url = () => ({
    key: 'url',
    name: 'url',
    type: 'text',
    placeholder: 'Reference url',
    value: this.state.url,
    autoComplete: 'off',
    onChange: e => {
      this.setState({ url: e.target.value });
    }
  });
  render() {
    return (
      <Form>
        <SubSection>
          {this.header().map(item => (
            <Input {...item} />
          ))}
        </SubSection>
        <FullSection>
          <Input {...this.url()} />
        </FullSection>
        <BreakLine />
      </Form>
    );
  }
}

export default App;
