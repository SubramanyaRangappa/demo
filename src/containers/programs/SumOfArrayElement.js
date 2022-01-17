import React from 'react';
import { Container } from 'react-bootstrap';

const SumOfArrayElement = () => {
    let arr = [1,2,3,4,5]
    let sumArray = []

    const SumOfArrayElementHandle = (ar) => {
        let sum = 0;
        for(let i = 0; i<ar.length; i++){
            sum = sum + ar[i]

        }
        return sum
    }

    return (
        <Container>
            {SumOfArrayElementHandle(arr)}
        </Container>
    );
};

export default SumOfArrayElement;