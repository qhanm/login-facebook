import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from "react-redux";
import {CHANGE_INFO_FACEBOOK} from "../redux/types/LoginType";
// https://stackoverflow.com/questions/27717555/implement-facebook-api-login-with-reactjs
// https://developers.facebook.com/docs/facebook-login/web
class Facebook extends Component {

    // state = {
    //     id: '',
    //     name: '',
    //     email: '',
    // }
    state = {
        id: this.props.info.id,
        name: this.props.info.name,
        email: this.props.info.email,
    }
    responseFacebookLogin = (response) => {
        try{
            let { email, name, id } = response;
            this.setState({
                name, id, email
            })
            this.props.dispatch({
                type: CHANGE_INFO_FACEBOOK,
                info: {
                    name, id, email
                }
            })
        }catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">LoginPage With facebook</h5>
                        <FacebookLogin
                            textButton="LoginPage"
                            appId="853218512282307"
                            fields="name,email,picture"
                            callback={ this.responseFacebookLogin }
                        />
                        <p className="card-text">Id: { this.state.id }</p>
                        <p className="card-text">Name: { this.state.name }</p>
                        <p className="card-text">Email: { this.state.email }</p>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        info: state.LoginReducer.infoFacebook
    }
}

export default connect(mapStateToProps, null)(Facebook);