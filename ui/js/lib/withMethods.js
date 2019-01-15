let $WM, withMethods;

$WM = withMethods = {
  nonRootProtos: {},
  defaultNames: [],
  registry: {}
};

$WM.registerRoot = (root) => {
  $WM.defaultNames = Object.getOwnPropertyNames(Object.getPrototypeOf(root));
  registerAll();
}

function registerAll() {
  for (let cmpName in $WM.nonRootProtos) {
    let proto = $WM.nonRootProtos[cmpName];
    let protoNames = Object.getOwnPropertyNames(proto);
    let uniqueProtoNames = protoNames.filter(nm => !$WM.defaultNames.includes(nm));
    let registrableFns = uniqueProtoNames.reduce((fns, uName) => {
      if (typeof proto[uName] === 'function') {
        fns[uName] = proto[uName];
      }
      return fns;
    }, {});
    if (Object.getOwnPropertyNames(registrableFns).length > 0) {
      $WM.registry[cmpName] = registrableFns;
    }
  }
}

$WM.beforeRegistration = (component) => {
  $WM.nonRootProtos[component.constructor.name] = Object.getPrototypeOf(component);
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