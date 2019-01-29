import React, { PureComponent } from 'react';
import Input from 'components/Input';
import { Form, FullSection, ArtWork } from '../../styles/Form';
// export class Artwork {
// 	id: string;
// 	title: string;
// 	imageUrl: string;
// 	artist: Person;
// 	eventbriteId: string;
// }

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      processing: false
    };
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

  render() {
    return (
      <Form>
        <ArtWork src={this.state.src} />
        <FullSection>
          <Input {...this.submit} />
        </FullSection>
      </Form>
    );
  }
}

export default App;
