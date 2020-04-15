import React from 'react';
import Index from './Index/index.js';
import House from './House';
import News from './News';
import Profile from './Profile';
import NoMatch from '../NoMatch';
import { Route, Switch } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.scss';
const data = [
  { title: '首页', icon: 'iconfont icon-ind', selected: '/home' },
  { title: '找房', icon: 'iconfont icon-findHouse', selected: '/home/house' },
  { title: '资讯', icon: 'iconfont icon-infom', selected: '/home/news' },
  { title: '我的', icon: 'iconfont icon-my', selected: '/home/profile' }
];
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
  }
  render() {
    return (
      <div className="home">
        <Switch>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/house" component={House}></Route>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/profile" component={Profile}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
        <div className="tabBar">
          <TabBar
            unselectedTintColor="#333"
            tintColor="red"
            barTintColor="white"
          >
            {data.map(item => (
              <TabBar.Item
                title={item.title}
                key={item.title}
                icon={<span className={item.icon}></span>}
                selectedIcon={<span className={item.icon}></span>}
                selected={this.state.selectedTab === item.selected}
                onPress={() => {
                  this.setState({
                    selectedTab: item.selected
                  });
                  this.props.history.push(item.selected);
                  console.log(this.props);
                }}
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    );
  }
}

export default Home;
