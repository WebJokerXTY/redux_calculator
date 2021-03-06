import React, { Component } from 'react';
import store from "./Store";
import * as Action from './Action';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count : store.getState()
        };
    }

    onIncrement = () => {
        store.dispatch(
            Action.increment()
        );
    };

    onDecrement = () => {
        store.dispatch(
            Action.decrement()
        );
    };

    render() {
        //监听store中state的值，如果state改变，就会被触发
        store.subscribe(() => 
            this.setState({
                count: store.getState()
        }));

        return(
            <div className = "container">
                <h1 className = "text-center mt-5">{store.getState()}</h1>
                <p className = "text-center">
                  <button onClick={this.onIncrement} className="btn btn-primary mr-2">Increase</button>
                  <button onClick={this.onDecrement} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        );
    }
}