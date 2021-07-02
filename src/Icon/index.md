---
nav:
  title: 组件
  path: /components
group:
  title: Icon 图标
  order: 15
---

## Icon 图标

示例:

```tsx
import React from 'react';
import { Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Icon size={36} name="mima1" />
          密码
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhanghao1" />
          账号
        </Col>
        <Col span={6}>
          <Icon size={36} name="wenbenye" />
          文本页
        </Col>
        <Col span={6}>
          <Icon size={36} name="seban" />
          色板
        </Col>
        <Col span={6}>
          <Icon size={36} name="bianji2" />
          编辑
        </Col>
        <Col span={6}>
          <Icon size={36} name="weixincaidan" />
          微信菜单
        </Col>
        <Col span={6}>
          <Icon size={36} name="weixinguanwangpeizhi" />
          微信官网配置
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiahao" />
          加号
        </Col>
        <Col span={6}>
          <Icon size={36} name="jianhao" />
          减号
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhongxinjiazai" />
          重新加载
        </Col>
        <Col span={6}>
          <Icon size={36} name="Rootnet" />
          Rootnet
        </Col>
        <Col span={6}>
          <Icon size={36} name="baocun" />
          保存
        </Col>
        <Col span={6}>
          <Icon size={36} name="sousuo" />
          搜索
        </Col>
        <Col span={6}>
          <Icon size={36} name="shezhi" />
          设置
        </Col>
        <Col span={6}>
          <Icon size={36} name="shijian" />
          时间
        </Col>
        <Col span={6}>
          <Icon size={36} name="banxing" />
          半星
        </Col>
        <Col span={6}>
          <Icon size={36} name="pingxing" />
          评星
        </Col>
        <Col span={6}>
          <Icon size={36} name="dakaishengyin" />
          打开声音
        </Col>
        <Col span={6}>
          <Icon size={36} name="xinjianwenjian" />
          新建文件
        </Col>
        <Col span={6}>
          <Icon size={36} name="guanbishengyin" />
          关闭声音
        </Col>
        <Col span={6}>
          <Icon size={36} name="shiyongzhe" />
          使用者
        </Col>
        <Col span={6}>
          <Icon size={36} name="qiehuanbiaoge" />
          切换表格
        </Col>
        <Col span={6}>
          <Icon size={36} name="qiehuantubiao" />
          切换图表
        </Col>
        <Col span={6}>
          <Icon size={36} name="bianji" />
          编辑
        </Col>
        <Col span={6}>
          <Icon size={36} name="lianjie" />
          链接
        </Col>
        <Col span={6}>
          <Icon size={36} name="rili" />
          日历
        </Col>
        <Col span={6}>
          <Icon size={36} name="heji" />
          合集
        </Col>
        <Col span={6}>
          <Icon size={36} name="bukejian" />
          不可见
        </Col>
        <Col span={6}>
          <Icon size={36} name="xianshi" />
          显示
        </Col>
        <Col span={6}>
          <Icon size={36} name="chenggong" />
          成功
        </Col>
        <Col span={6}>
          <Icon size={36} name="shibai" />
          失败
        </Col>
        <Col span={6}>
          <Icon size={36} name="tixing" />
          提醒
        </Col>
        <Col span={6}>
          <Icon size={36} name="jinggao" />
          警告
        </Col>
        <Col span={6}>
          <Icon size={36} name="xunwen" />
          询问
        </Col>
        <Col span={6}>
          <Icon size={36} name="biaogeshouqi1" />
          表格收起
        </Col>
        <Col span={6}>
          <Icon size={36} name="biaogezhankai1" />
          表格展开
        </Col>
        <Col span={6}>
          <Icon size={36} name="tianjia1" />
          添加
        </Col>
        <Col span={6}>
          <Icon size={36} name="jianqu1" />
          减去
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhengque1" />
          正确
        </Col>
        <Col span={6}>
          <Icon size={36} name="cuowu1" />
          错误
        </Col>
        <Col span={6}>
          <Icon size={36} name="wenhao1" />
          问号
        </Col>
        <Col span={6}>
          <Icon size={36} name="tanhao1" />
          叹号
        </Col>
        <Col span={6}>
          <Icon size={36} name="shibai2" />
          失败
        </Col>
        <Col span={6}>
          <Icon size={36} name="chenggong2" />
          成功
        </Col>
        <Col span={6}>
          <Icon size={36} name="tixing1" />
          提醒
        </Col>
        <Col span={6}>
          <Icon size={36} name="xunwen2" />
          询问
        </Col>
        <Col span={6}>
          <Icon size={36} name="jinggao2" />
          警告
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubleright" />
          double right
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubleleft" />
          double left
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubledown" />
          double down
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubleup" />
          double up
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzeshouqi" />
          选择收起
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzezuo" />
          选择左
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzeyou" />
          选择右
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzexiala" />
          选择下拉
        </Col>
        <Col span={6}>
          <Icon size={36} name="xia" />下
        </Col>
        <Col span={6}>
          <Icon size={36} name="shang" />上
        </Col>
        <Col span={6}>
          <Icon size={36} name="you" />右
        </Col>
        <Col span={6}>
          <Icon size={36} name="zuo" />左
        </Col>
        <Col span={6}>
          <Icon size={36} name="fabu" />
          发布
        </Col>
        <Col span={6}>
          <Icon size={36} name="chexiaofabu" />
          撤销发布
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhuijia1" />
          追加
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiangxu" />
          降序
        </Col>
        <Col span={6}>
          <Icon size={36} name="shengxu" />
          升序
        </Col>
        <Col span={6}>
          <Icon size={36} name="paixu" />
          排序
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiaohuan" />
          交换
        </Col>
        <Col span={6}>
          <Icon size={36} name="heyue" />
          合约
        </Col>
        <Col span={6}>
          <Icon size={36} name="fangda" />
          放大
        </Col>
        <Col span={6}>
          <Icon size={36} name="suoxiao" />
          缩小
        </Col>
        <Col span={6}>
          <Icon size={36} name="shanchu" />
          删除
        </Col>
        <Col span={6}>
          <Icon size={36} name="shaixuan" />
          筛选
        </Col>
        <Col span={6}>
          <Icon size={36} name="fanhui" />
          返回
        </Col>
        <Col span={6}>
          <Icon size={36} name="shangchuan" />
          上传
        </Col>
        <Col span={6}>
          <Icon size={36} name="GIF" />
          GIF
        </Col>
        <Col span={6}>
          <Icon size={36} name="PDF" />
          PDF
        </Col>
        <Col span={6}>
          <Icon size={36} name="JPEG" />
          JPEG
        </Col>
        <Col span={6}>
          <Icon size={36} name="PNG" />
          PNG
        </Col>
        <Col span={6}>
          <Icon size={36} name="shouji" />
          手机
        </Col>
        <Col span={6}>
          <Icon size={36} name="diannao" />
          电脑
        </Col>
        <Col span={6}>
          <Icon size={36} name="duoshaixuanshouqi" />
          多筛选收起
        </Col>
        <Col span={6}>
          <Icon size={36} name="duoshaixuanzhankai" />
          多筛选展开
        </Col>
        <Col span={6}>
          <Icon size={36} name="daochuliebiao" />
          导出列表
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaoqushaixuanmoban" />
          调取筛选模版
        </Col>
        <Col span={6}>
          <Icon size={36} name="shuaxin1" />
          刷新
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaojianzhankai" />
          条件展开
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaojianshouqi" />
          条件收起
        </Col>
        <Col span={6}>
          <Icon size={36} name="gengduo2" />
          更多
        </Col>
        <Col span={6}>
          <Icon size={36} name="daochu" />
          导出
        </Col>
        <Col span={6}>
          <Icon size={36} name="daoru" />
          导入
        </Col>
        <Col span={6}>
          <Icon size={36} name="fuzhi" />
          复制
        </Col>
        <Col span={6}>
          <Icon size={36} name="xitongguanli" />
          系统管理
        </Col>
        <Col span={6}>
          <Icon size={36} name="chanpinguanli" />
          产品管理
        </Col>
        <Col span={6}>
          <Icon size={36} name="menhujianshe" />
          门户建设
        </Col>
        <Col span={6}>
          <Icon size={36} name="gongzuotai" />
          工作台
        </Col>
        <Col span={6}>
          <Icon size={36} name="kehuguanli" />
          客户管理
        </Col>
        <Col span={6}>
          <Icon size={36} name="haihexinqianyuepingtai" />
          海合信签约平台
        </Col>
        <Col span={6}>
          <Icon size={36} name="xinxipilou" />
          信息披露
        </Col>
        <Col span={6}>
          <Icon size={36} name="shidangxingguanli" />
          适当性管理
        </Col>
        <Col span={6}>
          <Icon size={36} name="xiaoshouguanli" />
          销售管理
        </Col>
        <Col span={6}>
          <Icon size={36} name="pc" />
          icon-pc
        </Col>
        <Col span={6}>
          <Icon size={36} name="pad" />
          icon-pad
        </Col>
        <Col span={6}>
          <Icon size={36} name="mobile" />
          icon-mobile
        </Col>
        <Col span={6}>
          <Icon size={36} name="forward" />
          icon-forward
        </Col>
        <Col span={6}>
          <Icon size={36} name="return" />
          icon-return
        </Col>
        <Col span={6}>
          <Icon size={36} name="narrow" />
          icon-narrow
        </Col>
        <Col span={6}>
          <Icon size={36} name="enlarge" />
          icon-enlarge
        </Col>
      </Row>
    </div>
  );
};
```

自定义颜色：

```tsx
import React from 'react';
import { Icon, Grid } from 'rootnet-design';
const { Row, Col } = Grid;

export default () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Icon size={36} name="shanchu" color="red" />
          <p>
            <p>删除</p>
          </p>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
