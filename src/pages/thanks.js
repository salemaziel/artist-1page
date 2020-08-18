import React from 'react'
import Card from "react-bootstrap/Card";
import Layout from '../components/layout';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import EstimateForm from '../components/estimateForm'
import { Link } from 'gatsby'


import {
    FaArrowAltCircleLeft
} from 'react-icons/fa'

const Thanks = () => (
<Layout>
    <Container>
        <Row>
            <Col>
        <Card>
            <Card.Header>
                Message Submitted Successfully
            </Card.Header>
            <Card.Body style={{padding: '2rem 1.25rem'}}>
                <Card.Title style={{marginBottom: '2rem' }}>
                    Thanks For Reaching Out
                </Card.Title>
                <Card.Subtitle style={{marginBottom: '2rem' }}>
                    We'll Be In Touch With You As Soon As Possible.
                </Card.Subtitle>

                <Button as={Link} to="/">
                <FaArrowAltCircleLeft style={{marginRight: '1rem'}}/>
                Go Back
                </Button>
            </Card.Body>
            <div style={{display: 'none'}}>
                <EstimateForm />

            </div>
        </Card>
        </Col>
        </Row>
        </Container>
</Layout>
)

export default Thanks