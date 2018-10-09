import React, { Component } from 'react';
import './input.less';

class Textarea extends Component {

    onChangeHandler = (event) => {
        this.props.onChangeHandler(event);
    };

    render() {
        return (
            <textarea onChange={this.onChangeHandler} name="message" className="textarea">{this.props.value}</textarea>
        );
    }
}

export default Textarea;
