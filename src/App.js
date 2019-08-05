import React, { Component } from "react";
import "./app.css";
// 导入element-react框架跟样式
import { Button, Badge } from "element-react";
import "element-theme-default";

// 路由
import { HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";

// 导入组件
import List from "./shop/list.js";
import Shop from "./shop/shop.js";

// 导入redux数据
import store from "./shop/store/store.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };

    // 订阅list页面的数据的变化
    this.unsubscribe = store.subscribe(this.subscribeFn);
  }

  subscribeFn = () => {
    this.setState({
      // 订阅num数据的变化
      num: this.numFn()
    });
  };

  numFn = () => {
    let numArr = store.getState();
    let tap = 0;
    numArr.map(item => {
      tap += item.num;
    });

    return tap;
  };

  render() {
    return (
      <div>
        {/* banner */}
        <div className="top mp17">
          <img
            src="/images/banner.png
          "
          />
        </div>

        {/* nav */}
        <div className="nav">
          <Button type="success" className="list">
            <a href="#/">商品列表</a>
          </Button>
          <Badge value={this.state.num}>
            <Button type="success" className="shop">
              <a href="#/shop">购物车</a>
            </Button>
          </Badge>
        </div>

        {/* 路由 */}
        <HashRouter>
          <Route exact path="/" component={List} />
          <Route path="/shop" component={Shop} />
        </HashRouter>
      </div>
    );
  }
}

export default Home;
