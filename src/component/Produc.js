import React , { Component } from 'react';
import { connect } from 'react-redux';
import Pro from './Pro';
import Nav from './nav';

class Product extends Component{
    renderPro = () => {
        return this.props.items.map(item=>(
            <Pro key={item.id} {...item} />
        ))
    }
    render(){
        return (
            <div>
                <Nav />
               {this.renderPro()}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    items : state.product
});
export default connect(mapStateToProps)(Product);