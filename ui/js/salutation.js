class Salutation extends React.Component {
  componentDidMount() {
    withMethods.beforeRegistration(this);
  }
  
  foo() {
    console.log('foo');
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