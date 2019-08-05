import React, { Component } from "react";
// 导入框架组件
import { Breadcrumb, Layout, Card, Button } from "element-react";

// 导入redux中的仓库
import store from "./store/store.js";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aGoods_list: [
        {
          id: 1001,
          goods_name: "男式黑白格子衬衫",
          url: "/images/clothes01.jpg",
          price: 169,
          num: 1
        },
        {
          id: 1002,
          goods_name: "纯棉印花宽松长袖T恤",
          url: "/images/clothes02.jpg",
          price: 69,
          num: 1
        },
        {
          id: 1003,
          goods_name: "男士连帽夹克2019春季新款",
          url: "/images/clothes03.jpg",
          price: 249,
          num: 1
        },
        {
          id: 1004,
          goods_name: "2019夏装新品时尚百搭",
          url: "/images/clothes04.jpg",
          price: 49,
          num: 1
        }
      ]
    };
  }

  //   商品加入购物车
  addShopFn = item => {
    // console.log(item);
    // 提交数据到仓库
    store.dispatch({
      type: "add-shop",
      value: item
    });
  };

  render() {
    let { aGoods_list } = this.state;

    return (
      <div id="list">
        {/* 面包屑导航 */}
        <Breadcrumb separator="/">
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>商品列表</Breadcrumb.Item>
        </Breadcrumb>

        {/* 商品展示 */}
        <Layout.Row gutter="20">
          {aGoods_list.map((item, index) => (
            <Layout.Col span="6" key={index}>
              <div className="grid-content bg-purple" />
              <Card bodyStyle={{ padding: 0 }}>
                <img src={item.url} className="image" />
                <div className="dec">
                  <div style={{ padding: "12px 0px", fontWeight: "bold" }}>
                    <span id="sheluehao">{item.goods_name}</span>
                  </div>
                  <div className="price">
                    ￥<span>{item.price}</span>
                  </div>
                  <Button
                    type="danger"
                    size="small"
                    onClick={() => {
                      this.addShopFn(item);
                    }}
                  >
                    加入购物车
                  </Button>
                </div>
              </Card>
            </Layout.Col>
          ))}
        </Layout.Row>
      </div>
    );
  }
}

export default List;
