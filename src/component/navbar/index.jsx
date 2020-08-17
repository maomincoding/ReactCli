import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="1">
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" >
                        <Link to={"/about/"}>About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={"/more/"}>More</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navbar
