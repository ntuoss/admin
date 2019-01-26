import React, { Component } from 'react';
import styled from 'styled-components';
import FullScreenContainer from 'components/FullScreenContainer';
import Logo from 'components/Animated/Logo';
import { Route } from 'react-router-dom';
import * as ROUTE from 'utils/routes';

import NavigatorCard from './components/NavigatorCard';
import PersonForm from './components/PersonForm';
import OrgForm from './components/OrgForm';
import LocationForm from './components/LocationForm';
import PictureForm from './components/PictureForm';
import EventForm from './components/EventForm';

const MainPage = styled(FullScreenContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Navigator = styled.nav`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;
const FormWrapper = styled.section`
  flex: 3;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }
  routeList = [
    ROUTE.FORM + '/event',
    ROUTE.FORM + '/org',
    ROUTE.FORM + '/person',
    ROUTE.FORM + '/picture',
    ROUTE.FORM + '/location'
  ]; // This is to create ordered list for ease
  iconMap = {
    [ROUTE.FORM + '/location']: 'map-marker-alt',
    [ROUTE.FORM + '/event']: 'calendar-alt',
    [ROUTE.FORM + '/org']: 'users',
    [ROUTE.FORM + '/person']: 'user-alt',
    [ROUTE.FORM + '/picture']: 'image'
  };
  componentMap = {
    '': Logo,
    person: PersonForm,
    org: OrgForm,
    location: LocationForm,
    event: EventForm,
    picture: PictureForm
  };
  render() {
    return (
      <MainPage>
        <Navigator>
          {this.routeList.map(key => (
            <NavigatorCard key={key} to={key} icon={this.iconMap[key]} />
          ))}
        </Navigator>
        <FormWrapper>
          {Object.keys(this.componentMap).map(key => (
            <Route
              key={key}
              exact
              path={`${this.props.match.url}/${key}`}
              component={this.componentMap[key]}
            />
          ))}
        </FormWrapper>
      </MainPage>
    );
  }
}

export default App;
