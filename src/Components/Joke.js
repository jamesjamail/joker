import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Toast, ToastHeader, ToastBody } from 'react-bootstrap';
class Joke extends Component {
    constructor (props) {
        super(props);
        this.state = {
            jokes: []
        }
    }
    componentDidMount() {
        fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        },)
        .then((res) => res.json())
        .then((data) => {
            this.setState({jokes: data})
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
        // const jokeCache = this.state.jokes.map((joke) => (
        //     <div key={joke.id}>
        //         <h3>{joke.joke}</h3>
        //     </div>
        // ))
        return (
            // {jokeCache}
            <Container fluid="true" position="center">
                <Toast>
                    <ToastHeader>
                        <strong className="mr-auto">Jokester Dad says...</strong>
                        <small>just now</small>
                    </ToastHeader>
                    <ToastBody>{this.state.jokes.joke}</ToastBody>
                </Toast>
            </Container>
        )
    }
}

export default Joke;