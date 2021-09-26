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
import { Menu, Icon } from 'rootnet-design';

const dataSource = [
  {
    funcCode: '1000',
    text: '工作台',
    to: 'base/workbench',
    icon: <Icon size={16} name="shanchu" />,
    children: [
      { funcCode: '100001', text: '海合信签约平台', to: '/hhxqypt', icon: '' },
    ],
  },
  {
    funcCode: '1010',
    text: '销售管理',
    to: '',
    icon: 'xiaoshouguanli',
    children: [
      {
        funcCode: '101035',
        text: '同步TA数据',
        to: '/webapp/page/23',
        icon: '',
      },
      {
        funcCode: '101005',
        text: '预约交易',
        to: 'base/makeAppointmentTrading',
        icon: '',
        children: [
          {
            funcCode: '10100509',
            text: '签约文件上传',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100506',
            text: '投资者材料查看',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100505',
            text: '投资者材料上传',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100507',
            text: '投资者材料下载',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100501',
            text: '新增',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100503',
            text: '作废',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100517',
            text: '签约进度处理',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100513',
            text: '回访文件上传',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100515',
            text: '回访文件下载',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100511',
            text: '签约文件下载',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100508',
            text: '投资者材料删除',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100502',
            text: '详情',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100504',
            text: '交易基本信息编辑',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100516',
            text: '回访文件删除',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100514',
            text: '回访文件查看',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100510',
            text: '签约文件查看',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
          {
            funcCode: '10100512',
            text: '签约文件删除',
            to: 'base/makeAppointmentTrading',
            icon: '',
          },
        ],
      },
      {
        funcCode: '101020',
        text: '交易查询',
        to: '/base/transactionInquiry',
        icon: '',
        children: [
          {
            funcCode: '10102008',
            text: '发布',
            to: '/base/transactionInquiry',
            icon: '',
          },
          {
            funcCode: '10102009',
            text: '撤销发布',
            to: '/base/transactionInquiry',
            icon: '',
          },
        ],
      },
      {
        funcCode: '101015',
        text: '份额查询',
        to: '/base/positionInquiry',
        icon: '',
        children: [
          {
            funcCode: '10101509',
            text: '撤销发布',
            to: '/base/positionInquiry',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    funcCode: '1005',
    text: '产品管理',
    to: '',
    icon: 'gongzuotai',
    children: [
      {
        funcCode: '100505',
        text: '产品开放日',
        to: '/base/openDay',
        icon: '',
        children: [
          {
            funcCode: '10050505',
            text: '查看产品开放日',
            to: '/base/openDay',
            icon: '',
          },
          {
            funcCode: '10050506',
            text: '删除产品开放日',
            to: '/base/openDay',
            icon: '',
          },
          {
            funcCode: '10050504',
            text: '批量追加',
            to: '/base/openDay',
            icon: '',
          },
          { funcCode: '10050502', text: '编辑', to: '/base/openDay', icon: '' },
          { funcCode: '10050503', text: '删除', to: '/base/openDay', icon: '' },
          { funcCode: '10050501', text: '新增', to: '/base/openDay', icon: '' },
        ],
      },
      {
        funcCode: '100515',
        text: '分红方案',
        to: '/base/productDividend',
        icon: '',
        children: [
          {
            funcCode: '10051503',
            text: '删除',
            to: '/base/productDividend',
            icon: '',
          },
          {
            funcCode: '10051502',
            text: '编辑',
            to: '/base/productDividend',
            icon: '',
          },
          {
            funcCode: '10051501',
            text: '新增',
            to: '/base/productDividend',
            icon: '',
          },
        ],
      },
      {
        funcCode: '100510',
        text: '净值管理',
        to: '',
        icon: '',
        children: [
          {
            funcCode: '10051010',
            text: '披露日历',
            to: '/base/disclosureCalendar',
            icon: '',
            children: [
              {
                funcCode: '1005101006',
                text: '撤销发布',
                to: '/base/disclosureCalendar',
                icon: '',
              },
              {
                funcCode: '1005101004',
                text: '净值说明',
                to: '/base/disclosureCalendar',
                icon: '',
              },
              {
                funcCode: '1005101003',
                text: '删除',
                to: '/base/disclosureCalendar',
                icon: '',
              },
              {
                funcCode: '1005101001',
                text: '新增',
                to: '/base/disclosureCalendar',
                icon: '',
              },
              {
                funcCode: '1005101005',
                text: '发布',
                to: '/base/disclosureCalendar',
                icon: '',
              },
              {
                funcCode: '1005101002',
                text: '编辑',
                to: '/base/disclosureCalendar',
                icon: '',
              },
            ],
          },
          {
            funcCode: '10051005',
            text: '披露规则',
            to: '/base/disclosureRule',
            icon: '',
            children: [
              {
                funcCode: '1005100508',
                text: '删除日历',
                to: '/base/disclosureRule',
                icon: '',
              },
              {
                funcCode: '1005100507',
                text: '新增日历',
                to: '/base/disclosureRule',
                icon: '',
              },
              {
                funcCode: '1005100505',
                text: '批量追加',
                to: '/base/disclosureRule',
                icon: '',
              },
              {
                funcCode: '1005100503',
                text: '删除',
                to: '/base/disclosureRule',
                icon: '',
              },
              {
                funcCode: '1005100506',
                text: '披露日历',
                to: '/base/disclosureRule',
                icon: '',
              },
              {
                funcCode: '1005100502',
                text: '编辑',
                to: '/base/disclosureRule',
                icon: '',
              },
            ],
          },
          {
            funcCode: '10051001',
            text: '产品净值',
            to: '/base/productnetvalue',
            icon: '',
            children: [
              {
                funcCode: '1005100102',
                text: '编辑',
                to: '/base/productnetvalue',
                icon: '',
              },
              {
                funcCode: '1005100101',
                text: '新增',
                to: '/base/productnetvalue',
                icon: '',
              },
            ],
          },
        ],
      },
      {
        funcCode: '100501',
        text: '产品信息',
        to: '/base/productMessage',
        icon: '',
        children: [
          {
            funcCode: '10050109',
            text: '合作机构编辑',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050108',
            text: '合作机构新增',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050106',
            text: '基本信息编辑',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050104',
            text: '撤销发布',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050102',
            text: '详情',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050116',
            text: '人员信息删除',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050115',
            text: '人员信息编辑',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050113',
            text: '更多',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050110',
            text: '合作机构删除',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050107',
            text: '申赎信息编辑',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050103',
            text: '发布',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050114',
            text: '人员信息新增',
            to: '/base/productMessage',
            icon: '',
          },
          {
            funcCode: '10050111',
            text: '投资信息编辑',
            to: '/base/productMessage',
            icon: '',
          },
        ],
      },
      {
        funcCode: '100513',
        text: '档案管理',
        to: '/base/archives',
        icon: '',
        children: [
          {
            funcCode: '10051303',
            text: '删除',
            to: '/base/archives',
            icon: '',
          },
          {
            funcCode: '10051301',
            text: '新增',
            to: '/base/archives',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    funcCode: '1020',
    text: '信息披露',
    to: '',
    icon: 'xinxipilou',
    children: [
      {
        funcCode: '102001',
        text: '公司报告',
        to: '/base/theCompanyReport',
        icon: '',
        children: [
          {
            funcCode: '10200101',
            text: '新增',
            to: '/base/theCompanyReport',
            icon: '',
          },
          {
            funcCode: '10200103',
            text: '删除',
            to: '/base/theCompanyReport',
            icon: '',
          },
          {
            funcCode: '10200109',
            text: '撤销发布',
            to: '/base/theCompanyReport',
            icon: '',
          },
          {
            funcCode: '10200102',
            text: '编辑',
            to: '/base/theCompanyReport',
            icon: '',
          },
          {
            funcCode: '10200108',
            text: '发布',
            to: '/base/theCompanyReport',
            icon: '',
          },
        ],
      },
      {
        funcCode: '102005',
        text: '产品报告',
        to: '/base/productReport',
        icon: '',
        children: [
          {
            funcCode: '10200501',
            text: '新增',
            to: '/base/productReport',
            icon: '',
          },
          {
            funcCode: '10200502',
            text: '编辑',
            to: '/base/productReport',
            icon: '',
          },
          {
            funcCode: '10200508',
            text: '发布',
            to: '/base/productReport',
            icon: '',
          },
          {
            funcCode: '10200503',
            text: '删除',
            to: '/base/productReport',
            icon: '',
          },
          {
            funcCode: '10200509',
            text: '撤销发布',
            to: '/base/productReport',
            icon: '',
          },
        ],
      },
      {
        funcCode: '102020',
        text: '文章管理',
        to: '/base/article',
        icon: '',
        children: [
          { funcCode: '10202003', text: '删除', to: '/base/article', icon: '' },
          {
            funcCode: '10202001',
            text: '新建文章',
            to: '/base/article',
            icon: '',
          },
          {
            funcCode: '10202007',
            text: '分类管理',
            to: '/base/article',
            icon: '',
          },
          { funcCode: '10202005', text: '停用', to: '/base/article', icon: '' },
          { funcCode: '10202004', text: '移动', to: '/base/article', icon: '' },
          { funcCode: '10202008', text: '预览', to: '/base/article', icon: '' },
        ],
      },
      {
        funcCode: '102015',
        text: '模板管理',
        to: '',
        icon: '',
        children: [
          {
            funcCode: '10201501',
            text: '报告名称规则',
            to: '/base/rules',
            icon: '',
            children: [
              {
                funcCode: '1020150101',
                text: '新增',
                to: '/base/rules',
                icon: '',
              },
              {
                funcCode: '1020150103',
                text: '删除',
                to: '/base/rules',
                icon: '',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    funcCode: '1015',
    text: '客户管理',
    to: '',
    icon: 'kehuguanli',
    children: [
      {
        funcCode: '101501',
        text: '客户管理',
        to: '/base/customerMessage',
        icon: '',
        children: [
          {
            funcCode: '10150110',
            text: '档案下载',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150113',
            text: '编辑银行卡',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150112',
            text: '新增银行卡',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150103',
            text: '新增产品客户',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150101',
            text: '新增个人客户',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150107',
            text: '详情',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150105',
            text: '新增机构客户',
            to: '/base/customerMessage',
            icon: '',
          },
          {
            funcCode: '10150109',
            text: '档案查看',
            to: '/base/customerMessage',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    funcCode: '1025',
    text: '适当性管理',
    to: '',
    icon: 'shidangxingguanli',
    children: [
      {
        funcCode: '102510',
        text: '基金评级标准设定',
        to: '/webapp/page/14',
        icon: '',
        children: [
          {
            funcCode: '10251001',
            text: '获取默认题库',
            to: '/webapp/page/14',
            icon: '',
          },
          {
            funcCode: '10251002',
            text: '编辑',
            to: '/webapp/page/14',
            icon: '',
          },
          {
            funcCode: '10251004',
            text: '保存',
            to: '/webapp/page/14',
            icon: '',
          },
          {
            funcCode: '10251003',
            text: '编辑',
            to: '/webapp/page/14',
            icon: '',
          },
        ],
      },
      {
        funcCode: '102501',
        text: '问卷管理',
        to: '/base/riskAppraisal',
        icon: '',
        children: [
          {
            funcCode: '10250105',
            text: '预览',
            to: '/base/riskAppraisal',
            icon: '',
          },
          {
            funcCode: '10250107',
            text: '详情',
            to: '/base/riskAppraisal',
            icon: '',
          },
          {
            funcCode: '10250101',
            text: '新增',
            to: '/base/riskAppraisal',
            icon: '',
          },
          {
            funcCode: '10250103',
            text: '删除',
            to: '/base/riskAppraisal',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    funcCode: '1043',
    text: '统计分析',
    to: '',
    icon: 'gongzuotai',
    children: [
      {
        funcCode: '104310',
        text: '微官网数据',
        to: '',
        icon: '',
        children: [
          {
            funcCode: '10431001',
            text: '微信菜单统计',
            to: '/webapp/page/21',
            icon: '',
          },
          {
            funcCode: '10431002',
            text: '官网数据统计',
            to: '/webapp/page/22',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    funcCode: '1040',
    text: '门户建设',
    to: '',
    icon: 'menhujianshe',
    children: [
      {
        funcCode: '104001',
        text: '微信官网',
        to: '',
        icon: '',
        children: [
          {
            funcCode: '10400110',
            text: '公众号绑定',
            to: '/webapp/page/8',
            icon: '',
          },
          {
            funcCode: '10400105',
            text: '自动回复',
            to: '/webapp/page/5',
            icon: '',
          },
          {
            funcCode: '10400103',
            text: '群发消息',
            to: '/webapp/page/4',
            icon: '',
          },
          {
            funcCode: '10400115',
            text: '一键换肤',
            to: '/webapp/page/15',
            icon: '',
          },
          {
            funcCode: '10400101',
            text: '配置菜单与模板',
            to: '/webapp/page/1',
            icon: '',
          },
        ],
      },
      {
        funcCode: '104005',
        text: 'PC官网',
        to: '/base/website',
        icon: '',
        children: [
          {
            funcCode: '10400510',
            text: '删除模板',
            to: '/base/website',
            icon: '',
          },
          {
            funcCode: '10400509',
            text: '设计模板',
            to: '/base/website',
            icon: '',
          },
          {
            funcCode: '10400503',
            text: '另存为模板',
            to: '/base/website',
            icon: '',
          },
          {
            funcCode: '10400501',
            text: '设计网站',
            to: '/base/website',
            icon: '',
          },
          {
            funcCode: '10400506',
            text: '网站模板管理',
            to: '/base/website',
            icon: '',
          },
          {
            funcCode: '10400504',
            text: '发布网站',
            to: '/base/website',
            icon: '',
          },
        ],
      },
    ],
  },
  {
    funcCode: '1045',
    text: '系统管理',
    to: '/system',
    icon: 'xitongguanli',
    children: [
      {
        funcCode: '104510',
        text: '用户管理',
        to: '/uac/user',
        icon: '',
        children: [
          { funcCode: '10451003', text: '详情', to: '/uac/user', icon: '' },
          { funcCode: '10451001', text: '新增', to: '/uac/user', icon: '' },
          { funcCode: '10451005', text: '重置密码', to: '/uac/user', icon: '' },
          { funcCode: '10451004', text: '注销', to: '/uac/user', icon: '' },
          { funcCode: '10451002', text: '编辑', to: '/uac/user', icon: '' },
        ],
      },
      {
        funcCode: '104505',
        text: '角色管理',
        to: '/uac/role',
        icon: '',
        children: [
          { funcCode: '10450501', text: '新增', to: '/uac/role', icon: '' },
          { funcCode: '10450503', text: '详情', to: '/uac/role', icon: '' },
          { funcCode: '10450502', text: '编辑', to: '/uac/role', icon: '' },
          { funcCode: '10450504', text: '注销', to: '/uac/role', icon: '' },
        ],
      },
      {
        funcCode: '104520',
        text: '人员信息',
        to: '/base/employeeInfo',
        icon: '',
        children: [
          {
            funcCode: '10452001',
            text: '新增',
            to: '/base/employeeInfo',
            icon: '',
          },
          {
            funcCode: '10452003',
            text: '删除',
            to: '/base/employeeInfo',
            icon: '',
          },
          {
            funcCode: '10452002',
            text: '编辑',
            to: '/base/employeeInfo',
            icon: '',
          },
        ],
      },
      { funcCode: '104530', text: '公司信息', to: '/webapp/page/7', icon: '' },
      {
        funcCode: '104501',
        text: '机构管理',
        to: '/uac/organ',
        icon: '',
        children: [
          { funcCode: '10450101', text: '新增', to: '/uac/organ', icon: '' },
          { funcCode: '10450103', text: '详情', to: '/uac/organ', icon: '' },
          { funcCode: '10450102', text: '编辑', to: '/uac/organ', icon: '' },
          { funcCode: '10450104', text: '注销', to: '/uac/organ', icon: '' },
        ],
      },
      {
        funcCode: '104515',
        text: '合作机构',
        to: '/base/cooperateInstitution',
        icon: '',
        children: [
          {
            funcCode: '10451502',
            text: '编辑',
            to: '/base/cooperateInstitution',
            icon: '',
          },
          {
            funcCode: '10451501',
            text: '新增',
            to: '/base/cooperateInstitution',
            icon: '',
          },
          {
            funcCode: '10451503',
            text: '删除',
            to: '/base/cooperateInstitution',
            icon: '',
          },
        ],
      },
      {
        funcCode: '104525',
        text: '企业信息',
        to: '/base/enterpriseInfo',
        icon: '',
        children: [
          {
            funcCode: '10452503',
            text: '删除',
            to: '/base/enterpriseInfo',
            icon: '',
          },
          {
            funcCode: '10452501',
            text: '新增',
            to: '/base/enterpriseInfo',
            icon: '',
          },
        ],
      },
    ],
  },
];

export default () => {
  return <Menu dataSource={dataSource} />;
};
```
