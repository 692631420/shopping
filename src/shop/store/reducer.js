let reducer = (state = [], action) => {
  // list提交添加商品
  if (action.type == "add-shop") {
    let newData = [...state];
    // 当我点击不同的商品的时候才需要添加到购物车
    let hasShop = newData.find(item => item.id == action.value.id);
    if (hasShop) {
      action.value.num++;
    } else {
      newData.push(action.value);
    }

    return newData;
  }

  if (action.type == "num_input") {
    let newData = [...state];
    let hasShop = newData.find(item => item.id == action.value.id);
    hasShop.num = action.value;

    return newData;
  }

  return state;
};

export default reducer;
