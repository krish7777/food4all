import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { Layout, Menu, Checkbox, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { setCurrentRoute } from '../Navbar/actions';
import { changeFilters, getLeftDetails } from './action'


const { Sider } = Layout;
const { SubMenu } = Menu;


class LeftSidePanel extends Component {

    componentDidMount() {
        this.props.getLeftDetails();
    }
    render() {
        const { following, followers, achievements, donations, name, avatar } = this.props.profileDetails
        const plainOptions = [
            { label: 'Donations', value: 'Donations' },
            { label: 'Events', value: 'Events' },
            { label: 'Posts', value: 'Posts' },
        ];
        const onChange = (checkedValues) => {
            this.props.changeFilters(checkedValues)
        }

        const followerList = followers.length ? (
            followers.map(follower => {
                return (
                    <Link onClick={() => this.props.setCurrentRoute('profile')} to={`/profile/${follower._id}`}>
                        <Menu.Item key={follower._id} style={{ paddingLeft: "36px", marginBottom: "10px" }}>
                            <Avatar size={25}
                                src={follower.avatar}
                                style={{
                                    backgroundColor: '#87d068',
                                    marginRight: "4px"
                                }}
                            //-------------Upload profile pic here---------------
                            // icon={<UserOutlined />}
                            />
                            {follower.name}</Menu.Item>
                    </Link>

                )
            })

        ) : (
                <Menu.Item key='1' > No followers yet! </Menu.Item>
            )

        const followingList = following.length ? (
            following.map(follower => {
                return (
                    <Link onClick={() => this.props.setCurrentRoute('profile')} to={`/profile/${follower._id}`}>
                        <Menu.Item key={follower._id} style={{ paddingLeft: "36px", marginBottom: "10px" }}>
                            <Avatar size={25}
                                src={follower.avatar}
                                style={{
                                    backgroundColor: '#87d068',
                                    marginRight: "4px"
                                }}
                            //-------------Upload profile pic here---------------
                            // icon={<UserOutlined />}
                            />
                            {follower.name}</Menu.Item>
                    </Link>

                )
            })

        ) : (
                <Menu.Item key='1' > You are not following anyone! </Menu.Item>
            )

        const donationList = donations?.length ? (
            donations.map(donation => {
                console.log('inside the donation list', donation)
                return (
                    <Menu.Item key={donation._id}>{donation.title}</Menu.Item>
                )
            })

        ) : (
                <Menu.Item key="1"> No donations yet! </Menu.Item>
            )


        const achievementList = achievements?.length ? (
            achievements.map(achievement => {
                return (
                    <Menu.Item key={achievement.id}>
                        {achievement.title}</Menu.Item>
                )
            }))
            : (
                <Menu.Item key="1"> No achievements yet! </Menu.Item>
            )



        return (

            <Sider width={280} className="site-layout-background"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    marginTop: '40px',
                }}
            >
                <Menu
                    mode="inline"
                    defaultOpenKeys={['sub5']}
                    style={{ height: '100%', borderRight: 0, paddingTop: '40px' }}
                >

                    <Menu.Item key="Sub1" style={{ fontSize: '16px', marginBlock: '10px' }}>
                        <Link to={`/profile/${this.props.profileDetails._id}`}>
                        </Link>
                        <Space>
                            <Avatar size={36}
                                src={avatar}
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                //-------------Upload profile pic here---------------
                                icon={<UserOutlined />}
                            />
                            {name}
                        </Space>
                    </Menu.Item>

                    <SubMenu key="sub2" title="Followers" style={{ fontSize: '16px' }}>
                        {followerList}
                    </SubMenu>

                    <SubMenu key="sub3" title="Following" style={{ fontSize: '16px' }}>
                        {followingList}
                    </SubMenu>

                    <SubMenu key="sub4" title="Recent Donations" style={{ fontSize: '16px' }}>
                        {donationList}
                    </SubMenu>
                </Menu>
            </Sider>


        )
    }
}
const mapStatetoProps = state => {
    return {
        profileDetails: state.LeftSidePanelReducer.profileDetails,
    };

};
const mapDispatchToProps = dispatch => ({
    changeFilters: bindActionCreators(changeFilters, dispatch),
    getLeftDetails: bindActionCreators(getLeftDetails, dispatch),
    setCurrentRoute: bindActionCreators(setCurrentRoute, dispatch)
})

export default connect(mapStatetoProps, mapDispatchToProps)(LeftSidePanel);

