const withMethod = {};

withMethod.HOC = (ComponentWithMethod, Method) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  render() {
    return <ComponentWithMethod {...this.props} data={this.state.data} />;
  }
}