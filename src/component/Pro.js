import React, { Component } from "react";
import { addToCard , removeToCard } from "../Store/index";
import { connect } from "react-redux";
class Pro extends Component {
  hanlerId = id => {
    this.props.addToCard(id);
  };
  hanlerBtn = id => {
    if (this.props.card.indexOf(id) == -1) {
      return <button onClick={() => this.hanlerId(this.props.id)}>add</button>;
    }
    return <button className='remove' onClick={() => this.remove(this.props.id)}>remove</button>;
  };
  remove(id) {
    this.props.removeToCard(id);
  }
  render() {
    return (
      <div className="pro">
        <p>{this.props.title}</p>
        <div className="price">
          {this.props.price}
          {this.hanlerBtn(this.props.id)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  pro: state.product,
  card: state.card
});
const mapDispatchToProps = dispatch => ({
  addToCard: id => dispatch(addToCard(id)),
  removeToCard: id => dispatch(removeToCard(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pro);
