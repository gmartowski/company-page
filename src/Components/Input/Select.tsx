import React, { Component } from 'react';
import './input.less';

class Select extends Component {

    onChangeHandler = (event) => {
        this.props.onChangeHandler(event);
    };

    render() {
        const {name, value, children} = this.props;
        return (
            <select className="select"
                    name={name}
                    id={name}
                    onChange={this.onChangeHandler}
                    value={value}
            >
                {
                    Object.keys(children).map((item) => (
                        <option key={children[item].id} value={children[item].name}>
                            {children[item].name}
                        </option>
                    ))
                }
            </select>
        );
    }
}

export default Select;
