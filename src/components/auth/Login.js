import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authAction';

 class Login extends Component {

     constructor(props){
         super(props);
         this.state = {
            username: '',
            password: ''
        }
       
     }
    
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();

        if(localStorage.getItem('aimsUser')!==null){
            localStorage.clear();
        }
        const { username, password } = this.state;
        this.props.login(username, password);

        // Clear State
        this.setState({
            username: '',
            password: ''
        });
    
    }
    

  render() {
    return (
      <React.Fragment>
        <div className="container">
            <form onSubmit={this.handleSubmit} name="loginForm">
                
                <div className="row">
                    <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={this.handleChange} autoComplete='off' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} autoComplete="off" />
                    </div>
                    </div>
                    <div className="btn-space col-sm-2"> 
                    <button type="submit" className="btn btn-success"><i className="fa fa-snipper"></i>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
      </React.Fragment>
    )
  }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {dispatch(login(username, password))}
    };
}
export default connect(null, mapDispatchToProps)(Login);
