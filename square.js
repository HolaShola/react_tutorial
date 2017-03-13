export default class Square extends React.Component {
    /*constructor() {
        super();
        this.state = {
            value: null,
        };
    }*/
    render() {
        return (
            <button className="square" onClick={() => this.props.foo()}
             //onClick={() => this.setState({value: "X"})}
             >
                {this.props.value}
            </button>
        );
    }
}