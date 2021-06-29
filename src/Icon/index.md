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
          <Icon size={36} name="fabu" />
          <p>发布</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chexiaofabu" />
          <p>撤销发布</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhuijia1" />
          <p>追加</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiangxu" />
          <p>降序</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shengxu" />
          <p>升序</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="paixu" />
          <p>排序</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzeyou" />
          <p>选择右</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzezuo" />
          <p>选择左</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzeshouqi" />
          <p>选择收起</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzexiala" />
          <p>选择下拉</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xunwen1" />
          <p>询问</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jinggao" />
          <p>警告</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tixing" />
          <p>提醒</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chenggong" />
          <p>成功</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shibai" />
          <p>失败</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhengque" />
          <p>正确</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="cuowu" />
          <p>错误</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="wenhao" />
          <p>问号</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tanhao" />
          <p>叹号</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jianhao" />
          <p>减号</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiahao" />
          <p>加号</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tianjia" />
          <p>添加</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jianqu" />
          <p>减去</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="biaogeshouqi" />
          <p>表格收起</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="biaogezhankai" />
          <p>表格展开</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xunwen" />
          <p>询问</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chuansuokuang-xiangyoubukeyong" />
          <p>穿梭框-向右不可用</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chuansuokuang-xiangzuobukeyong" />
          <p>穿梭框-向左不可用</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chuansuokuang-xiangyou" />
          <p>穿梭框-向右</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chuansuokuang-xiangzuo" />
          <p>穿梭框-向左</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiaohuan" />
          <p>交换</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="heyue" />
          <p>合约</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="bianji1" />
          <p>编辑</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xinjianwenjian" />
          <p>新建文件</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="Rootnet" />
          <p>Rootnet</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fangda" />
          <p>放大</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="suoxiao" />
          <p>缩小</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shanchu" />
          <p>删除</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shaixuan" />
          <p>筛选</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="qiehuanbiaoge" />
          <p>切换表格</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="pingxing" />
          <p>评星</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shiyongzhe" />
          <p>使用者</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shijian" />
          <p>时间</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="banxing" />
          <p>半星</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhongxinjiazai" />
          <p>重新加载</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shezhi" />
          <p>设置</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="baocun" />
          <p>保存</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="guanbishengyin" />
          <p>关闭声音</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="dakaishengyin" />
          <p>打开声音</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="sousuo" />
          <p>搜索</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="lianjie" />
          <p>链接</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="qiehuantubiao" />
          <p>切换图表</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="rili" />
          <p>日历</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="bukejian" />
          <p>不可见</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="bianji" />
          <p>编辑</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xianshi" />
          <p>显示</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="heji" />
          <p>合集</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chenggong1" />
          <p>成功</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shibai1" />
          <p>失败</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jinggao1" />
          <p>警告</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tixing2" />
          <p>提醒</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fanhui" />
          <p>返回</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="weixincaidan" />
          <p>微信菜单</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="weixinguanwangpeizhi" />
          <p>微信官网配置</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shangchuan" />
          <p>上传</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="GIF" />
          <p>GIF</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="PDF" />
          <p>PDF</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="JPEG" />
          <p>JPEG</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="PNG" />
          <p>PNG</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="seban" />
          <p>色板</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="wenbenye" />
          <p>文本页</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shouji" />
          <p>手机</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="diannao" />
          <p>电脑</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="duoshaixuanshouqi" />
          <p>多筛选收起</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="duoshaixuanzhankai" />
          <p>多筛选展开</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="daochuliebiao" />
          <p>导出列表</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaoqushaixuanmoban" />
          <p>调取筛选模版</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shuaxin1" />
          <p>刷新</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaojianzhankai" />
          <p>条件展开</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaojianshouqi" />
          <p>条件收起</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="gengduo2" />
          <p>更多</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="daochu" />
          <p>导出</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="daoru" />
          <p>导入</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fuzhi" />
          <p>复制</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xitongguanli" />
          <p>系统管理</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chanpinguanli" />
          <p>产品管理</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="menhujianshe" />
          <p>门户建设</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="gongzuotai" />
          <p>工作台</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="kehuguanli" />
          <p>客户管理</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="haihexinqianyuepingtai" />
          <p>海合信签约平台</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xinxipilou" />
          <p>信息披露</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shidangxingguanli" />
          <p>适当性管理</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xiaoshouguanli" />
          <p>销售管理</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="pc" />
          <p>icon-pc</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="pad" />
          <p>icon-pad</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="mobile" />
          <p>icon-mobile</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="forward" />
          <p>icon-forward</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="return" />
          <p>icon-return</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="narrow" />
          <p>icon-narrow</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="enlarge" />
          <p>icon-enlarge</p>
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
