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
<Buttonz spotify href="https://spotify.com" className="" >
    <FaSpotify id="iconspace"/>
Spotify
</Buttonz>
<br />
<Buttonz soundcloud  href="https://soundcloud.com" className="" >
    <FaSoundcloud id="iconspace"/>
SoundCloud
</Buttonz>
<br />
<Buttonz apple  href="https://www.apple.com/apple-music/" className="" >
    <FaApple id="iconspace"/>
Apple Music
</Buttonz>
<br />
<Buttonz shop as={Link} to="#" className="" >
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