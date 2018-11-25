import React, { Component } from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        console.log(`goddddddddd`);
        console.log(this.props.cData);
        
        const data = {...this.props.cData}, index = data[this.props.location.state], valForTab = index.constituents;
        console.log(index);
        console.log([...valForTab][0]);
        const valueforTD = valForTab.map(ind => { 
            ind.instrument.weight = ind.weight
            return ind.instrument;
        }),
        valEquity = valueforTD.filter(value => value.type === "Equity"),
        valBond = valueforTD.filter(value => value.type === "Bond"),
        valCash = valueforTD.filter(value => value.type === "CASH");
        console.log(valEquity,valBond,valCash);


        return(
            <React.Fragment>
        <div className="container">
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Portfolio Constituents</a>
    </div>
    <button className="btn btn-danger navbar-btn">Button</button>
    <button className="btn btn-danger navbar-btn">Button</button>
    <button className="btn btn-danger navbar-btn">Button</button>
  </div>
</nav>
{
}
{
// valForTab.filter(person => person.instrument.type === "Equity")    
}
{
    console.log(valueforTD)
}
<table class="table">
    <tr>
      <th scope="col">Category/Stock</th>
      <th scope="col"></th>
      <th scope="col">Model Weight(%)</th>
      <th scope="col">Weight(100%)</th>
    </tr>
  <tbody>
    <tr>
    <th scope="col">Bond</th>
    <th scope="col">+Add Bond</th>
    <th scope="col">98.6%</th>
    <th scope="col">98.6%</th>
    </tr>
    {valBond.map(value => {
        return(
        <React.Fragment>
    <tr>
        <td>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td>{value.weight}</td>
    </tr>
        </React.Fragment>)
    })}
    <tr>
    <th scope="col">Equity</th>
    <th scope="col">+Add Equity</th>
    <th scope="col">98.6%</th>
    <th scope="col">98.6%</th>
    </tr>
        {valEquity.map(value => {
        return(
        <React.Fragment>
    <tr>
        <td>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td>{value.weight}</td>
    </tr>
        </React.Fragment>)
    })}
    <tr>
    <th scope="col">CASH</th>
    <th scope="col">+Add CASH</th>
    <th scope="col">20%</th>
    <th scope="col">20%</th>
    </tr>
    {valCash.map(value => {
        return(
        <React.Fragment>
    <tr>
        <td>{value.name}</td>
        <td></td>
        <td>{value.weight}</td>
        <td>{value.weight}</td>
    </tr>
        </React.Fragment>)
    })}
  </tbody>
</table>
</div>
</React.Fragment>
        );
    }
}