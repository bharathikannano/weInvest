import React, { Component } from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export default class Cardcomponent extends Component {

constructor(props) {
  super(props);
  this.navBack = this.navBack.bind(this);
  this.state ={
      redirect:false
  }

}

 navBack(props) {
     console.log(`componentDidMount=======>${props}`);
    this.setState({redirect: true});
//     this.context.router.push({
//      pathname: '/Portfolio',
//      state: props  
//  })
  }
  render() {
      if (this.state.redirect) {
         return <Redirect push to="/Portfolio" data1={this.props}/>;
        }

      return(
        <div className="container">
        <div className="col-md-12">
        <div className="row">
        <div className="col-md-3 border cumsover">
        <img className="card-img-top" src="https://picsum.photos/300/300/?image=41" alt="Card image cap" />
          <ul className="list-group list-group-flush">
           <li className="list-group-item">Inversted <span className="float-md-right">{this.props.volatility}</span></li>
           <li className="list-group-item">1 Month Return<span className="float-md-right">2.25%</span></li>
           <li className="list-group-item">Mean Return<span className="float-md-right">{this.props.meanReturn}</span></li>
           <li className="list-group-item">Minimum Inverstment<span class="float-md-right">{this.props.currency}{this.props.minimum}<span className="fi-arrow-thick-bottom customcol"></span></span></li>
           <li className="list-group-item">Portfolio Helth<span className="float-md-right"><span className="fi-signal"></span></span></li>

        </ul>
        <div className = "btn-group">
         <button type = "button" className = "btn btn-danger"><Link to={{ pathname: `/Portfolio`, state:`${this.props.dataSet}`}} >Withdraw</Link></button>
        </div>
        </div>
        </div>
        
        </div>
        </div>
      );
  }
}