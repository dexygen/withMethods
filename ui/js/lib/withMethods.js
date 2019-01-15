const withMethods = (function() {
  let registry = {};
  let wm = {
    nonRootProtos: {},
    defaultNames: [],
  };
  
  wm.rootHOC = (ComponentWithMethod, Method) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }

    componentDidMount() {
      wm.registerRoot(this);
      wm.rootHOC = null; // So it cannot be used other than by one "root" component
    }

    render() {
      return <ComponentWithMethod {...this.props} data={this.state.data} />;
    }
  };
  
  wm.registerRoot = (root) => {
    wm.defaultNames = Object.getOwnPropertyNames(Object.getPrototypeOf(root));
    registerOthers();
  };

  function registerOthers() {
    for (let cmpName in wm.nonRootProtos) {
      let proto = wm.nonRootProtos[cmpName];
      let protoNames = Object.getOwnPropertyNames(proto);
      let uniqueProtoNames = protoNames.filter(nm => !wm.defaultNames.includes(nm));
      let registrableFns = uniqueProtoNames.reduce((fns, uName) => {
        if (typeof proto[uName] === 'function') {
          fns[uName] = proto[uName].bind(proto);
        }
        return fns;
      }, {});
      if (Object.getOwnPropertyNames(registrableFns).length > 0) {
        registry[cmpName] = registrableFns;
      }
    }
  };
  
  wm.beforeRegistration = (component) => {
    wm.nonRootProtos[component.constructor.name] = Object.getPrototypeOf(component);
  };
  
  wm.forCmpName = function(cmpName) {
    return registry[cmpName];
  }
  
  return wm;
})();