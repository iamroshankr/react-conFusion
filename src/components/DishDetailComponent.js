import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    
    renderComments(commentList) {

        if(commentList !== null) {
            return(
                <div className='list-unstyled'>
                    {commentList.map(commentItem => {
                        return (
                            <div className='li' key={commentItem.id} >
                                <p>{commentItem.comment}</p>
                                <p>-- {commentItem.author} {commentItem.date}</p>
                            </div>
                        );
                    })};
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        
        let selectedDish = this.props.dish;

        if(selectedDish !== null) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;