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
                        <FormControl inputRef={mail => this.refMail = mail} type="email" placeholder="Email" />
                        <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
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
            const mail = this.refMail.value;
            const password = this.refPass.value;
            loginUser(mail,password);
          }
        }
export default Login;
