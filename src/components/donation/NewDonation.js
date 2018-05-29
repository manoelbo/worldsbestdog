import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import CreateDonation from './CreateDonation';

class NewDonation extends Component {
    render() {
        return (
            <Row type="flex" justify="space-between">
                <Col xs={24} sm={10}>
                    <CreateDonation />
                </Col>

                <Col span={14}>
                    <Row type="flex" justify="center">
                        <Col span={22}>
                            <Card />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default NewDonation;
