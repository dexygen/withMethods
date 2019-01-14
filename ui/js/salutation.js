class Salutation extends React.Component {
  render() {
    const GreetingWithParent = withParent.HOC(Greeting, this);
    const GreeteeWithParent = withParent.HOC(Greetee, this);
    
    return (
        <div>
          <GreetingWithParent greeting={'hello'} suffix={'://'} />
          <GreeteeWithParent greetee="world" excitement={0} />
        </div>
    );
  }
}