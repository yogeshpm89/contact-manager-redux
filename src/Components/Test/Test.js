import React from 'react'

class Test extends React.Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        console.log("componentDidMount...");
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            body: data.body
        }))
    }

    componentDidUpdate() {
        console.log("componentDidUpdate...");
    }

    // componentWillMount() {
    //     console.log("componentWillMount...");
    // }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate...");
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps...");
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            test: 'test1'
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate...");
    }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default Test;