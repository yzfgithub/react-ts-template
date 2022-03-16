import React, { Fragment, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { History } from 'history'
import { useStore } from '@/stores';

interface ISiderProps {
    history: History;
}

const { SubMenu } = Menu;
const rootSubmenuKeys = ['category_1', 'category_2'];

const Sider:React.FC<ISiderProps> = observer(() => {
    const {router} = useStore();
    const [openKeys, setOpenKeys] = React.useState(['EmailPage']);

    const onOpenChange = (keys:any) => {
        console.log(keys)
        const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const onSelectHandle = (item: any) => {
        router.push(`/${item.key}`)
    }

    return (
        <Menu mode="inline" openKeys={openKeys} onSelect={onSelectHandle} onOpenChange={onOpenChange} style={{ width: 221, position: 'fixed', top: 40, left: 0, height: '100%' }}>
            <SubMenu key="category_1" icon={<MailOutlined />} title="邮件系统">
                <Menu.Item key="EmailTemplatePage">首页模版</Menu.Item>
                <Menu.Item key="HomePage">邮件模版</Menu.Item>
            </SubMenu>
            <SubMenu key="category_2" icon={<AppstoreOutlined />} title="其他系统">
                <Menu.Item key="1">xxxxx</Menu.Item>
            </SubMenu>
        </Menu>
    )
})


export default Sider
