import React, { Component } from 'react';
import { Card, Divider, Radio, Row } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class StepCustomize extends Component {
    onChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }
    render() {
        return (
            <div>

                <Divider>music</Divider>
                <Row type={'flex'} justify="center">
                    <RadioGroup onChange={this.onChange} defaultValue="a">
                        <RadioButton value="a">Angel</RadioButton>
                        <RadioButton value="b">Godness</RadioButton>
                        <RadioButton value="c">Funcky</RadioButton>
                        <RadioButton value="d">80s</RadioButton>
                    </RadioGroup>
                </Row>
                <Divider>background color</Divider>
                <Row type={'flex'} justify="center">
                    <RadioGroup onChange={this.onChange} defaultValue="a">
                        <RadioButton value="a">Pink</RadioButton>
                        <RadioButton value="b">Green</RadioButton>
                        <RadioButton value="c">Blue</RadioButton>
                        <RadioButton value="d">Purple</RadioButton>
                    </RadioGroup>
                </Row>
                <Divider>background animation</Divider>
                <Row type={'flex'} justify="center">
                    <RadioGroup onChange={this.onChange} defaultValue="a">
                        <RadioButton value="a">Snow</RadioButton>
                        <RadioButton value="b">Heart</RadioButton>
                        <RadioButton value="c">Kiss</RadioButton>
                        <RadioButton value="d">ET</RadioButton>
                        <RadioButton value="d">Candy</RadioButton>
                        <RadioButton value="d">Puppy</RadioButton>
                    </RadioGroup>
                </Row>

            </div>
        )
    }
}

export default StepCustomize;
