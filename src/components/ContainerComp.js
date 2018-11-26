import React, { Component } from "react";
import Cardcomponent from "./Cardcomponent";
import { connect } from "react-redux";

class ContainerComp extends Component {
constructor(props) {
  super(props);

}

 componentDidMount() {
   this.props.dispatch({ type: "API_CALL_REQUEST" });
  }
  render() {
    const {cData} = this.props;
      return(
        <React.Fragment>
        <div className="container">
        <h1>Hello World</h1>
        <div className="row">
       {cData ? cData.map((value, index) => <Cardcomponent key={index} dataSet={value.id} volatility={value.volatility} meanReturn={value.mean_return} currency={value.currency} minimum={value.minimum}/>) : <Cardcomponent/>}
       </div> 
       </div>
       </React.Fragment>
       );
    
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        cData: state.cData,
        error: state.error
    };
};

export default connect(mapStateToProps)(ContainerComp);