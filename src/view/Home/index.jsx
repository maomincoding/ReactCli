import React, { useEffect} from 'react';
import styled from './css/index';
import { connect } from 'react-redux';
import { actionsCreator } from './store/index';
import { List } from 'antd';
import logo from "../../assets/images/logo.jpg";

const mapStateToProps = (state) => {
  return {
    name: state.getIn(['home', 'name']),
    list: state.getIn(['home', 'list']),
    datalist: state.getIn(['home', 'datalist']),
    flag: state.getIn(['home', 'flag'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handerClick() {
      dispatch(actionsCreator.click());
    },
    clickAnimation() {
      dispatch(actionsCreator.animat());
    },
    getdata() {
      dispatch(actionsCreator.getList())
    }
  }
};

const Home =(props)=>{
const { name, list, datalist, handerClick, clickAnimation, flag, getdata } = props;
const newList = datalist.toJS();
  useEffect(() => {
    document.title = 'ReactCli';
    getdata();
  }, [getdata, document.title])
  return (
      <div className={styled.container}>
          <div className={styled.home}>
            Hello {name}
          </div>
          <div className={styled.logo}>
              <img src={logo} alt="" />
          </div>
          <div className={styled.tip}>
            <p className={styled.tips}>This is a plug and play react scaffold.</p>
            <p className={styled.tips}>You can use it to build projects very quickly.</p>
          </div>
      <List
        bordered
        dataSource={newList}
        renderItem={item => (
          <List.Item>
            {item.username}
          </List.Item>
        )}
      />
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
