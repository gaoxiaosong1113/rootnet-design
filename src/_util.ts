// 获取元素到屏幕左边的距离
export const getOffsetLeft = function (obj: any): any {
  let tmp = obj.offsetLeft;
  let node = obj.offsetParent;
  while (node != null) {
    tmp += node.offsetLeft;
    node = node.offsetParent;
  }
  return tmp;
};

// 获取元素到屏幕顶端的距离
export const getOffsetTop = function (obj: any): any {
  let tmp = obj.offsetTop;
  let node = obj.offsetParent;
  while (node != null) {
    tmp += node.offsetTop;
    node = node.offsetParent;
  }
  return tmp;
};

// 找到所有选中 - 适用于tree
export function loopData(data: any, keys: any, rowKey: any) {
  let findData: any = [];
  data.forEach((item: any) => {
    if (keys.indexOf(item[rowKey]) != -1) {
      findData.push(item);
    }
    if (item.children) {
      findData = findData.concat(loopData(item.children, keys, rowKey));
    }
  });
  return findData;
}

// 找到当前所有children的选中项 - 适用于tree
export function checkAllData(data: any, rowKey: any) {
  let findData: any = [];
  data.forEach((item: any) => {
    findData.push(item[rowKey]);
    if (item.children) {
      findData = findData.concat(checkAllData(item.children, rowKey));
    }
  });
  return findData;
}

// 格式化所有的数据，处理依赖逻辑
export function farmatSelectedRowKeys(
  formatData: any,
  selectedRowKeys: any,
  rowKey: any,
) {
  // function loop(data: any, keys: any, rowKey: any) {
  //   data.map((item: any) => {
  //     if (item.children) {
  //       let checkData = loopData(item.children, keys, rowKey);
  //       let allData = checkAllData(item.children, rowKey);
  //       if (checkData.length === allData.length) {
  //         onchecked(keys, item[rowKey]);
  //       } else {
  //         unchecked(keys, item[rowKey]);
  //       }
  //       farmatSelectedRowKeys(item.children, keys, rowKey);
  //     }
  //   });
  // }
  // loop(formatData, selectedRowKeys, rowKey);
  // loop(formatData, selectedRowKeys, rowKey);

  // let data = [];

  let data2: any = [];
  function loop(data: any, keys: any, rowKey: any) {
    data.map((item: any) => {
      if (item.children) {
        data2.push(item);
        loop(item.children, keys, rowKey);
      }
    });
  }
  // loop(formatData, selectedRowKeys, rowKey);
  loop(formatData, selectedRowKeys, rowKey);

  console.log(data2);

  function loop2(data: any, keys: any, rowKey: any) {
    data.map((item: any) => {
      if (item.children) {
        let checkData = loopData(item.children, keys, rowKey);
        let allData = checkAllData(item.children, rowKey);
        if (checkData.length === allData.length) {
          onchecked(keys, item[rowKey]);
        } else {
          unchecked(keys, item[rowKey]);
        }
        loop2(item.children, keys, rowKey);
      }
    });
  }

  loop2(data2.reverse(), selectedRowKeys, rowKey);
}

// 删除
export function unchecked(selectedRowKeys: any, key: any) {
  let index = selectedRowKeys.indexOf(key);
  if (index > -1) {
    selectedRowKeys.splice(index, 1);
  }
}

// 添加
export function onchecked(selectedRowKeys: any, key: any) {
  let index = selectedRowKeys.indexOf(key);
  if (index === -1) {
    selectedRowKeys.push(key);
  }
}
