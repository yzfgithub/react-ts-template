import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const Loading:React.FC = () => {
    return <Wrapper >
        <Spin />
    </Wrapper>
}

const Wrapper = styled.div`
    line-height: 500px;
    width: 100%;
    height: 500px;
    margin: auto auto;
    text-align: center;
`

export default Loading;