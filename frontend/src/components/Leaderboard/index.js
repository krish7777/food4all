import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import moment from 'moment';
import sortBy from 'lodash/sortBy';

import 'antd/dist/antd.css';
import '../../index.css';
import { Modal, Menu, Checkbox, Layout,  Carousel , Table, Radio , Card, Button, Input, Space, Image, Form, Avatar } from 'antd';
import { HomeOutlined, PhoneOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { pendingDonation, changeFilters, getDonation, getOrganisation } from './actions';
import { setCurrentRoute } from '../Navbar/actions';
import LoadingScreen from '../LoadingScreen';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const columns = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    render: text => <p>{text}</p>
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "People Fed",
    dataIndex: "peoplefed",
    key: "peoplefed"
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating"
  }
];

const data = [
  {
    key: "1",
    rank: "1",
    name: "John Brown",
    rating: 32,
    peoplefed: 500,
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    rank: "2",
    name: "Jim Green",
    rating: 42,
    peoplefed: 300,
    tags: ["loser"]
  },
  {
    key: "3",
    rank: "3",
    name: "Joe Black",
    rating: 32,
    peoplefed: 100,
    tags: ["cool", "teacher"]
  }
];

class Leaderboard extends Component {
  state = {
    selectedMenuItem: '1',
    valueT: 1,
    valueF: 1,
    filters: []
  }


  onChangeT = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      valueT: e.target.value,
    });
  };

  onChangeF = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      valueF: e.target.value,
    });
  };

  render() {
    const { selectedMenuItem , valueT , valueF } = this.state;
    const { } = this.props

    // const plainOptions = [
    //   { label: 'People Fed', value: 'Peoplefed' },
    //   { label: 'Rating', value: 'rating' },
    // ];
    // const plainOptions1 = [
    //   { label: 'Donor', value: 'donor' },
    //   { label: 'Organsation', value: 'organisation' },
    // ];
    // const onChange = (checkedValues) => {
    //   this.setState({
    //     filters: [...checkedValues]
    //   })
    // }

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      marginLeft: '30px',
    };

    return (
        <Layout>
          <Sider width={280}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              marginTop: '64px',
            }} >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
              activeKey={selectedMenuItem}
              style={{ position: "relative" }}
            >
              <SubMenu key="1" title="Type" style={{ fontSize: '16px', height: "100% " }}>
                <div style={{ "padding": "auto" }}>
                <Radio.Group onChange={this.onChangeT} value={valueT}>
                  <Radio style={radioStyle} value={1}>
                  Donor
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                  Organsation
                  </Radio>
                </Radio.Group>
                </div>
              </SubMenu>
              <SubMenu key="2" title="Filter" style={{ fontSize: '16px', height: "100% " }}>
                <div style={{ "padding": "auto" }}>
                <Radio.Group onChange={this.onChangeF} value={valueF}>
                  <Radio style={radioStyle} value={1}>
                  People Fed
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                  Rating
                  </Radio>
                </Radio.Group>
                </div>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ marginLeft: '280px', marginTop: '64px' }}>
            <Content className="site-layout-background"
              style={{
                paddingLeft: 125,
                minHeight: 280,
              }}>
              <div style={{
                width: 700,
                marginTop: '20px'
              }}>
              <Carousel autoplay>
              <div> <h3 style={contentStyle}>1</h3> </div>
              <div> <h3 style={contentStyle}>2</h3> </div>
              <div> <h3 style={contentStyle}>3</h3> </div>
              <div> <h3 style={contentStyle}>4</h3> </div>
              </Carousel>
              </div>

              <div style={{
                width: 700,
              }}
              >
              <Table columns={columns} dataSource={data} />
              </div>

            </Content>
            <Sider width={300} style={{ padding: "25px" }}>
              

            </Sider>

          </Layout >
        </Layout >
    )
  }
}

const mapStatetoProps = state => {
  return {
    currentfilter: state.LeaderboardReducer.currentfilter,
  };

};
const mapDispatchToProps = (dispatch, getState) => ({
  changeFilters: bindActionCreators(changeFilters, dispatch),
})

export default connect(mapStatetoProps, mapDispatchToProps)(Leaderboard);