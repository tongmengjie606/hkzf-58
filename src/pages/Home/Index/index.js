import React from 'react';
import axios from 'axios';
import nav1 from '../../../assets/images/nav-1.png';
import nav2 from '../../../assets/images/nav-2.png';
import nav3 from '../../../assets/images/nav-3.png';
import nav4 from '../../../assets/images/nav-4.png';
import { Carousel, Flex } from 'antd-mobile';
import './index.scss';
class Index extends React.Component {
  state = {
    data: [],
    imgHeight: (212 / 375) * window.innerWidth
  };
  componentDidMount() {
    this.getLeft();
  }
  async getLeft() {
    const res = await axios.get('http://localhost:8080/home/swiper');
    const { status, body } = res.data;
    if (status == 200) {
      this.setState({
        data: body
      });
    }
  }
  //图片上来就循环
  Carousel() {
    if (this.state.data.length > 0) {
      return (
        <Carousel autoplay infinite>
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight
              }}
            >
              <img
                src={'http://localhost:8080' + val.imgSrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="index">
        <div className="Carousel" style={{ height: this.state.imgHeight }}>
          {this.Carousel()}
        </div>
        <div className="nav">
          <Flex>
            <Flex.Item>
              <img src={nav1} alt="" />
              <p>整租</p>
            </Flex.Item>
            <Flex.Item>
              <img src={nav2} alt="" />
              <p>合租</p>
            </Flex.Item>
            <Flex.Item>
              <img src={nav3} alt="" />
              <p>地图找房</p>
            </Flex.Item>
            <Flex.Item>
              {' '}
              <img src={nav4} alt="" />
              <p>去出租</p>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    );
  }
}

export default Index;
