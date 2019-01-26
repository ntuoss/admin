import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import { Form, FullSection } from '../../styles/Form';
// export class Artwork {
// 	id: string;
// 	title: string;
// 	imageUrl: string;
// 	artist: Person;
// 	eventbriteId: string;
// }

const ArtWork = styled.div`
  flex: 1 1 100%;
  border-radius: 3px;
  overflow: hidden;
  background: ${props => props.theme.sencondary};
  height: ${props => props.size || '50vh'};
  width: ${props => props.size || '50vw'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px ${props => props.theme.highlight};
  font-size: 4rem;
  color: ${props => props.theme.hint};
  cursor: pointer;
`;

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
        <ArtWork>+</ArtWork>
        <FullSection>
          <Input {...this.submit} />
        </FullSection>
      </Form>
    );
  }
}

export default App;
