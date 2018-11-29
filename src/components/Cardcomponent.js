import React, { Component } from "react";
import {Redirect } from 'react-router-dom';

export default class Cardcomponent extends Component {

constructor(props) {
  super(props);
  //this.navBack = this.navBack.bind(this);
  this.state ={
      redirect:false
  }

}

 navBack(props) {
     console.log(`componentDidMount=======>${props}`);
    this.setState({redirect: true});
  }
  render() {
      if (this.state.redirect) {
         return <Redirect push to={{ pathname: `/Portfolio`, state:`${this.props.dataSet}`}}/>;
        }

      return(
        <div className="col-md-4">
        <div className="col-md-12 border cumsover">
        <img className="card-img-top" src="https://picsum.photos/300/300/?image=41" alt="Card image cap" />
          <ul className="list-group list-group-flush">
           <li className="list-group-item">Inversted <span className="float-md-right">{this.props.volatility}</span></li>
           <li className="list-group-item">1 Month Return<span className="float-md-right">2.25%</span></li>
           <li className="list-group-item">Mean Return<span className="float-md-right">{this.props.meanReturn}</span></li>
           <li className="list-group-item">Minimum Inverstment<span className="float-md-right">{this.props.currency}{this.props.minimum}<span className="fi-arrow-thick-bottom customcol"></span></span></li>
           <li className="list-group-item">Portfolio Helth<span className="float-md-right"><span className="fi-signal"></span></span></li>

        </ul>
        <div className = "btn-group btn-block">
         <button type = "button" className = "btn btn-danger btn-block" onClick={() => this.navBack()}>Withdraw</button>
        </div>
        </div>
        </div>
      );
  }
}