import React from 'react';

/*
function App(props){
    return (
        <h1>{props.msg}</h1>
    )
}
*/

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loaded: false,
            text: 'works again?',
            placeholder: 'this is the placeholder'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({
            loaded: true
        })
    }

    handleChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }
    handleClick(event){
        if (this.state.loaded === false){
            this.setState({
                loaded: true
            })
        } else {
            this.setState({
                loaded: false
            })
        }
        
    }


    render(){
        if (this.state.loaded === true){
            return (
                <React.Fragment> {/* I didn't notice a difference when switching from wrapping divs to react fragments... */}
                    <h1>{this.props.msg} and... drum roll please... {this.state.text}</h1>
                    <input placeholder={this.state.placeholder} onChange={this.handleChange} ></input>
                    <br />
                    <button onClick={this.handleClick}>This button toggles the loaded status</button>
                </React.Fragment>
                )
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>This button toggles the loaded status</button>
                </React.Fragment>
            )
        }
    }
}

export default App