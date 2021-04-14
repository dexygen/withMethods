class Salutation extends React.Component {
  componentDidMount() {
    withMethods.beforeRegistration(this);
  }
  
  foo() {
    // this seems to be properly bound by withMethods, i.e. setState is accessible
    console.log('foo', this, this.setState); 
  }
  
  bar() {
    console.log('bar');
  }
  
  render() {
    return (
        <div>
          <Greeting greeting={'hello'} suffix={'://'} />
          <Greetee greetee="world" excitement={0} />
        </div>
    );
  }
}
