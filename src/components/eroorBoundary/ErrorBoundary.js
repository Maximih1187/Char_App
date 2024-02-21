import { Component } from "react";
import ErrorMessage from "../errorMessage/Error";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error) {
    console.log(error);
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.setState.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
