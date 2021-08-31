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
          <Icon size={36} name="sheji" />
          <p>设计</p>
          <p>{'<Icon size={36} name="sheji" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-link" />
          <p>icon-link</p>
          <p>{'<Icon size={36} name="icon-link" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="liangduanduiqi" />
          <p>两端对齐</p>
          <p>{'<Icon size={36} name="liangduanduiqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="hangjianju" />
          <p>行间距</p>
          <p>{'<Icon size={36} name="hangjianju" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontbold" />
          <p>icon-font bold</p>
          <p>{'<Icon size={36} name="icon-fontbold" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontitalics" />
          <p>icon-font italics</p>
          <p>{'<Icon size={36} name="icon-fontitalics" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontunderline" />
          <p>icon-font underline</p>
          <p>{'<Icon size={36} name="icon-fontunderline" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontcenter" />
          <p>icon-font center</p>
          <p>{'<Icon size={36} name="icon-fontcenter" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontright" />
          <p>icon-font right</p>
          <p>{'<Icon size={36} name="icon-fontright" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontleft" />
          <p>icon-font left</p>
          <p>{'<Icon size={36} name="icon-fontleft" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="icon-fontcolor" />
          <p>icon-font color</p>
          <p>{'<Icon size={36} name="icon-fontcolor" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shaixuanmian" />
          <p>筛选面</p>
          <p>{'<Icon size={36} name="shaixuanmian" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chazhaomian" />
          <p>查找面</p>
          <p>{'<Icon size={36} name="chazhaomian" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="dayudengyu" />
          <p>大于等于</p>
          <p>{'<Icon size={36} name="dayudengyu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xiaoyudengyu" />
          <p>小于等于</p>
          <p>{'<Icon size={36} name="xiaoyudengyu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="border" />
          <p>border</p>
          <p>{'<Icon size={36} name="border" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="hengxiangjuzhong" />
          <p>横向居中</p>
          <p>{'<Icon size={36} name="hengxiangjuzhong" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zuoyoujuzhong" />
          <p>左右居中</p>
          <p>{'<Icon size={36} name="zuoyoujuzhong" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zuoduiqi" />
          <p>左对齐</p>
          <p>{'<Icon size={36} name="zuoduiqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xiaduiqi" />
          <p>下对齐</p>
          <p>{'<Icon size={36} name="xiaduiqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shangduiqi" />
          <p>上对齐</p>
          <p>{'<Icon size={36} name="shangduiqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zongxiangjuzhong" />
          <p>纵向居中</p>
          <p>{'<Icon size={36} name="zongxiangjuzhong" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shangxiajuzhong" />
          <p>上下居中</p>
          <p>{'<Icon size={36} name="shangxiajuzhong" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="youduiqi" />
          <p>右对齐</p>
          <p>{'<Icon size={36} name="youduiqi" />'}</p>
        </Col>

        <Col span={6}>
          <Icon size={36} name="mima1" />
          <p>密码</p>
          <p>{'<Icon size={36} name="mima1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhanghao1" />
          <p>账号</p>
          <p>{'<Icon size={36} name="zhanghao1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="wenbenye" />
          <p>文本页</p>
          <p>{'<Icon size={36} name="wenbenye" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="seban" />
          <p>色板</p>
          <p>{'<Icon size={36} name="seban" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="bianji2" />
          <p>编辑</p>
          <p>{'<Icon size={36} name="bianji2" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="weixincaidan" />
          <p>微信菜单</p>
          <p>{'<Icon size={36} name="weixincaidan" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="weixinguanwangpeizhi" />
          <p>微信官网配置</p>
          <p>{'<Icon size={36} name="weixinguanwangpeizhi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiahao" />
          <p>加号</p>
          <p>{'<Icon size={36} name="jiahao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jianhao" />
          <p>减号</p>
          <p>{'<Icon size={36} name="jianhao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhongxinjiazai" />
          <p>重新加载</p>
          <p>{'<Icon size={36} name="zhongxinjiazai" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="Rootnet" />
          <p>Rootnet</p>
          <p>{'<Icon size={36} name="Rootnet" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="baocun" />
          <p>保存</p>
          <p>{'<Icon size={36} name="baocun" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="sousuo" />
          <p>搜索</p>
          <p>{'<Icon size={36} name="sousuo" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shezhi" />
          <p>设置</p>
          <p>{'<Icon size={36} name="shezhi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shijian" />
          <p>时间</p>
          <p>{'<Icon size={36} name="shijian" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="banxing" />
          <p>半星</p>
          <p>{'<Icon size={36} name="banxing" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="pingxing" />
          <p>评星</p>
          <p>{'<Icon size={36} name="pingxing" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="dakaishengyin" />
          <p>打开声音</p>
          <p>{'<Icon size={36} name="dakaishengyin" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xinjianwenjian" />
          <p>新建文件</p>
          <p>{'<Icon size={36} name="xinjianwenjian" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="guanbishengyin" />
          <p>关闭声音</p>
          <p>{'<Icon size={36} name="guanbishengyin" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shiyongzhe" />
          <p>使用者</p>
          <p>{'<Icon size={36} name="shiyongzhe" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="qiehuanbiaoge" />
          <p>切换表格</p>
          <p>{'<Icon size={36} name="qiehuanbiaoge" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="qiehuantubiao" />
          <p>切换图表</p>
          <p>{'<Icon size={36} name="qiehuantubiao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="bianji" />
          <p>编辑</p>
          <p>{'<Icon size={36} name="bianji" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="lianjie" />
          <p>链接</p>
          <p>{'<Icon size={36} name="lianjie" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="rili" />
          <p>日历</p>
          <p>{'<Icon size={36} name="rili" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="heji" />
          <p>合集</p>
          <p>{'<Icon size={36} name="heji" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="bukejian" />
          <p>不可见</p>
          <p>{'<Icon size={36} name="bukejian" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xianshi" />
          <p>显示</p>
          <p>{'<Icon size={36} name="xianshi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chenggong" />
          <p>成功</p>
          <p>{'<Icon size={36} name="chenggong" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shibai" />
          <p>失败</p>
          <p>{'<Icon size={36} name="shibai" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tixing" />
          <p>提醒</p>
          <p>{'<Icon size={36} name="tixing" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jinggao" />
          <p>警告</p>
          <p>{'<Icon size={36} name="jinggao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xunwen" />
          <p>询问</p>
          <p>{'<Icon size={36} name="xunwen" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="biaogeshouqi1" />
          <p>表格收起</p>
          <p>{'<Icon size={36} name="biaogeshouqi1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="biaogezhankai1" />
          <p>表格展开</p>
          <p>{'<Icon size={36} name="biaogezhankai1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tianjia1" />
          <p>添加</p>
          <p>{'<Icon size={36} name="tianjia1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jianqu1" />
          <p>减去</p>
          <p>{'<Icon size={36} name="jianqu1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhengque1" />
          <p>正确</p>
          <p>{'<Icon size={36} name="zhengque1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="cuowu1" />
          <p>错误</p>
          <p>{'<Icon size={36} name="cuowu1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="wenhao1" />
          <p>问号</p>
          <p>{'<Icon size={36} name="wenhao1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tanhao1" />
          <p>叹号</p>
          <p>{'<Icon size={36} name="tanhao1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shibai2" />
          <p>失败</p>
          <p>{'<Icon size={36} name="shibai2" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chenggong2" />
          <p>成功</p>
          <p>{'<Icon size={36} name="chenggong2" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tixing1" />
          <p>提醒</p>
          <p>{'<Icon size={36} name="tixing1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xunwen2" />
          <p>询问</p>
          <p>{'<Icon size={36} name="xunwen2" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jinggao2" />
          <p>警告</p>
          <p>{'<Icon size={36} name="jinggao2" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubleright" />
          <p>double right</p>
          <p>{'<Icon size={36} name="a-doubleright" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubleleft" />
          <p>double left</p>
          <p>{'<Icon size={36} name="a-doubleleft" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubledown" />
          <p>double down</p>
          <p>{'<Icon size={36} name="a-doubledown" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="a-doubleup" />
          <p>double up</p>
          <p>{'<Icon size={36} name="a-doubleup" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzeshouqi" />
          <p>选择收起</p>
          <p>{'<Icon size={36} name="xuanzeshouqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzezuo" />
          <p>选择左</p>
          <p>{'<Icon size={36} name="xuanzezuo" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzeyou" />
          <p>选择右</p>
          <p>{'<Icon size={36} name="xuanzeyou" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xuanzexiala" />
          <p>选择下拉</p>
          <p>{'<Icon size={36} name="xuanzexiala" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xia" />
          <p>下</p>
          <p>{'<Icon size={36} name="xia" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shang" />
          <p>上</p>
          <p>{'<Icon size={36} name="shang" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="you" />
          <p>右</p>
          <p>{'<Icon size={36} name="you" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zuo" />
          <p>左</p>
          <p>{'<Icon size={36} name="zuo" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fabu" />
          <p>发布</p>
          <p>{'<Icon size={36} name="fabu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chexiaofabu" />
          <p>撤销发布</p>
          <p>{'<Icon size={36} name="chexiaofabu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="zhuijia1" />
          <p>追加</p>
          <p>{'<Icon size={36} name="zhuijia1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiangxu" />
          <p>降序</p>
          <p>{'<Icon size={36} name="jiangxu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shengxu" />
          <p>升序</p>
          <p>{'<Icon size={36} name="shengxu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="paixu" />
          <p>排序</p>
          <p>{'<Icon size={36} name="paixu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="jiaohuan" />
          <p>交换</p>
          <p>{'<Icon size={36} name="jiaohuan" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="heyue" />
          <p>合约</p>
          <p>{'<Icon size={36} name="heyue" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fangda" />
          <p>放大</p>
          <p>{'<Icon size={36} name="fangda" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="suoxiao" />
          <p>缩小</p>
          <p>{'<Icon size={36} name="suoxiao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shanchu" />
          <p>删除</p>
          <p>{'<Icon size={36} name="shanchu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shaixuan" />
          <p>筛选</p>
          <p>{'<Icon size={36} name="shaixuan" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fanhui" />
          <p>返回</p>
          <p>{'<Icon size={36} name="fanhui" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shangchuan" />
          <p>上传</p>
          <p>{'<Icon size={36} name="shangchuan" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="GIF" />
          <p>GIF</p>
          <p>{'<Icon size={36} name="GIF" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="PDF" />
          <p>PDF</p>
          <p>{'<Icon size={36} name="PDF" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="JPEG" />
          <p>JPEG</p>
          <p>{'<Icon size={36} name="JPEG" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="PNG" />
          <p>PNG</p>
          <p>{'<Icon size={36} name="PNG" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shouji" />
          <p>手机</p>
          <p>{'<Icon size={36} name="shouji" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="diannao" />
          <p>电脑</p>
          <p>{'<Icon size={36} name="diannao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="duoshaixuanshouqi" />
          <p>多筛选收起</p>
          <p>{'<Icon size={36} name="duoshaixuanshouqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="duoshaixuanzhankai" />
          <p>多筛选展开</p>
          <p>{'<Icon size={36} name="duoshaixuanzhankai" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="daochuliebiao" />
          <p>导出列表</p>
          <p>{'<Icon size={36} name="daochuliebiao" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaoqushaixuanmoban" />
          <p>调取筛选模版</p>
          <p>{'<Icon size={36} name="tiaoqushaixuanmoban" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shuaxin1" />
          <p>刷新</p>
          <p>{'<Icon size={36} name="shuaxin1" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaojianzhankai" />
          <p>条件展开</p>
          <p>{'<Icon size={36} name="tiaojianzhankai" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="tiaojianshouqi" />
          <p>条件收起</p>
          <p>{'<Icon size={36} name="tiaojianshouqi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="gengduo2" />
          <p>更多</p>
          <p>{'<Icon size={36} name="gengduo2" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="daochu" />
          <p>导出</p>
          <p>{'<Icon size={36} name="daochu" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="daoru" />
          <p>导入</p>
          <p>{'<Icon size={36} name="daoru" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="fuzhi" />
          <p>复制</p>
          <p>{'<Icon size={36} name="fuzhi" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xitongguanli" />
          <p>系统管理</p>
          <p>{'<Icon size={36} name="xitongguanli" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="chanpinguanli" />
          <p>产品管理</p>
          <p>{'<Icon size={36} name="chanpinguanli" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="menhujianshe" />
          <p>门户建设</p>
          <p>{'<Icon size={36} name="menhujianshe" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="gongzuotai" />
          <p>工作台</p>
          <p>{'<Icon size={36} name="gongzuotai" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="kehuguanli" />
          <p>客户管理</p>
          <p>{'<Icon size={36} name="kehuguanli" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="haihexinqianyuepingtai" />
          <p>海合信签约平台</p>
          <p>{'<Icon size={36} name="haihexinqianyuepingtai" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xinxipilou" />
          <p>信息披露</p>
          <p>{'<Icon size={36} name="xinxipilou" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="shidangxingguanli" />
          <p>适当性管理</p>
          <p>{'<Icon size={36} name="shidangxingguanli" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="xiaoshouguanli" />
          <p>销售管理</p>
          <p>{'<Icon size={36} name="xiaoshouguanli" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="pc" />
          <p>icon-pc</p>
          <p>{'<Icon size={36} name="pc" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="pad" />
          <p>icon-pad</p>
          <p>{'<Icon size={36} name="pad" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="mobile" />
          <p>icon-mobile</p>
          <p>{'<Icon size={36} name="mobile" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="forward" />
          <p>icon-forward</p>
          <p>{'<Icon size={36} name="forward" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="return" />
          <p>icon-return</p>
          <p>{'<Icon size={36} name="return" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="narrow" />
          <p>icon-narrow</p>
          <p>{'<Icon size={36} name="narrow" />'}</p>
        </Col>
        <Col span={6}>
          <Icon size={36} name="enlarge" />
          <p>icon-enlarge</p>
          <p>{'<Icon size={36} name="enlarge" />'}</p>
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
            <p></p>
            <p>{'<Icon size={36} name="shanchu" color="red" />'}</p>
            <p>删除</p>
          </p>
        </Col>
      </Row>
    </div>
  );
};
```

<API />
