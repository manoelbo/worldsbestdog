import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Radio, Row } from 'antd';
import { updateCustom } from '../../actions/DonationActions';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const foodWaste = 'world food waste declines'
const fartArt = 'fart became an art'
const cool = 'our neighborhood is cooler'
const lazzy = 'laziness became an inspiration'
const bodyguard = 'our family does not need bodyguards anymore.'


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
                    <Divider>background animation</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'stickers', value: event.target.value })}
                        defaultValue={stickers}
                    >
                        <RadioButton value="bg-poop">Poop</RadioButton>
                        <RadioButton value="bg-pillow">Pillow</RadioButton>
                        <RadioButton value="bg-dog">Happy Dog</RadioButton>
                        <RadioButton value="bg-heart">Heart</RadioButton>
                        <RadioButton value="bg-bone">Bone</RadioButton>
                        <RadioButton value="none">None</RadioButton>
                    </RadioGroup>
                </Row>

                <Row type={'flex'} justify="center">
                    <Divider>thanks</Divider>
                    <RadioGroup
                        onChange={event => this.props.updateCustom({ prop: 'thanks', value: event.target.value })}
                        defaultValue={thanks}
                    >
                        <RadioButton value={foodWaste}>Food Waste</RadioButton>
                        <RadioButton value={fartArt}>Fart Art</RadioButton>
                        <RadioButton value={cool}>Cool</RadioButton>
                        <RadioButton value={lazzy}>Lazzy</RadioButton>
                        <RadioButton value={bodyguard}>Bodyguard</RadioButton>
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
