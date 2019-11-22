import React from "react";
import { connect } from "react-redux";
import { incrementCounter } from "../action";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
          {this.props.counter}
        <div onClick={this.props.incrementCounter}>Clikc</div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { counter } = state.countereducer;
  console.log("counter", {...state.countereducer});
  return {
    counter
  };
};


const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
