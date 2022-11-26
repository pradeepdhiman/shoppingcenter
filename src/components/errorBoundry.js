class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "Something went wrong" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    return this.error ? <h4>{this.state.errorInfo}</h4> : this.props.children;
  }
}

export default ErrorBoundry;
