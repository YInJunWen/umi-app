import React, { FC, useState } from 'react'
import { Affix, Row, Col, Menu, Button } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { Input } from 'antd';

import '@/css/header.less';


const { Search } = Input;

const Header: FC = () => {
  const [top, setTop] = useState(0);
  return (
    <Affix offsetTop={top}>
      <div className="header">
        <div className="container">

          <Row justify="space-around">
            <Col span={3}>
              <span className="header-logo">
                {/* <img src="https://www.google.com/logos/doodles/2020/thank-you-custodial-and-sanitation-workers-6753651837108756-law.gif" alt=""/> */}
                <img src="https://www.google.com/logos/doodles/2020/thank-you-public-transportation-workers-6753651837108759-law.gif" alt="" />
              </span>
            </Col>
            <Col span={11}>
              <Menu mode="horizontal" defaultSelectedKeys="smile1">
                <Menu.Item key="smile1" style={{ fontSize: '16px', fontWeight: 'blod' }}>
                  {/* <SmileTwoTone spin style={{ fontSize: '18px' }} /> */}
                  推荐
                </Menu.Item>
                <Menu.Item key="smile2" style={{ fontSize: '16px', fontWeight: 'blod' }}>
                  {/* <SmileTwoTone spin style={{ fontSize: '18px' }} /> */}
                  关注
                </Menu.Item>
                <Menu.Item key="smile3" style={{ fontSize: '16px', fontWeight: 'blod' }}>
                  {/* <SmileTwoTone spin style={{ fontSize: '18px' }} /> */}
                  热榜
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={1}></Col>
            <Col className="header-search" span={6}>
              <Search
                placeholder="搜索你感兴趣的内容"
                enterButton
                onSearch={value => console.log(value)} />
            </Col>
            <Col className="header-search" span={2}>
              <Button type="primary">提问</Button>
            </Col>
          </Row>
        </div>
      </div>
    </Affix>
  );
};

export default Header;