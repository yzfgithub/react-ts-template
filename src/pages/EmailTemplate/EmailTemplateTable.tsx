import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@/stores';
import { Table } from 'antd';

const RightReceiveTable: React.FC = observer(() => {
  const { emailTemplateStore, router } = useStore();
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      fixed: 'left' as 'left' | 'right',
      width: 70,
      render: (text: any, record: any, index: number) => {
        return emailTemplateStore.paginationObj.pageSize * (emailTemplateStore.paginationObj.pageNum - 1) + index + 1;
      }
    },
    {
      title: '商家PIN',
      dataIndex: 'applyUser',
      key: 'applyUser',
      width: 100
    },
    {
      title: '商家编号',
      dataIndex: 'venderCode',
      key: 'venderCode',
      width: 100
    },

    {
      title: '客户类型',
      dataIndex: 'customerTypeName',
      key: 'customerTypeName',
      width: 100
    },
    {
      title: '客户标签',
      dataIndex: 'tagName',
      key: 'tagName',
      width: 100
    },
    {
      title: '服务类型',
      dataIndex: 'projectTypeName',
      key: 'projectTypeName',
      width: 120
    },
    {
      title: '配额数量',
      dataIndex: 'quotaAll',
      key: 'quotaAll',
      width: 100
    },
    {
      title: '生效时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 120
    },
    {
      title: '失效时间',
      dataIndex: 'endTime',
      key: 'endTime',
      width: 120
    },
    {
      title: '是否已经使用配额',
      dataIndex: 'isUsed',
      key: 'isUsed',
      width: 80
    },
    {
      title: '领取时间',
      dataIndex: 'applyTime',
      key: 'applyTime',
      width: 120
    }
  ];

  const onPageChange = (page: number) => {
    emailTemplateStore.setPaginationItem({ pageNum: page });
    emailTemplateStore.getEmailTemplateList();
  };
  const onSizeChange = (current: number, size: number) => {
    emailTemplateStore.setPaginationItem({ pageSize: size });
    emailTemplateStore.getEmailTemplateList();
  };

  return (
    <>
      <div className="extra-btn">
      </div>
      <Table
        bordered
        dataSource={emailTemplateStore.emailTemplateList}
        columns={columns}
        rowKey={record => record?.id}
        loading={emailTemplateStore.loading}
        scroll={{ x: 1130 }}
        pagination={{
          showQuickJumper: true,
          current: emailTemplateStore.paginationObj.pageNum,
          pageSize: emailTemplateStore.paginationObj.pageSize,
          total: emailTemplateStore.paginationObj.emailTemplateTotal,
          onChange: page => onPageChange(page),
          onShowSizeChange: (current, size) => onSizeChange(current, size),
          showTotal: total => `共${total}条`
        }}
      />
    </>
  );
});

export default RightReceiveTable;
