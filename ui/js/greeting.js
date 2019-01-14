class Greeting extends React.Component {  
  render() {
    return (
      <span>{this.props.greeting}{this.props.suffix}</span>
    );
  }
}