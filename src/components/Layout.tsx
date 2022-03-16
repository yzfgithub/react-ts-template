import React, { Fragment, useState, useRef } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import Header from './Header';
import Sider from './Sider';
import styled from 'styled-components';
import { History } from 'history'

interface ILayoutProps {
    history: History;
}


const Layout:React.FC<ILayoutProps> = observer((props) => {
    return (
        <Wrapper>
            <Header />
            <Sider history={props.history} />
        </Wrapper>
    )
})

const Wrapper = styled.div`
    padding-top: 40px;
    width: 100%;
`

export default Layout;