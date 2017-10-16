import React from 'react';
import { Col, Panel, Input,FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

  class Login extends React.Component {
      render() {
        const {error} = this.props;
          return (
            <Col xs={12} sm={6} smOffset={3}>
              <Panel>
                <h1>Login</h1>
                  {error ? <p style={{color: 'red'}}>{error}</p> : null}
                    <form>
                      <FormGroup>
                        <FormControl inputRef={mail => this.refName = mail} type="email" placeholder="Email" />
                        <FormControl inputRef={password => this.refName = password} type="password" placeholder="Password" />
                        <Button onClick={this.login.bind(this)}
                        bsStyle="primary" type="submit" >Login </Button>
                      </FormGroup>
                    </form>
                  </Panel>
                </Col>
              )
            }

        login(e) {
            e.preventDefault();
            const {loginUser} = this.props;
            const mail = this.refName.value;
            loginUser(mail);
              this.refName.value = '';
          }
        }
export default Login;
