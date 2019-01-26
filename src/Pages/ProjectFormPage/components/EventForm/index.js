import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import {
  Form,
  SubSection,
  SubSectionStart,
  HalfSection,
  FullSection,
  FillSectionBase,
  BreakLine,
  Break
} from '../../styles/Form';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import BooleanBadge from 'components/BooleanBadge';

// export class Event {
// 	id: string;
// 	tgif: number; * x
// 	title: string; * x
// 	speakers: Speaker[]; *ref
// 	banner: Artwork; * ref
// 	venue: Location; * ref
// 	tagline: string; * x
// 	githubUrl: string; * x
// 	description: string; * x
// 	promotion: string; * x
// 	prerequisites: Prerequisite[]; * divider banner
// 	dependencies: Dependency[]; * divider banner
// 	startTime: Date; * x
// 	endTime: Date; * x
// 	status: EventStatus;
// 	public: boolean;
// 	external: boolean; *
// 	hasFood: boolean; *
// 	hasDrinks: boolean; *
// 	remarks: string; * x
// 	eventbrite: Publication;
// 	facebook: Publication;
// }

// export class Speaker { - ref
// 	person: Person;
// 	organisation: Organisation;
// 	position: string;
// }

// export class Dependency { ***
// 	label: string;
// 	specification: string;
// 	referenceUrl: string;
// }

// export class Prerequisite { ***
// 	label: string;
// 	proficiency: Proficiency;
// 	referenceUrl: string;
// }

// Not included
// export class Publication {
// 	id: string;
// 	status: EventStatus;
// 	url: string;
// }

const HeaderInput = styled(Input)`
  margin: 0;
  & > input {
    font-size: 2rem;
    background: ${props => (props.value ? 'transparent' : '')};
  }
`;

const HalfSectionWrap = styled(HalfSection)`
  display: flex;
  flex-flow: row wrap;
`;
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tgif: '',
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
  header = () => [
    {
      key: 'tagline',
      name: 'tagline',
      label: 'tagline',
      type: 'text',
      placeholder: 'Tagline',
      value: this.state.tagline,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ tagline: e.target.value });
      }
    },
    {
      key: 'github',
      name: 'github',
      label: 'GitHub',
      type: 'text',
      placeholder: 'https://github.com/',
      value: this.state.github,
      autoComplete: 'off',
      onChange: e => {
        this.setState({ github: e.target.value });
      }
    }
  ];

  time = () => [
    {
      key: 'startTime',
      name: 'startTime',
      label: 'Start Time',
      type: 'text',
      placeholder: 'MM/DD/YYYY HH:MM',
      value: this.state.startTime,
      onChange: e => {
        this.setState({ startTime: e.target.value });
      }
    },
    {
      key: 'endTime',
      name: 'endTime',
      label: 'End Time',
      type: 'text',
      placeholder: 'MM/DD/YYYY HH:MM',
      value: this.state.endTime,
      onChange: e => {
        this.setState({ endTime: e.target.value });
      }
    }
  ];
  remark = () => ({
    key: 'remark',
    name: 'remark',
    label: 'Remark',
    type: 'text',
    placeholder: 'Things to be told',
    value: this.state.remark,
    onChange: e => {
      this.setState({ remark: e.target.value });
    }
  });
  booleanBadge = () => [
    {
      key: 'Food',
      select: this.state.food,
      onClick: e =>
        this.setState({
          food: !this.state.food
        })
    },
    {
      key: 'Drink',
      select: this.state.drink,
      onClick: e =>
        this.setState({
          drink: !this.state.drink
        })
    },
    {
      key: 'External',
      select: this.state.external,
      onClick: e =>
        this.setState({
          external: !this.state.external
        })
    }
  ];
  render() {
    return (
      <Form>
        <SubSectionStart>
          <Heading>TGIF #</Heading>
          <HeaderInput
            value={this.state.tgif}
            width="3.5rem"
            onChange={e => this.setState({ tgif: e.target.value })}
          />
          <Heading>{' : '}</Heading>
          <FillSectionBase>
            <HeaderInput
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
          </FillSectionBase>
        </SubSectionStart>
        <BreakLine />
        <SubSection>
          {this.header().map(item => (
            <Input width="20rem" {...item} />
          ))}
        </SubSection>
        <Break />
        <TextField placeholder="Description" />
        <SubSection>
          <HalfSectionWrap>
            {this.booleanBadge().map(item => (
              <BooleanBadge {...item}>{item.key}</BooleanBadge>
            ))}
          </HalfSectionWrap>
          <HalfSection>
            {this.time().map(item => (
              <Input {...item} />
            ))}
          </HalfSection>
        </SubSection>
        <FullSection>
          <Input {...this.remark()} />
          <Input {...this.submit} />
        </FullSection>
      </Form>
    );
  }
}

export default App;
