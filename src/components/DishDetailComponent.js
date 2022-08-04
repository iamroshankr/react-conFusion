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
                <div className='container'>
                    <ul className='list-unstyled'>
                        {commentList.map(commentItem => {
                            return (
                                <li className='li' key={commentItem.id} >
                                    <p>{commentItem.comment}</p>
                                    <p>-- {commentItem.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        
        let selectedDish = this.props.dish;
        console.log(selectedDish);

        if(selectedDish !== null) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            {this.renderDish(selectedDish)}
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h4>Comments</h4>
                            {this.renderComments(selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default DishDetail;