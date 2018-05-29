import React, { Component } from 'react';
import { Input } from 'antd';

class StepInfo extends Component {
    onChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }
    render() {
        return (
            <div>

                <p>Dog Name: </p>
                <Input />

            </div>
        )
    }
}

export default StepInfo;
