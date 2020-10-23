import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Button from 'react-bootstrap/Button'
import Buttonz from '../../Buttonz'
import { FaApple, FaSpotify, FaSoundcloud, FaShoppingCart, FaYoutubeSquare  } from 'react-icons/fa'
import { SiTidal } from 'react-icons/si'
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
<Buttonz youtubemusic as={Link} to={data.siteYaml.youtube_music_link} className="" >
    <FaYoutubeSquare id="iconspace"/>
Youtube Music
</Buttonz>
<br />
<Buttonz tidal as={Link} to={data.siteYaml.tidal_link} className="" >
    <SiTidal id="iconspace"/>
Tidal Music
</Buttonz>
<br />
<Buttonz shop /*as={Link} to={data.siteYaml.shop_link}*/ href={data.siteYaml.shop_link} target="_blank" rel="noreferrer noopener" className="" >
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