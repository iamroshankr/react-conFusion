import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit = (values) => {
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
        this.toggleModal();
    }

    render() {
        return(
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-pencil fa-lg' /> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='col-12 mt-1'>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model='.rating' name='rating' id='rating' className='form-control' >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className='col-12 mt-1'>
                                <Label htmlFor='author'>Your Name</Label>
                                <Control.text model='.author' name='author' id='author' placeholder='Your Name' className='form-control' 
                                    validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 or less characters'
                                    }}
                                />
                            </Row>
                            <Row className='col-12 mt-1'>
                                <Label htmlFor='comment'>Comment</Label>
                                <Control.textarea model='.comment' name='comment' id='comment' rows='6' className='form-control' />
                            </Row>
                            <Button type='submit' value='submit' color='primary' >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

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
                    <CommentForm />
                </ul>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

function DishDetail(props) {
        
    let selectedDish = props.dish;
    let selectedComments = props.comments;

    if(selectedDish !== null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='col-12'>
                    <h3>{selectedDish.name}</h3>
                    <hr />
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <RenderDish dish={selectedDish} />
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <h4>Comments</h4>
                        <RenderComments commentList={selectedComments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default DishDetail;