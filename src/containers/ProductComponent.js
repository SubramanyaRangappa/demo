import React, { useEffect } from 'react';
import { CardGroup, Container, Card, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/actions/setProduct';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const responses = useSelector(state => state?.allProducts?.state)
    const dispatch = useDispatch();

    const renderList = responses?.map(item => {
        return <Col>
            <CardGroup>
                <Link to={`/product/${item?.id}`}>
                    <Card key={item?.id}>
                        <Card.Img variant="top" src={item?.image} />
                        <Card.Body>
                            <Card.Title>{item?.category}</Card.Title>
                            <Button>{item?.price}</Button>
                        </Card.Body>
                    </Card>
                </Link>
            </CardGroup>
        </Col>
    })

    const fetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch(err => {
                console.log("err is", err);
            })
        dispatch(setProduct(response.data))
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    console.log("responses", responses);
    return (
        <Container>
            <Row>
                <h2>Sample Project</h2>
                {renderList}
            </Row>
        </Container>
    );
};

export default ProductComponent;