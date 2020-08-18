import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

class Navbar extends Component {
    state = {
        current: '/',
    }
    handleClick = e => {
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
    UNSAFE_componentWillMount(){
        console.log(this.props.location.pathname);   
        this.setState({
            current: this.props.location.pathname,
        });
    }
}

export default withRouter(Navbar)
