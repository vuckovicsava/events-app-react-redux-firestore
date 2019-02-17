import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { openModal } from '../../../store/actions/modalActions';
import { logout } from '../../../store/actions/authActions';
import SignedInMenu from '../Menus/SIgnedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/');
  };

  render() {
    const { auth } = this.props;
    const authenticated = auth.currentUser;

    return (
      <div>
        <Menu>
          <Container>
            <Menu.Item as={Link} to="/" header>
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="Events" />
            {authenticated && (
              <>
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
              </>
            )}

            {authenticated ? (
              <SignedInMenu
                currentUser={auth.currentUser}
                signOut={this.handleSignOut}
              />
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

const mapStateToProps = ({ auth }) => ({ auth });

export default withRouter(
  connect(
    mapStateToProps,
    { openModal, logout }
  )(NavBar)
);
