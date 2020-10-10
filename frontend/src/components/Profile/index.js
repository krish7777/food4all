import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {   Layout, Menu , Image , Input , Card , Tabs , Timeline , Checkbox , List , Avatar , Button  } from 'antd';
import { AudioOutlined , LogoutOutlined , CommentOutlined , HomeOutlined , BellOutlined , TrophyOutlined , UsergroupDeleteOutlined , BulbOutlined , EditOutlined, EllipsisOutlined, LikeOutlined , MessageOutlined , GiftOutlined , ShareAltOutlined ,   ClockCircleOutlined ,  UserOutlined} from '@ant-design/icons';

const { Search } = Input;
const { SubMenu } = Menu;

const { TabPane } = Tabs; 

function callback(key) {
  console.log(key);
}

const data = [
  {
    title: 'User 1',
  },
  {
    title: 'User 2',
  },
  {
    title: 'User 3',
  },
  {
    title: 'User 4',
  },
];

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const { Header, Content , Sider } = Layout;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Donations" key="1">
      <Timeline mode="alternate">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>
    </TabPane>
    <TabPane tab="Posts" key="2">
      <Card title="User Name" style={{ width: 1000 }} 
      actions={[
      <LikeOutlined key="Like" />,
      <ShareAltOutlined key="share" />,
      <CommentOutlined key="Comment" />,
      <GiftOutlined key="Award" />,
      ]} >
      <p>Card content</p>
      </Card>
      <br />    
      <Card title="User Name" style={{ width: 1000 }} 
       actions={[
      <LikeOutlined key="Like" />,
      <ShareAltOutlined key="share" />,
      <CommentOutlined key="Comment" />,
      <GiftOutlined key="Award" />,
      ]} >
      <p>Card content</p>
      </Card>
      <br /> 
      <Card title="User Name" style={{ width: 1000 }}
        actions={[
      <LikeOutlined key="Like" />,
      <ShareAltOutlined key="share" />,
      <CommentOutlined key="Comment" />,
      <GiftOutlined key="Award" />,
      ]}
      >
      <p>Card content</p>
      </Card>
    </TabPane>
    <TabPane tab="Acheivements" key="3">
      Content of Acheivements
    </TabPane>
  </Tabs>
);

ReactDOM.render(
  <Layout className="layout">
  <Header> 
  <div className="logo" />
  <Menu theme="dark" mode="horizontal" >
        <Button type="dashed" danger>
          Donate Now
        </Button>
        <Menu.Item key="1" icon={ <HomeOutlined /> } >Home</Menu.Item>
        <Menu.Item key="2" icon={<BulbOutlined />}>Discover</Menu.Item>
        <Menu.Item key="3" icon={<TrophyOutlined />} >LeaderBoard</Menu.Item>
        <Menu.Item key="4" icon={<UsergroupDeleteOutlined />} >community</Menu.Item>
        <Menu.Item key="5" icon={<BellOutlined /> }>Notifications</Menu.Item>
        <Menu.Item key="6" icon={<MessageOutlined /> } >Messages</Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />} >Profile</Menu.Item>
        <Menu.Item key="8" icon={<LogoutOutlined />} >Logout</Menu.Item>
        <Search
                placeholder="Search"
                onSearch={value => console.log(value)}
                style={{ width: 250 }}/>
      </Menu>
    </Header>
    <Layout>
      <Sider width={250} theme="light" className="site-layout-background">
    <List
    itemLayout="horizontal"
    dataSource={data}
    header={
      <div>
        <b>Suggested pages</b>
      </div>
    }
    renderItem={item => (
          <List.Item>
          <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://www.google.com/">{item.title}</a>}
          description="brief description"
          />
         </List.Item>
        )}
      />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
      <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
      <div>   
      <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <b>User Name</b>
      </div>  
      <br />
      <div>  
      <b>Brief Description about user</b>
      <br />
      Information about his contact Number and address   
      </div>
      <div>
      <Button type="link">
      Follower xx
      </Button>
      <Button type="link">
      Following xx
      </Button>
      </div> 
      <div>
       <p>User has fed xx no of people since last month.</p>
      </div> 
      
      <Demo />
          
        </Content>
      <Sider width={250} theme="light" className="site-layout-background">
      <div>
      <br />
      <br />  
      <Button type="primary" >
      Button A
      </Button>
      <br />
      <br />  
      <Button type="primary">
      Button B
      </Button>
      <br />
      <br />  
      <Button type="primary">
      Button C
      </Button>
      </div>
      </Sider>
  </Layout>
  </Layout>
  </Layout>,
  document.getElementById('container'),
);