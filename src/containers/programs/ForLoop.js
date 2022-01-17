import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ForLoop = () => {
    const [states2, setStates2] = useState("")
    const [repeatCount, setRepeatCount] = useState({})
    const handleFunction = (states) => {
        let reverse = ""
        for(let i =states?.length -1 ; i>= 0 ; i--){
            console.log("is",i);
            console.log(states[i]);
            reverse = reverse + states[i]
            // console.log("reverse",reverse);
        }
        setStates2(reverse)
        console.log("reverse",reverse);
    }
    useEffect(()=>{
         handleFunction("ssss  eee")
    },[states2])

    //missing number start
    const handleMissingNumber = (n,arr) => {
       let sum1 = n*(n+1)/2;
        let sum2 = 0
        for(let i = 0;i<arr.length;i++){
            sum2 = sum2 + arr[i]
        }
        console.log("sum",sum1,sum2);
        return sum1-sum2
    }
    //missing number end

    //Repeating letter Count start
    useEffect(()=>{
        handleRepeatLetter(['h','e','l','l','o'])
   },[])
    const handleRepeatLetter = (arr) => {
        let obj={};
        for(let i = 0;i<arr.length;i++){
            let item = arr[i]
            if(obj[item]){
                obj[item]++
            } else {
                obj[item] = 1
            }
        }
        setRepeatCount(obj)
    }
    //Repeating letter Count end

    //max char start
    const [maxCharacter, setMaxCharacter] = useState(0)
    const [maxCharacters, setMaxCharacters] = useState("")
    useEffect(()=>{
        handleMaxCharacter(['h','e','l','l','o','o','o'])
   },[])
    const handleMaxCharacter = (arr) => {
        let max = 0;let maxC='';let obj={}
        for(let i of arr){
            if(obj[i]){
                obj[i]++;
                max=obj[i]
            } else {
                obj[i] = 1
            }
        if(obj[i] > max)
        setMaxCharacters(i)
        max = obj[i]
        setMaxCharacter(max)
        }    
    }
    //max char end


    return (
        <Container>
            <h1>Reverse</h1>
            {/* {states2} */}
            <h1>Missing number</h1>
            {/* {handleMissingNumber(10,[1,2,3,4,5,6,8,9,10])} */}
            <h1>Repeating letter Count</h1>
            {console.log("repeatCount",repeatCount)}
            {/* {Object.keys(repeatCount)} */}
            <h1>Find the max character</h1>
            {console.log("maxCharacter",maxCharacter)}
            {maxCharacters+" : "+maxCharacter}
        </Container>
    );
};

export default ForLoop