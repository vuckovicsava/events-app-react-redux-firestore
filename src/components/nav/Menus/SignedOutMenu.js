import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({ signIn }) => (
  <Menu.Item position="right">
    <Button basic inverted content="Login" />
    <Button
      onClick={signIn}
      basic
      inverted
      content="Sign In"
      style={{ marginLeft: '0.5em' }}
    />
  </Menu.Item>
);

export default SignedOutMenu;
