/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner3 from './Banner3';
import Nav3 from './Nav3';
import Banner5 from './Banner5';
import Feature8 from './Feature8';
import Teams0 from './Teams0';
import Footer0 from './Footer0';
import Point from './Point';
import {
  Banner30DataSource,
  Nav30DataSource,
  Banner50DataSource,
  Banner52DataSource,
  Banner51DataSource,
  Banner53DataSource,
  Banner54DataSource,
  Feature80DataSource,
  Teams00DataSource,
  Footer00DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_2"
        key="Banner5_2"
        dataSource={Banner52DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_1"
        key="Banner5_1"
        dataSource={Banner51DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_3"
        key="Banner5_3"
        dataSource={Banner53DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner5
        id="Banner5_4"
        key="Banner5_4"
        dataSource={Banner54DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />, // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point
        key="list"
        data={[
          'Banner3_0',
          'Nav3_0',
          'Banner5_0',
          'Banner5_2',
          'Banner5_1',
          'Banner5_3',
          'Banner5_4',
          'Feature8_0',
          'Teams0_0',
          'Footer0_0',
        ]}
        stroke="point-stroke"
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
