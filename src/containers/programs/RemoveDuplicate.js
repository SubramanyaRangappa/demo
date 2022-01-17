import React from 'react';
import { Container, Row } from 'react-bootstrap';

const RemoveDuplicate = () => {
    let arr = ["a","b","a","c"]

    const handleRemoveDuplicateForEach = arr => {
        let unique =[];
        arr.forEach(element => {
            if(!unique.includes(element))
            unique.push(element)
        });
        return unique 
    }

    const handleRemoveDuplicateFilter = arr => {
        console.log("arr",arr);
       return arr.filter((value,index)=> arr.indexOf(value)===index)
    }

    return (
        <Container>
            {/* <Row>{handleRemoveDuplicateForEach(arr)}</Row> */}
           <Row> {handleRemoveDuplicateFilter(arr)}</Row>

        </Container>
    );
};

export default RemoveDuplicate;