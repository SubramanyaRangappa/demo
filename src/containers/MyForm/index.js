import React, { useState } from 'react';
import { Container, InputGroup, FormControl, Row, Col, Button, Form } from 'react-bootstrap';

const MyForm = () => {
    const [formData, setFormData] = useState({
        firstname: '', lastname: '', martial_status: "", fruits: [],
        hobbies: {
            movies: true,
            browsing: true,
            carum: false,
            cricket: false
        },
        gender:"male",
        single_file:[],
        multiple_files:[],
        single_image : [],
        multiple_images :[],
        single_video:[],
        multiple_videos:[]
    })

    const handleChange = (e) => {
        setFormData((fV) => {
            return { ...fV, [e.target.name]: e.target.value }
        })
    }

    const handleHobbiesCheckbox = (e) => {
        setFormData((fV) => {
            return { ...fV, hobbies: { ...fV.hobbies, [e.target.name]: e.target.checked } }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("e is ", e);

        console.log("formData", formData);
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="mt-5">
                    <Col md={3}>
                        <h1>First Name</h1>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl
                                value={formData.firstname}
                                name='firstname'
                                onChange={handleChange}
                                type="text"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={3}>
                        <h1>Last Name</h1>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl
                                value={formData.lastname}
                                name='lastname'
                                onChange={handleChange}
                                type="text"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={3}>
                        <Form.Label><h1>Martial Status</h1></Form.Label>

                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Select name="martial_status" value={formData.martial_status}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widow">Widow</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={3}>
                        <Form.Label><h1>Fruits List</h1></Form.Label>

                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Select name="fruits" value={formData.fruits} multiple={true}
                                onChange={
                                    (e) => {
                                        const selectedOptions = Array.from(e.target.selectedOptions,
                                            (rec) => rec.value
                                        )
                                        setFormData((fV) => {
                                            return { ...fV, [e.target.name]: selectedOptions }
                                        })
                                    }
                                }
                            >
                                <option value="">Select</option>
                                <option value="orange">Orange</option>
                                <option value="mango">Mango</option>
                                <option value="banana">Banana</option>
                                <option value="grapes">Grapes</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={3}>
                        <Form.Label><h1>Check Box</h1></Form.Label>

                    </Col>
                    <Col>
                        <Row><Col>
                            <Form.Group>
                                <Form.Check inline type="checkbox" checked={formData.hobbies.movies}
                                    onChange={handleHobbiesCheckbox}
                                    name="movies" value={formData.hobbies.movies} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check inline type="checkbox" checked={formData.hobbies.browsing}
                                    onChange={handleHobbiesCheckbox}
                                    name="browsing" value={formData.hobbies.browsing} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check inline type="checkbox" checked={formData.hobbies.carum}
                                    onChange={handleHobbiesCheckbox}
                                    name="carum" value={formData.hobbies.carum} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check inline type="checkbox" checked={formData.hobbies.cricket}
                                    onChange={handleHobbiesCheckbox}
                                    name="cricket" value={formData.hobbies.cricket} />
                            </Form.Group> </Col></Row>
                    </Col>
                </Row>
                {/* radio start*/}
                <Row className="mt-5">
                    <Col md={3}>
                        <Form.Label><h1>Check Box</h1></Form.Label>

                    </Col>
                    <Col>
                        <Row><Col>
                        <Form.Check type="radio" name="gender" value="male" onChange={handleChange}
                        checked={formData.gender ==="male"}
                        />
                        <Form.Check type="radio" name="gender" value="female" onChange={handleChange}
                        checked={formData.gender ==="female"}
                        />
                        <Form.Check type="radio" name="gender" value="other" onChange={handleChange}
                        checked={formData.gender ==="other"}
                        />
                        
                        </Col></Row>
                    </Col>
                </Row>
                {/* radio ends */}
                {/* file start */}
                {/* single file start */}
                <Row className="mt-5">
                    <Col md={3}>
                        <h1>Single File</h1>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl
                                name='single_files'
                                onChange={(e)=>{
                                    const files=Array.from(e.target.files)
                                    setFormData((fV) => {return { ...fV, single_file:files}})
                                }}
                                type="file" 
                            />
                        </InputGroup>
                    </Col>
                </Row>
                {/* single file end */}
                {/* multiple file start */}
                <Row className="mt-5">
                    <Col md={3}>
                        <h1>Multiple File</h1>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl multiple={true}
                                name='multiple_files'
                                onChange={(e)=>{
                                    const files=Array.from(e.target.files)
                                    setFormData((fV) => {return { ...fV, multiple_files:files}})
                                }}
                                type="file" 
                            />
                        </InputGroup>
                    </Col>
                </Row>
                {/* multiple file end */}
                {/* single file video */}
                <Row className="mt-5">
                    <Col md={3}>
                        <h1>Single Video</h1>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl accept="video/*"
                                name='single_video'
                                onChange={(e)=>{
                                    const files=Array.from(e.target.files)
                                    setFormData((fV) => {return { ...fV, single_video:files}})
                                }}
                                type="file" 
                            />
                        </InputGroup>
                    </Col>
                </Row>
                {/* single video end */}
                {/* multiple video start */}
                <Row className="mt-5">
                    <Col md={3}>
                        <h1>Multiple video</h1>
                    </Col>
                    <Col>
                        <InputGroup >
                            <FormControl multiple={true} accept="video/*"
                                name='multiple_videos'
                                onChange={(e)=>{
                                    const files=Array.from(e.target.files)
                                    setFormData((fV) => {return { ...fV, multiple_videos:files}})
                                }}
                                type="file" 
                            />
                        </InputGroup>
                    </Col>
                </Row>
                {/* multiple video end */}
                {/* file ends */}
                <Row>
                    <Col>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default MyForm;