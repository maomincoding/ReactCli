import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            current: '/',
        }
    }
    handleClick(e){
        this.setState({ current: e.key });
    }
    render() {
        return (
            <div>
                <Menu mode="horizontal" onClick={this.handleClick}  selectedKeys={[this.state.current]}>
                    <Menu.Item key="/">
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/about" >
                        <Link to={"/about"}>About</Link>
                    </Menu.Item>
                    <Menu.Item key="/more">
                        <Link to={"/more"}>More</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navbar
