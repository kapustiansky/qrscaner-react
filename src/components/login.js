import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import base64 from 'react-native-base64';

import './login.css';

class LoginPage extends Component  {

    state = {
      login: '',
      password: ''
    };

      onSubmit = (e) => {
        const baseEncode = base64.encode(this.state.login + ':' + this.state.password);
				localStorage.setItem('jwt', baseEncode);
        //e.preventDefault();
        this.setState({
          login: ''
        });
        this.setState({
          password: ''
        });
      };
    
      onLoginChange = (e) => {
        this.setState({
          login: e.target.value
        });
      };

      onPasswordChange = (e) => {
        this.setState({
          password: e.target.value
        });
      };
    
      render() {

        if (this.props.item === true) {
                return <Redirect to="/scan" />;
            }

        return (
			<div className="my-5 mx-md-5">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<div className="card">
							<div className="card-body">
								<form className="text-center" onSubmit={this.onSubmit}>
									<h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In</h3>
                                    <input type="text"
                                          required
                                           className="form-control mb-4"
                                           onChange={this.onLoginChange}
                                           placeholder="Login"
                                           value={this.state.login} />

                                    <input type="password"
                                            required
                                            onChange={this.onPasswordChange}
                                            className="form-control" 
                                            placeholder="Password"
                                            value={this.state.password} />
									<div className="text-center">
										<button type="submit"
											className="btn castom-btn btn-rounded my-4 waves-effect">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
      }
}

export default LoginPage;