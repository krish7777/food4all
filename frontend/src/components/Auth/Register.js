import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./action";
import { bindActionCreators } from "redux";
import { Form, Input, Button, notification , Upload, message , Radio} from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, PhoneOutlined ,  UploadOutlined , CompassOutlined } from '@ant-design/icons';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


class Register extends Component {
    constructor() {
        super();
        this.state = {
            errors: {},
            value: 1,
        };
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: message
        });
    };
    onSubmit = values => {
        console.log(values)
        if (values.password != values.password2)
            this.openNotificationWithIcon('warning', 'Passwords are not matching')
        else
            this.props.registerUser(values, this.props.history);
    };

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
        
        const { errors , value } = this.state;

        return (
            <div style={{ paddingTop: "150px", height: "100vh", display: "flex", justifyContent: "center" }}>
                <Form
                    layout="vertical"
                    style={{
                        width: "500px"
                    }}
                    onFinish={this.onSubmit}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} />

                    </Form.Item>

                    <Form.Item
                        label="Contact"
                        name="contact"

                        rules={[{ required: true, message: 'Please input your contact!' }]}
                    >
                        <Input prefix={<PhoneOutlined className="site-form-item-icon" />} />

                    </Form.Item>

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
                    <Form.Item
                        label="Confirm Password"
                        name="password2"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
                    </Form.Item>

                    <Form.Item
                        label="Choose User type"
                        name="Usertype"

                        rules={[{ required: true, message: 'Please Choose user type' }]}
                    >
                        <Radio.Group onChange={this.onChange} value={value}>
                            <Radio style={radioStyle} value={1}>
                                Donor
                            </Radio>
                        <Radio style={radioStyle} value={4}>
                            Organisation
                            <br/>
                            {value === 4 
                            ? <div style={{ marginLeft: 25 }}> <Input placeholder="Location" style={{ width: 200}} />
                            <Button icon={<CompassOutlined />} /> <br/>
                            <Upload {...props} >
                            <p>Please upload Government issued certificate for your Organisation</p>
                            <Button icon={<UploadOutlined />}>Upload certificates</Button>
                            </Upload>
                            </div>
                            : null}
                            </Radio>
                        </Radio.Group>

                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        {" "}Or <Link to="/login">Login now!</Link>
                    </Form.Item>
                </Form>
            </div>
        )

    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.authReducer,
    errors: state.authReducer.errors
});

const mapDispatchToProps = dispatch => ({
    registerUser: bindActionCreators(registerUser, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Register));
