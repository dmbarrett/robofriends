import React, {Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true
        })
    }

    render() {
        return this.state.hasError ? 
            <h1>oops, there was an error</h1> :

            this.props.children
    }
}

export default ErrorBoundary