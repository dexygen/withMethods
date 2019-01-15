class Greetee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetee: ''
    };
  }
  
  componentDidMount() {
    setTimeout(() => {withMethods.registry.Salutation.foo()});
    this.setState({greetee: this.props.greetee + "!".repeat(this.props.excitement)})
  }
  
  render() {
    return (<span>{this.state.greetee}</span>);
  }
}