import React, { Component } from "react";
import { connect } from "react-redux";
class Nav extends Component {
  hanlerId = () => {
    let prices = [];
    this.props.card.filter(id => {
      let price = this.props.pro.filter(pro => {
        return pro.id === id ;
      });
      return prices = [...prices,price[0].price];
    });
    let init = 0;
   let totals =  prices.reduce((state,action)=> action + state ,init);
  return  totals;
  };
  render() {
    return (
      <div className="card">
        <b>count basket : {this.props.card.length}</b>
        <div>total Price : {this.hanlerId()} </div>
        <span style={{color : 'red'}}>   i am a progromming web </span>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  pro: state.product,
  card: state.card
});
export default connect(mapStateToProps)(Nav);
