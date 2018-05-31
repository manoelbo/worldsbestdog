import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Col, Row, Upload, Icon } from 'antd';
import { updateDog } from '../../actions/DonationActions';
const Dragger = Upload.Dragger;

class StepInfo extends Component {
    render() {
        const {
            name,
            breed,
            age,
            achievement
        } = this.props.dog;

        return (
            <div>
                <Row className="HeaderRow">
                    <h1>About Your Dog</h1>
                </Row>

                <Row className="InputRow">
                    <Col span={6} >
                        <p className="AsideLabel">Name:</p>
                    </Col>

                    <Col span={16}>
                        <Input
                            type="text"
                            placeholder="Or Whatever You Want to Call It"
                            value={name}
                            onChange={event => this.props.updateDog({ prop: 'name', value: event.target.value })}
                        />
                    </Col>
                </Row>


                <Row className="InputRow">
                    <Col span={6} >
                        <p className="AsideLabel">Breed: </p>
                    </Col>

                    <Col span={16}>
                        <Input
                            type="text"
                            placeholder="Or What Else Your Dag Is"
                            value={breed}
                            onChange={event => this.props.updateDog({ prop: 'breed', value: event.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="InputRow">
                    <Col span={6} >
                        <p className="AsideLabel">Age: </p>
                    </Col>

                    <Col span={16}>
                        <Input
                            type="number"
                            placeholder="In Dog Years or Human Years"
                            value={age}
                            onChange={event => this.props.updateDog({ prop: 'age', value: event.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="InputRow">
                    <Col span={6} >
                        <p className="AsideLabel">Achievement: </p>
                    </Col>

                    <Col span={16}>
                        <Input
                            type="text"
                            placeholder="Gratest Achivment Ever, If There Are Any..."
                            value={achievement}
                            onChange={event => this.props.updateDog({ prop: 'achievement', value: event.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="InputRow">
                    <Col span={6} >
                        <p className="AsideLabel">Photo: </p>
                    </Col>

                    <Col span={16}>
                        <Dragger
                            name="file"
                            multiple={false}
                        >
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single JPG upload</p>
                        </Dragger>
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const dog = state.newDonation.dog;
    return { dog };
}

export default connect(mapStateToProps, { updateDog })(StepInfo);
