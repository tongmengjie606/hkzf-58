import React from 'react';
import Index from './Index/index.js';
import House from './House';
import News from './News';
import Profile from './Profile';
import NoMatch from '../NoMatch';
import { Route, Switch } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.scss';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
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
            <TabBar.Item
              title="首页"
              key="首页"
              icon={<span className="iconfont icon-ind"></span>}
              selectedIcon={<span className="iconfont icon-ind"></span>}
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab'
                });
                this.props.history.push('/home');
              }}
            ></TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-findHouse"></span>}
              selectedIcon={<span className="iconfont icon-findHouse"></span>}
              title="找房"
              key="找房"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab'
                });
                this.props.history.push('/home/house');
              }}
            ></TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-infom"></span>}
              selectedIcon={<span className="iconfont icon-infom"></span>}
              title="资讯"
              key="资讯"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab'
                });
                this.props.history.push('/home/news');
              }}
            ></TabBar.Item>
            <TabBar.Item
              icon={<span className="iconfont icon-my"></span>}
              selectedIcon={<span className="iconfont icon-my"></span>}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab'
                });
                this.props.history.push('/home/profile');
              }}
            ></TabBar.Item>
          </TabBar>
        </div>
      </div>
    );
  }
}

export default Home;
