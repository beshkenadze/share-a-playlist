import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, tickClock, loadData } from '../actions'
import { Button } from "antd";


class Home extends React.Component {
/*  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }*/

  // componentDidMount() {
  //   this.props.dispatch(loadData())
  // }

  fetchUser = () => {
    console.log(this.props);
    this.props.dispatch(loadData());
  };

  render() {
    return <div className="hero">
      <Button type="primary" onClick={this.fetchUser.bind(this)}>Нажми</Button>
    </div>
  }
}

export default connect()(Home)
