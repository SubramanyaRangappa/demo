import React, { useEffect, useState } from 'react';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/setProduct';
import axios from "axios"

const ProductDetails = () => {
    const dispatch = useDispatch();
    const productId = useParams();
    console.log("productId", productId);
    const [productItem, setProductItem] = useState({})

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId?.id}`)
            .catch(err => {
                console.log("Error is", err);
            })
        console.log("response", response);
        dispatch(selectedProduct(response?.data))
        setProductItem(response?.data)
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
        return (() => {
            dispatch(removeSelectedProduct())
        })
    }, [productId])

    return (
        <Container>
            {Object?.keys(productItem).length === 0 ? <h3>...Loading</h3> :
                <>
                    <h1>Individual Item</h1>
                    <Card key={productItem?.id}>
                        <Card.Img variant="top" src={productItem?.image} />
                        <Card.Body>
                            <Card.Title>{productItem?.category}</Card.Title>
                            <Button>{productItem?.price}</Button>
                        </Card.Body>
                    </Card></>
            }
        </Container>
    );
};

export default ProductDetails;