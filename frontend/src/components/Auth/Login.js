import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./action";
import { bindActionCreators } from "redux";
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, HeartFilled } from '@ant-design/icons';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            errors: {},
            loading: false
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }


    onSubmit = async values => {
        this.setState({
            loading: true
        })
        await this.props.loginUser(values);
        this.setState({
            loading: false
        })
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div style={{ paddingTop: "200px", paddingLeft: "100px" ,height: "100vh", justifyContent: "center", float: "left" }}>
                    <span style={{fontSize: "70px", color: "#97033e", marginLeft: "32px"}}>
                    <HeartFilled />nofoodWasted
                    </span>
                    <p style={{fontSize: "16px"}}>
                        nofoodWasted is a community-led initiative to help bring about zero hunger. Join now!
                    </p>
                    
                </div>
                <div style={{ paddingTop: "200px", paddingRight: "100px" ,height: "100vh", justifyContent: "center", float: "right" }}>
                    <Form
                        layout="vertical"
                        style={{
                            width: "500px"
                        }}
                        onFinish={this.onSubmit}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            }, { required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} />

                        </Form.Item>


                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                        <Form.Item>
                            <Button loading={this.state.loading} type="primary" htmlType="submit">
                                Log in
                            </Button>
                            {" "}Or <Link to="/register">Register now!</Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.authReducer,
    errors: state.authReducer.errors
});

const mapDispatchToProps = dispatch => ({
    loginUser: bindActionCreators(loginUser, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
