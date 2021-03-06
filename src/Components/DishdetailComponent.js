import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish() {
        if (this.props.dish != null)
            return(
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(){
        
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        if (this.props.dish != null){
            const com = this.props.dish.comments.map((comment) =>
            {
                
                return (
                    <div>
                        <ul className="list-unstyled">
                            <li>
                                <p>
                                    {comment.comment}
                                </p>
                                <p>
                                    
                                    -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)}
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                );
            })
            return(
                <div>
                    <h4>Comments</h4>
                    {com}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }
  

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;