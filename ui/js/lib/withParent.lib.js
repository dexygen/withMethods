const withParent = {};

withParent.HOC = (ComponentWithParent, parent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  render() {
    return <ComponentWithParent {...this.props} data={this.state.data} />;
  }
}