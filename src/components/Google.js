import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from "react-redux";
import {CHANGE_INFO_GOOGLE} from "../redux/types/LoginType";

class Google extends Component {

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

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.info.id!==prevState.id){
            return {
                id: nextProps.info.id,
                name: nextProps.info.name,
                email: nextProps.info.email,
            }
        }
        else return null;
    }

    responseGoogleLogin = (response) => {
        try{
            let { googleId, Ys } = response;
            let { Ve, It } = Ys;

            // this.setState({
            //     id: googleId,
            //     name: Ve,
            //     email: It,
            // })

            this.props.dispatch({
                type: CHANGE_INFO_GOOGLE,
                info: {
                    id: googleId,
                    name: Ve,
                    email: It,
                }
            })
        }catch (err){
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">LoginPage With google</h5>
                        <GoogleLogin
                            clientId="1086061091999-kot0u2jel4cosha3tishtfl0h1qnjkbl.apps.googleusercontent.com"
                            buttonText="LoginPage google"
                            onSuccess={ this.responseGoogleLogin }
                            onFailure={ this.responseGoogleLogin }
                            //cookiePolicy={'single_host_origin'}
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
        info: state.LoginReducer.infoGoogle
    }
}
export default connect(mapStateToProps, null)(Google);