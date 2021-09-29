---
nav:
  title: 组件
  path: /components
group:
  title: Menu 导航菜单
  order: 21
---

## Menu 导航菜单

示例：

```tsx
import React, { useState } from 'react';
import { Menu, Icon, Button } from 'rootnet-design';

const dataSource = [
  {
    funcCode: '1000',
    text: '工作台',
    to: 'base/workbench',
    icon: <Icon size={16} name="shanchu" />,
  },
  {
    funcCode: '1010',
    text: '销售管理',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '101035',
        text: '同步TA数据',
        to: '/webapp/page/23',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '101005',
        text: '预约交易',
        to: 'base/makeAppointmentTrading',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '101020',
        text: '交易查询',
        to: '/base/transactionInquiry',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '101015',
        text: '份额查询',
        to: '/base/positionInquiry',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
  {
    funcCode: '1005',
    text: '产品管理',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '100505',
        text: '产品开放日',
        to: '/base/openDay',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '100515',
        text: '分红方案',
        to: '/base/productDividend',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '100510',
        text: '净值管理',
        to: '',
        icon: <Icon size={16} name="shanchu" />,
        children: [
          {
            funcCode: '10051010',
            text: '披露日历',
            to: '/base/disclosureCalendar',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10051005',
            text: '披露规则',
            to: '/base/disclosureRule',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10051001',
            text: '产品净值',
            to: '/base/productnetvalue',
            icon: <Icon size={16} name="shanchu" />,
          },
        ],
      },
      {
        funcCode: '100501',
        text: '产品信息',
        to: '/base/productMessage',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '100513',
        text: '档案管理',
        to: '/base/archives',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
  {
    funcCode: '1020',
    text: '信息披露',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '102001',
        text: '公司报告',
        to: '/base/theCompanyReport',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '102005',
        text: '产品报告',
        to: '/base/productReport',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '102020',
        text: '文章管理',
        to: '/base/article',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '102015',
        text: '模板管理',
        to: '',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
  {
    funcCode: '1015',
    text: '客户管理',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '101501',
        text: '客户管理',
        to: '/base/customerMessage',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
  {
    funcCode: '1025',
    text: '适当性管理',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '102510',
        text: '基金评级标准设定',
        to: '/webapp/page/14',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '102501',
        text: '问卷管理',
        to: '/base/riskAppraisal',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
  {
    funcCode: '1043',
    text: '统计分析',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '104310',
        text: '微官网数据',
        to: '',
        icon: <Icon size={16} name="shanchu" />,
        children: [
          {
            funcCode: '10431001',
            text: '微信菜单统计',
            to: '/webapp/page/21',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10431002',
            text: '官网数据统计',
            to: '/webapp/page/22',
            icon: <Icon size={16} name="shanchu" />,
          },
        ],
      },
    ],
  },
  {
    funcCode: '1040',
    text: '门户建设',
    to: '',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '104001',
        text: '微信官网',
        to: '',
        icon: <Icon size={16} name="shanchu" />,
        children: [
          {
            funcCode: '10400110',
            text: '公众号绑定',
            to: '/webapp/page/8',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10400105',
            text: '自动回复',
            to: '/webapp/page/5',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10400103',
            text: '群发消息',
            to: '/webapp/page/4',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10400115',
            text: '一键换肤',
            to: '/webapp/page/15',
            icon: <Icon size={16} name="shanchu" />,
          },
          {
            funcCode: '10400101',
            text: '配置菜单与模板',
            to: '/webapp/page/1',
            icon: <Icon size={16} name="shanchu" />,
          },
        ],
      },
      {
        funcCode: '104005',
        text: 'PC官网',
        to: '/base/website',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
  {
    funcCode: '1045',
    text: '系统管理',
    to: '/system',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      {
        funcCode: '104510',
        text: '用户管理',
        to: '/uac/user',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '104505',
        text: '角色管理',
        to: '/uac/role',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '104520',
        text: '人员信息',
        to: '/base/employeeInfo',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '104530',
        text: '公司信息',
        to: '/webapp/page/7',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '104501',
        text: '机构管理',
        to: '/uac/organ',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '104515',
        text: '合作机构',
        to: '/base/cooperateInstitution',
        icon: <Icon size={16} name="shanchu" />,
      },
      {
        funcCode: '104525',
        text: '企业信息',
        to: '/base/enterpriseInfo',
        icon: <Icon size={16} name="shanchu" />,
      },
    ],
  },
];

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const [checked, setChecked] = useState('base/workbench');

  return (
    <div>
      <Button onClick={() => setCollapsed(!collapsed)}>展开/收起</Button>
      <Menu
        checked={checked}
        dataSource={dataSource}
        collapsed={collapsed}
        onCollapsed={(type) => {
          console.log(type);
        }}
        onChecked={(checked, checkedData) => {
          console.log(checked, checkedData);
        }}
      />
    </div>
  );
};
```
