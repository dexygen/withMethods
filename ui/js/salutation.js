class Salutation extends React.Component {
  render() {
    return (
        <div>
          <Greeting greeting={'hello'} suffix={'://'} />
          <Greetee greetee="world" excitement={0} />
        </div>
    );
  }
}