import React, { PureComponent } from 'react';
import Input from 'components/Input';
import BooleanBadge from 'components/BooleanBadge';
import {
  Form,
  FullSection,
  SubSection,
  BreakLine,
  SubSectionStart
} from '../../styles/Form';
// export class Location {
// 	id: string;
// 	name: string;
// 	imageUrl: string;
// 	addressLine1: string;
// 	addressLine2: string;
// 	seatingCapacity: number;
// 	eventbriteId: string;
// }

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      processing: false
    };
  }
  header = () => [
    {
      key: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Location',
      value: this.state.location,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ location: e.target.value });
      }
    },
    {
      key: 'capacity',
      name: 'capacity',
      type: 'text',
      placeholder: 'Room Capacity',
      value: this.state.capacity,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ capacity: e.target.value });
      }
    }
  ];
  address = () => [
    {
      key: 'addressLine1',
      name: 'addressLine1',
      type: 'address',
      placeholder: 'Workshop address line 1',
      value: this.state.address1,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ address1: e.target.value });
      }
    },
    {
      key: 'addressLine2',
      name: 'addressLine2',
      type: 'address',
      placeholder: 'Workshop address line 2',
      value: this.state.address2,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ address2: e.target.value });
      }
    },
    {
      key: 'submit',
      type: 'submit',
      value: this.state.processing ? '...' : 'Submit',
      onClick: e => {
        this.setState({ processing: true });
        e.preventDefault();
      }
    }
  ];
  render() {
    return (
      <Form>
        <SubSectionStart>
          <BooleanBadge>LT1</BooleanBadge>
        </SubSectionStart>
        <BreakLine />
        <SubSection>
          {this.header().map(item => (
            <Input {...item} />
          ))}
        </SubSection>
        <FullSection>
          {this.address().map(item => (
            <Input {...item} />
          ))}
        </FullSection>
      </Form>
    );
  }
}

export default App;
