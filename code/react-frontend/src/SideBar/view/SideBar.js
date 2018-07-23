import React, { Component } from 'react';
import {Menu} from 'antd';
import {link} from 'react-keeper'
import "./SideBar.css"

class SideBar extends Component
{
    render()
    {
        return(
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1"><Link to='/BuildingOverview'>信息概览</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/PathsInBuilding'>路线管理</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/NodesInBuilding'>点位管理</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/ManageMessages'>公告管理</Link></Menu.Item>
            </Menu>
        )
    }
}

export default SideBar;