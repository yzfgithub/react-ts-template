import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '@/stores';
import { Col, Input, Row, DatePicker } from 'antd';
import CustomButton from '@/components/CustomButton';


const RightReceiveQueryForm: React.FC = observer(() => {
  const { emailTemplateStore } = useStore();

  const onQueryHandle = () => {
    emailTemplateStore.setMirrorEmailTemplateQueryForm(); // 重置镜像记录
    emailTemplateStore.setPaginationItem({ pageNum: 1 });
    emailTemplateStore.getEmailTemplateList();
  };
  const onResetHandle = () => {
    emailTemplateStore.resetQueryForm();
  };

  return (
    <div>
      <Row className="item-list">
        <Col span={8}>
          <span className="item-span">消息标题</span>
          <Input
            value={emailTemplateStore.emailTemplateQueryForm.title}
            onChange={e => emailTemplateStore.setEmailTemplateQueryFormItem({ title: e.target.value })}
            className="item-input"
            placeholder="请输入消息标题"
          />
        </Col>
        <Col>
        <DatePicker />
        </Col>
      </Row>

      <div className="item-buttons">
        <CustomButton onClick={onQueryHandle} type="primary" className="main-btn" ghost>
          查询
        </CustomButton>
        <CustomButton onClick={onResetHandle} className="sub-btn">
          重置
        </CustomButton>
      </div>
    </div>
  );
});

export default RightReceiveQueryForm;
