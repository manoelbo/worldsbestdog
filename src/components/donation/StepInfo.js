import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Col, Row, Upload, Icon, message } from 'antd';
import firebase from "@firebase/app";
import "@firebase/storage";
import ImageCompressor from 'image-compressor.js';
import { updateDog } from '../../actions/DonationActions';
const Dragger = Upload.Dragger;


class StepInfo extends Component {

    DraggerOnChange(info) {
        console.log('INFO',info)
        const status = info.file.status;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            this.props.updateDog({ prop: 'photoUrl', value: info.file.response });
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
    }

    customRequest({ onSuccess, onError, file }) {
        console.log(file)
        const imgRef = firebase.storage().ref(`/images/`).child(`${file.name}_${file.size}`);
        new ImageCompressor(file, {
            quality: .8,
            maxWidth: 800,
            success(result) {
                imgRef.put(result)
                    .then((snapshot) => {
                        snapshot.ref.getDownloadURL().then((downloadURL) => {
                            onSuccess(downloadURL, file);
                        }).catch(() => {
                            onError(null, file);
                        });

                    })
                    .catch((err) => {
                        console.log('ERROR', err);
                        message.error(err);
                        onError(null, file);

                    })
            }

        })

    }

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
                            onChange={this.DraggerOnChange.bind(this)}
                            customRequest={this.customRequest}
                            accept="image/JPG"
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
