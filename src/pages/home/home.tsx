import React, { FC, useState } from 'react';
import {
  Row,
  Skeleton,
  Col,
  List,
  Avatar,
  Switch,
  Typography,
  Space,
} from 'antd';
import { LikeOutlined, FieldTimeOutlined } from '@ant-design/icons';

import '@/css/home.less';

const { Paragraph, Title } = Typography;

const listData = [];
for (let i = 0; i < 50; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `${i} 如何从「穷人思维」过渡到「富人思维」？`,
    content: `偶然看到了有关的问题，感觉父母一辈人，包括身边很多人，包括自己在一些方面都有“穷人思维”的一面……如何改变？ （我觉得这不是说有钱了自然就会改变的）`,
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Home: FC = () => {
  const [loading, setLoading] = useState(true);

  const _timer = setTimeout(_timer => {
    setLoading(false);
    clearTimeout(_timer);
  }, 1000);

  const handleItemClick = item => {
    console.log(item);
  };

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
                pageSize: 8,
              }}
              dataSource={listData}
              renderItem={item => (
                <List.Item key={item.title}>
                  <Skeleton loading={loading} active avatar>
                    <Row
                      justify="space-around"
                      onClick={() => {
                        handleItemClick(item);
                      }}
                    >
                      <Col span={8}>
                        <div className="contentImg">
                          <img
                            src="https://www.google.com/logos/doodles/2020/thank-you-public-transportation-workers-6753651837108759-law.gif"
                            alt=""
                          />
                        </div>
                      </Col>
                      <Col span={15}>
                        <Row>
                          <Title level={4}>{item.title}</Title>
                        </Row>
                        <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                          {item.content}
                        </Paragraph>
                        <Row justify="space-between">
                          <IconText
                            icon={LikeOutlined}
                            text="156"
                            key="list-vertical-like-o"
                          />
                          <IconText
                            icon={FieldTimeOutlined}
                            text="2020-04-20"
                            key="list-vertical-message"
                          />
                        </Row>
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
};

export default Home;
