import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import DefaultDogPic from '../../assets/img/defautDogPic.png';
import Sound from 'react-sound';

class DogWall extends Component {


    render() {
        const {
            name,
            breed,
            age,
            achievement,
            photoUrl,
        } = this.props.dog

        const {
            border,
            backgroundColor,
            backgroundMusic,
            thanks
        } = this.props.custom

        const dogName = name || '{name}';
        const dogBreed = breed || '{breed}';
        const dogAge = age || '{age}';
        const dogAchivement = achievement || '{achievement}';
        const dogPic = photoUrl || DefaultDogPic;
        const dogThanks = thanks !== 'none' ? `Thanks to ${dogName} ${thanks}.` : '';

        return (
            <div className={`dogWall ${backgroundColor}`}>

            { backgroundMusic !== 'none' &&
                <Sound
                    url={require(`../../assets/sound/${backgroundMusic}`)}
                    playStatus={Sound.status.PLAYING}
                    loop={true}
                />
            }

                <Row>
                    <Col span={24}>
                        <img className={`dogPic ${border}`} src={dogPic} alt="dog pic"/>
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>
                        <p>
                            {
                                `${dogName} is a ${dogAge} years old ${dogBreed}. His biggest achiviment was ${dogAchivement}. ${dogThanks}`
                            }

                        </p>

                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { dog, custom } = state.newDonation;
    return { dog, custom };
}

export default connect(mapStateToProps, )(DogWall);
