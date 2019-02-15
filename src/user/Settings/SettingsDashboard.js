import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import SettignsNav from './SettingsNav';

const SettingsDashboard = () => (
  <Grid>
    <Grid.Column width={12}>
      <Switch>
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
      </Switch>
    </Grid.Column>
    <Grid.Column width={4}>
      <SettignsNav />
    </Grid.Column>
  </Grid>
);

export default SettingsDashboard;
