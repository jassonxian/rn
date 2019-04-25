import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import './index.css';
import App from './App';
import About from './components/About'; // 导入About组件
import Inbox from './components/Inbox'; // 导入Inbox组件
import * as serviceWorker from './serviceWorker';

export default class Index extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          Honey
        </NavBar>
        <Router>
          <Route exact path="/" component={App} />
          <Route path="/About" component={About} />
          <Route path="/Inbox" component={Inbox} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
