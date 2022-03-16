import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
// import { PathNav } from '@jd/jc2m-portal-components';
import EmailQueryForm from './EmailTemplateQueryForm';
import EmailTable from './EmailTemplateTable';
import { useStore } from '@/stores';

const Email: React.FC = observer(props => {
  const { common, emailTemplateStore } = useStore();
//   const links = ['京东智能制造平台', __PLATEFORM, '系统管理', '领取权益列表'];

  useEffect(() => {
    initOrderData();
  }, []);
  const initOrderData = async () => {
    await emailTemplateStore.initQueryData();
    emailTemplateStore.getEmailTemplateList();
  };
  return (
    <Wrapper>
      {/* <PathNav links={links} /> */}
      <div className="shop-order">
        <EmailQueryForm />
        <EmailTable />
      </div>
    </Wrapper>
  );
});

export const Wrapper = styled.div`
  background-color: #fff;
  .shop-order {
    padding: 15px;
    padding-top: 25px;
  }
  .show-order-title {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.85);
    margin: 15px 0 20px;
    font-weight: 500;
  }
  .item-list {
    padding-bottom: 10px;
    .item-input {
      width: 238px;
    }
    .item-span {
      width: 70px;
      padding-right: 6px;
      text-align: left;
      display: inline-block;
    }
  }
  .item-buttons {
    width: 220px;
    margin: 10px auto 30px;
    overflow: hidden;
    zoom: 1;
    .btn {
      margin: 0 5px;
      padding: 0 30px;
    }
  }
  .export-btn {
    margin-bottom: 10px;
  }
  .edit-btn {
    color: #4d80f0;
    padding: 5px 10px 5px 0;
    cursor: pointer;
    white-space: pre-wrap;
  }
  .edit-btn:hover {
    color: #5aa0ff;
  }
  .edit-btn:active {
    color: #475ccb;
  }
  span {
    word-break: break-all;
  }
  .extra-btn {
    margin-bottom: 10px;
    float: right;
  }
`;

export default Email;
