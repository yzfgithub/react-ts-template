import React, { Fragment, useState, useRef } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStore } from "../stores";

const Header: React.FC = observer(() => {
  const { common } = useStore();
  return (
    <Wrapper>
      <div className="left">商家邮件触达平台</div>
      {/* <div className='title'>自定义title名称</div> */}
      <div className="right">
        <span>{common.pin}</span>
        <a href={`${__LoginHost}${encodeURIComponent(window.location.host)}`}>
          退出
        </a>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  /* padding-left: calc(50% - 630px);
    padding-right: calc(50% - 630px); */
  background-color: #2ca7f7;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    /* background: red; */
    width: 221px;
    font-size: 18px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
  }
  .title {
  }
  .right {
    float: right;
    font-size: 12px;
    color: blue;
    height: 40px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: #ffffff;
    a {
      margin-left: 10px;
      color: #ffffff;
    }
  }
`;

export default Header;
