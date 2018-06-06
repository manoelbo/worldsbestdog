import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Radio, Row } from 'antd';
import { updateCustom } from '../../actions/DonationActions';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class StepCustomize extends Component {
    onChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }
    render() {
        const {
            border,
            backgroundColor,
            backgroundMusic,
            stickers,
            thanks
        }  = this.props.custom;

        return (
            <div>
                <Row type={'flex'} justify="center">
                    <Divider>border</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'border', value: event.target.value })}
                        defaultValue={border}
                    >
                        <RadioButton value="border-black">Black</RadioButton>
                        <RadioButton value="border-wood">Wood</RadioButton>
                        <RadioButton value="border-pink">Hot Pink</RadioButton>
                        <RadioButton value="border-silver">Silver</RadioButton>
                        <RadioButton value="border-gold">Gold</RadioButton>
                        <RadioButton value="none">None</RadioButton>
                    </RadioGroup>
                </Row>


                <Row type={'flex'} justify="center">
                    <Divider>music</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'backgroundMusic', value: event.target.value })}
                        defaultValue={backgroundMusic}
                    >
                        <RadioButton value="bensound-ukulele.mp3">Happy Folk</RadioButton>
                        <RadioButton value="America_the_Beautiful.mp3">Classic</RadioButton>
                        <RadioButton value="When_Johnny_Comes_Marching_Home.mp3">Army</RadioButton>
                        <RadioButton value="Honey_Bee.mp3">Funky</RadioButton>
                        <RadioButton value="none">None</RadioButton>
                    </RadioGroup>
                </Row>

                <Row type={'flex'} justify="center">
                    <Divider>background color</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'backgroundColor', value: event.target.value })}
                        defaultValue={backgroundColor}
                    >
                        <RadioButton value="bg-pink">Pink</RadioButton>
                        <RadioButton value="bg-retro-wave">Retro Wave</RadioButton>
                        <RadioButton value="bg-blue">Blue</RadioButton>
                        <RadioButton value="bg-gold">Gold</RadioButton>
                        <RadioButton value="bg-silver">Silver</RadioButton>
                        <RadioButton value="none">None</RadioButton>
                    </RadioGroup>
                </Row>

                <Row type={'flex'} justify="center">
                    <Divider>stickers</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'stickers', value: event.target.value })}
                        defaultValue={stickers}
                    >
                        <RadioButton value="a">Snow</RadioButton>
                        <RadioButton value="b">Heart</RadioButton>
                        <RadioButton value="c">Kiss</RadioButton>
                        <RadioButton value="d">ET</RadioButton>
                        <RadioButton value="none">None</RadioButton>
                    </RadioGroup>
                </Row>

                <Row type={'flex'} justify="center">
                    <Divider>thanks</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'thanks', value: event.target.value })}
                        defaultValue={thanks}
                    >
                        <RadioButton value="a">Snow</RadioButton>
                        <RadioButton value="b">Heart</RadioButton>
                        <RadioButton value="c">Kiss</RadioButton>
                        <RadioButton value="d">ET</RadioButton>
                        <RadioButton value="d">Candy</RadioButton>
                        <RadioButton value="none">None</RadioButton>
                    </RadioGroup>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const custom  = state.newDonation.custom;
    return { custom };
}

export default connect(mapStateToProps, {updateCustom})(StepCustomize);
