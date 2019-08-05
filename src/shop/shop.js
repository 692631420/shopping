import React, { Component } from "react";
import { Table, InputNumber, Button } from "element-react";
import store from "./store/store.js";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: store.getState(),
      columns: [
        {
          label: "名称",
          prop: "goods_name"
        },
        {
          label: "图片",
          prop: "url",
          render: function(data) {
            return (
              <span>
                <img
                  src={data.url}
                  style={{ width: 100, height: 120, margin: "10px 0 12px" }}
                />
              </span>
            );
          }
        },
        {
          label: "数量",
          prop: "num",
          render: function(data) {
            return (
              <InputNumber
                size="small"
                defaultValue={data.num}
                value={data.num}
                onChange={val => {
                  this.changeFn(val, data.id);
                }}
              />
            );
          }
        },
        {
          label: "单价",
          prop: "price"
        },
        {
          label: "总价",
          prop: "total_price"
        },
        {
          label: "操作",
          prop: "id",
          render(data) {
            return (
              <Button type="danger" size="small">
                删除
              </Button>
            );
          }
        }
      ]
    };

    // 写一个事件订阅，用来操作单价
    this.unsubscribe = store.subscribe(this.subscribeFn);
  }

  subscribeFn = () => {
    console.log(111);
    this.setState({
      data: store.getState()
    });
    console.log(this.state.data);
  };

  changeFn(val, id) {
    store.dispatch({
      type: "num_input",
      value: val,
      id
    });
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  };
  render() {
    return (
      <div className="box">
        <div id="shop">
          <Table
            style={{ width: "100%" }}
            columns={this.state.columns}
            data={this.state.data}
            stripe={true}
          />

          <div className="bottom">
            总价：￥<span>307</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Shop;
