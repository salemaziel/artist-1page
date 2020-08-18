import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Button from 'react-bootstrap/Button'
import Buttonz from '../../Buttonz'
import { FaApple, FaSpotify, FaSoundcloud, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'gatsby'

const BioButtons = () => (
<>
<Container>
<Row>
<Col>
<Buttonz as={Link} to="#" className="">
    <FaSpotify id="iconspace"/>
Spotify
</Buttonz>
<br />
<Buttonz as={Link} to="#" className="">
    <FaSoundcloud id="iconspace"/>
SoundCloud
</Buttonz>
<br />
<Buttonz as={Link} to="#" className="">
    <FaApple id="iconspace"/>
Apple Music
</Buttonz>
<br />
<Buttonz as={Link} to="#" className="">
    <FaShoppingCart id="iconspace"/>
Shop Merch
</Buttonz>
<br />


</Col>
</Row>
</Container>
</>
)

export default BioButtons