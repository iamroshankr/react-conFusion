import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
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
    
function RenderComments({commentList}) {

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

function DishDetail(props) {
        
    let selectedDish = props.dish;

    if(selectedDish !== null) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={selectedDish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        <RenderComments commentList={selectedDish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default DishDetail;