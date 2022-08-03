import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class CardComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardImg width='100%' src={this.props.image} alt={this.props.name} />
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardText>{this.props.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default CardComponent;