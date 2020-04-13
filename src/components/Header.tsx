import React, { FC, useState } from 'react'
import { Affix } from 'antd';

const Header: FC = () => {
  const [top, setTop] = useState(0);
  return (
    <Affix offsetTop={top}>
      <div className="Header">
        123123123123123
      </div>
    </Affix>
  );
};

export default Header;