# withMethods
#### withMethods is a system for creating a method registry in React

It is prefaced with `with` as React "Higher Order Components" (HOCs) frequently are, because there is one HOC, that can be run just once and is then destroyed, but withMethods also entails a library besides it's HOC functionality.

Components express their intent to register methods as follows:

    componentDidMount() {
      withMethods.beforeRegistration(this);
    }
    
It entails a sort of pre-registration as the actual entries are not put into the registry until the root element calls `registerRoot`.  This is so that all other components will have been able to pre-register, as the root component will be the last to mount.

The root component is the only one that will use the HOC, in a manner such as the following:

    const RootWithMethods = withMethods.rootHOC(Root);

    ReactDOM.render(
      <RootWithMethods />,
      document.getElementById('app-content')
    );
    
The following is how a method from another component is called:

    componentDidMount() {
      setTimeout(() => { withMethods.forCmpName('Salutation').foo() });
    }
    
Components do have to know the method names within other components, but this might be an OK solution for small applications, as opposed to the overkill that might be Redux.
