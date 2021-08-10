import { useEffect, useState } from 'react';

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
  /*
   * 由于直接递归处理选中逻辑会有不同步的问题，所以先抽取所有带children的项，然后反转后重新format
   * 相当于从底层往上遍历
   */

  let loopChildrenData: any = [];
  function loopChildren(data: any, keys: any, rowKey: any) {
    data.map((item: any) => {
      if (item.children) {
        loopChildrenData.push(item);
        loopChildren(item.children, keys, rowKey);
      }
    });
  }

  loopChildren(formatData, selectedRowKeys, rowKey);

  function loopCheck(data: any, keys: any, rowKey: any) {
    data.map((item: any) => {
      if (item.children) {
        let checkData = loopData(item.children, keys, rowKey);
        let allData = checkAllData(item.children, rowKey);
        if (checkData.length === allData.length) {
          onchecked(keys, item[rowKey]);
        } else {
          unchecked(keys, item[rowKey]);
        }
        loopCheck(item.children, keys, rowKey);
      }
    });
  }

  loopCheck(loopChildrenData.reverse(), selectedRowKeys, rowKey);
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

// 铺平数组
export function pavingArray(data: Array<any>) {
  let newData: Array<any> = [];
  data.map((item) => {
    if (item.children) {
      newData = newData.concat(pavingArray(item.children));
    }
    newData.push(item);
  });
  return newData;
}

// 查找数据
export function findKey(data: Array<any>, key: any, name: any = 'value') {
  let val: any = null;
  function find(loopData: any) {
    loopData.map((item: any) => {
      if (item.children) {
        find(item.children);
      }
      if (item[name] === key) {
        val = item;
      }
    });
  }
  find(data);
  return val;
}

export function useGetElementParent(element: any) {
  const [parent, setParent] = useState([] as any);

  useEffect(() => {
    if (element) {
      let node = element;
      let list = [];
      while (node && node.parentElement) {
        node = node.parentElement;
        list.push(node);
      }
      list.push(document);
      setParent(list);
    }
  }, [element]);

  return parent;
}

// uuid
export const uuid = () => {
  var s = [] as any;
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  var uuid = s.join('');
  return uuid;
};
