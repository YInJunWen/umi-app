import React, { useState } from 'react';
import { Row, Skeleton, Col, List, Avatar, Switch, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import '@/css/home.less';

const { Paragraph } = Typography;

const listData = [];
for (let i = 0; i < 50; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `我为什么这么帅 ${i}`,
    avatar: '',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series oWe supply a series oWe supply a series of design principles, practicalWe supply a series of design principles, practicalWe supply a series of design principles, practicalWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

class Home extends React.Component {
  state = {
    loading: true,
  };

  _timer = setTimeout(_timer => {
    this.setState({
      loading: false,
    });
    clearTimeout(_timer);
  }, 1000);

  render() {
    const { loading } = this.state;

    return (
      <div className="container">
        <div className="home">
          <Row justify="space-around">
            <Col span={24} className="bgColorFFF">
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 2,
                }}
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={
                      !loading && [
                        <IconText
                          icon={StarOutlined}
                          text="156"
                          key="list-vertical-star-o"
                        />,
                        <IconText
                          icon={LikeOutlined}
                          text="156"
                          key="list-vertical-like-o"
                        />,
                        <IconText
                          icon={MessageOutlined}
                          text="2"
                          key="list-vertical-message"
                        />,
                      ]
                    }
                    // extra={
                    //   !loading && (
                    //     <img
                    //       width={272}
                    //       alt="logo"
                    //       src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    //     />
                    //   )
                    // }
                  >
                    <Skeleton loading={loading} active avatar>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        // description={item.description}
                      />
                      <Row justify="space-around">
                        <Col span={8}>
                          <div className="contentImg">
                            <img
                              src="https://www.google.com/logos/doodles/2020/thank-you-public-transportation-workers-6753651837108759-law.gif"
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col span={15}>
                          <Paragraph ellipsis={{ rows: 6, expandable: false }}>
                            {item.content}
                          </Paragraph>
                        </Col>
                      </Row>
                    </Skeleton>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
