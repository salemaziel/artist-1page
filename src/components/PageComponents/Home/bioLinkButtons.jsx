import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Button from 'react-bootstrap/Button'
import Buttonz from '../../Buttonz'
import { FaApple, FaSpotify, FaSoundcloud, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'gatsby'

const BioButtons = ({data}) => (
<>
<Container>
<Row>
<Col>
<Buttonz spotify href={data.siteYaml.spotify_link} className="" >
    <FaSpotify id="iconspace"/>
Spotify
</Buttonz>
<br />
<Buttonz soundcloud  href={data.siteYaml.soundcloud_link} className="" >
    <FaSoundcloud id="iconspace"/>
SoundCloud
</Buttonz>
<br />
<Buttonz apple  href={data.siteYaml.apple_music_link} className="" >
    <FaApple id="iconspace"/>
Apple Music
</Buttonz>
<br />
<Buttonz shop as={Link} to={data.siteYaml.shop_link} className="" >
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