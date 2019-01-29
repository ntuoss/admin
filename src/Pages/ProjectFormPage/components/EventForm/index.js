import React, { Component } from 'react';
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
import Popup from 'reactjs-popup';

import Dependency from '../DependencyForm';
import Prerequisite from '../PrerequisiteForm';

const PopupStyled = styled(Popup)`
  height: 60vh;
  width: 63vw !important;
  background: ${props => props.theme.bg + 'dd'} !important;
  border: solid 3px ${props => props.theme.highlight} !important;
  border-radius: 10px;
  overflow: scroll;
`;
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
// 	prerequisites: Prerequisite[]; * divider banner x
// 	dependencies: Dependency[]; * divider banner x
// 	startTime: Date; * x
// 	endTime: Date; * x
// 	status: EventStatus;
// 	public: boolean;
// 	external: boolean; * x
// 	hasFood: boolean; * x
// 	hasDrinks: boolean; * x
// 	remarks: string; * x
// 	eventbrite: Publication;
// 	facebook: Publication;
// }

// export class Speaker { - ref
// 	person: Person;
// 	organisation: Organisation;
// 	position: string;
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
    text-align: ${props => props.align || 'left'};
  }
`;

const HalfSectionWrap = styled(HalfSection)`
  display: flex;
  flex-flow: row wrap;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tgif: '',
      processing: false,
      food: false,
      drink: false,
      external: false,
      prerequisite: [],
      dependencies: []
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
      label: 'Tagline',
      type: 'text',
      placeholder: 'Attract audience',
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
  popupBadge = () => [
    {
      key: 'Pre-requisite',
      select: this.state.prerequisite,
      ele: Prerequisite
    },
    {
      key: 'Dependency',
      select: this.state.dependencies,
      ele: Dependency
    }
  ];
  render() {
    return (
      <Form>
        <SubSectionStart>
          <Heading>TGIF #</Heading>
          <HeaderInput
            value={this.state.tgif}
            width="4.1rem"
            onChange={e => this.setState({ tgif: e.target.value })}
            align="center"
          />
          <Heading>{': '}</Heading>
          <FillSectionBase>
            <HeaderInput
              label="Title"
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
              <BooleanBadge {...item} name={item.key} key={item.key}>
                {item.key}
              </BooleanBadge>
            ))}
            {this.popupBadge().map(item => (
              <PopupStyled
                trigger={<BooleanBadge {...item}>{item.key}</BooleanBadge>}
                modal
                closeOnDocumentClick
                key={item.key}
              >
                {close => <item.ele close={close} />}
              </PopupStyled>
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
