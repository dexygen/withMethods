class Salutation extends React.Component {
  render() {
    const GreetingWithMethod = withMethod.HOC(Greeting, this);
    const GreeteeWithMethod = withMethod.HOC(Greetee, this);
    
    return (
        <div>
          <GreetingWithMethod greeting={'hello'} suffix={'://'} />
          <GreeteeWithMethod greetee="world" excitement={0} />
        </div>
    );
  }
}