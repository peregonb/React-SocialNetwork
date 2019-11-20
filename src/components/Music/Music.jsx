import React from 'react';
import ReactDOM from 'react-dom';
import s from './Music.module.scss';


class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetValue: ""
        }
    }

    onChangeText = e => {
        this.setState({targetValue: e.target.value});
    }

    render() {
        return (
            <div>
                <div>{this.state.targetValue}</div>
                <input type="text" onChange={this.onChangeText}/>
            </div>
        )
    }


}

export default Music;