import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

const App = ({ history }) => {
  const jumpTo = path => {
    history.push(path)
  };
  return (
    <WingBlank>
      <WhiteSpace size="lg" />
      <Button onClick={() => jumpTo('/')}>JumpTo APP</Button>
      <WhiteSpace size="lg" />
      <Button onClick={() => jumpTo('/about')}>JumpTo About</Button>
      <WhiteSpace size="lg" />
      <Button onClick={() => jumpTo('/inbox')}>JumpTo Inbox</Button>
    </WingBlank>
  );
}

export default withRouter(App);
