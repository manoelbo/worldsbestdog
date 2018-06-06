import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CreateDonation from './CreateDonation';
import DogWall from '../dog/DogWall';

class NewDonation extends Component {
    render() {
        return (
            <section className="newDonation">
                <Row type="flex" justify="space-around" className="flexbox-item-grow">
                    <Col xs={24} md={12} lg={10}>
                        <CreateDonation />
                    </Col>

                    <Col xs={24} md={12} lg={10}>
                        <Row type="flex" justify="center">
                            <Col span={22}>
                                <DogWall />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

        );
    }
}

export default NewDonation;
