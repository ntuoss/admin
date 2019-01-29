import React, { Component } from 'react';
import Input from 'components/Input';
import { Form, FullSection, SubSection } from '../../styles/Form';
import Item from './item';

// export class Prerequisite { ***
// 	label: string;
// 	proficiency: Proficiency;
// 	referenceUrl: string;
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  buttons = () => [
    {
      key: 'submit',
      type: 'submit',
      value: 'Submit',
      onClick: e => {
        e.preventDefault();
        this.props.close();
      }
    },
    {
      key: 'add',
      type: 'submit',
      value: 'Add',
      onClick: e => {
        e.preventDefault();
        this.setState({
          number: this.state.number + 1
        });
      }
    }
  ];
  render() {
    return (
      <Form>
        <SubSection>
          {this.buttons().map(item => (
            <Input width="20rem" {...item} />
          ))}
        </SubSection>
        <FullSection>
          {[...Array(this.state.number)].map((i, e) => (
            <Item key={i} />
          ))}
        </FullSection>
      </Form>
    );
  }
}

export default App;
