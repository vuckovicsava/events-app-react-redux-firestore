import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { openModal } from '../../../store/actions/modalActions';
import SignedInMenu from '../Menus/SIgnedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });

    this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;

    return (
      <div>
        <Menu>
          <Container>
            <Menu.Item as={Link} to="/" header>
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            <Menu.Item as={NavLink} to="/people" name="People" />
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
            {authenticated ? (
              <SignedInMenu signOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu
                signIn={this.handleSignIn}
                register={this.handleRegister}
              />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { openModal }
  )(NavBar)
);
