import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem ({dish}) {
        return (
            <Card>
                {/* <Link to={`/menu/${dish.id}`}> */}

                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardTitle>{dish.label}</CardTitle>
                        <CardTitle>{dish.price}</CardTitle>
                    </CardImgOverlay>
                        <CardFooter>{dish.description}</CardFooter>
                {/* </Link> */}
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                    <div className="Col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;