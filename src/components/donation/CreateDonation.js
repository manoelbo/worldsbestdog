import React, { Component } from 'react';
import { Steps, Button, message, Card } from 'antd';
import StepInfo from './StepInfo';
import StepCustomize from './StepCustomize';
const Step = Steps.Step;

const steps = [
    {
        title: 'Info',
        content: <StepInfo/>
    },
    {
        title: 'Custom',
        content: <StepCustomize/>
    },
    {
        title: 'Payment',
        content: 'Last-content'
    }
];

class CreateDonation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <Card>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">
                    {steps[this.state.current].content}
                </div>
                <div className="steps-action">
                    {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {this.state.current === steps.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() =>
                                message.success('Processing complete!')
                            }
                        >
                            Done
                        </Button>
                    )}
                    {this.state.current > 0 && (
                        <Button
                            style={{ marginLeft: 8 }}
                            onClick={() => this.prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>
            </Card>
        );
    }
}

export default CreateDonation;
