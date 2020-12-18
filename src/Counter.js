import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: false,
    };

    this.incrementChange = this.incrementChange.bind(this);
    this.decrementChange = this.decrementChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handlereset = this.handlereset.bind(this);
  }

  incrementChange() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementChange() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  handleClear() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handlereset() {
    this.setState({ count: 0 });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 5000);
  }

  

  render() {
    return (
      <div className="counter container col-sm-4 py-5">
        <div className="counter-context">
          <p className="text-bold">
            It's{" "}
            <span style={{ color: "#55B4B0" }}>
              {new Date().toLocaleTimeString()}
            </span>
          </p>
          <button
            className="btn btn-outline-primary"
            onClick={this.handleClear}
          >
            Clear
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={this.handleShow}
            style={{ marginLeft: "10px" }}
          >
            Show
          </button>
          {this.state.show && (
            <div>
              <div className="py-4">
                <h1>Count</h1>
                <h2>{this.state.count}</h2>
              </div>
              <div className="row justify-content-center">
                <button
                  className="float-left btn btn-outline-success col-sm-4"
                  onClick={this.incrementChange}
                >
                  +
                </button>
                <button
                  className="float-right btn btn-outline-danger text-center col-sm-4"
                  onClick={this.decrementChange}
                >
                  -
                </button>
              </div>
              <button
                className="btn btn-outline-info "
                style={{ marginTop: "20px" }}
                onClick={this.handlereset}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Counter;
