let $WM, withMethods;

$WM = withMethods = {
  defaultNames: []
};

$WM.registerRoot = (root) => {
  $WM.defaultNames = Object.getOwnPropertyNames(Object.getPrototypeOf(root));
  console.log($WM);
}

$WM.rootHOC = (ComponentWithMethod, Method) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  
  componentDidMount() {
    $WM.registerRoot(this);
    $WM.rootHOC = null; // So it cannot be used other than by one "root" component
  }
  
  render() {
    return <ComponentWithMethod {...this.props} data={this.state.data} />;
  }
}