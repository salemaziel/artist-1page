import React from "react";
import Button from "react-bootstrap/Button";
import ReactWebMediaPlayer from "react-web-media-player";
import { FaPlay, FaAngleDown } from 'react-icons/fa'

import { Card, Row, Col } from 'react-bootstrap';
//import Modal from 'react-awesome-modal';
import Modal from 'react-modal'

/*
const song = [
  {
    title: "ChemTrails",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593741/chaoticorder-feedthepeople/1-Chemtrails_vvfljp.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/Chemtrails_uvyaam.jpg",
  },
  {
    title: "Feed The People",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593751/chaoticorder-feedthepeople/2-FeedThePeople_r5wbxp.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452697/chaoticorder-feedthepeople/full-images/album-cover-2500x1364-FEEDTHEPEOPLE_p3piu5.jpg",
  },
  {
    title: "Burn",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593780/chaoticorder-feedthepeople/3-BURNIT_wq3s6h.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Tower-BURN_v3zngp.jpg",
  },
  {
    title: "Another Thing",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593742/chaoticorder-feedthepeople/4-AnotherThing_qrfsn3.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/The-Wait-ANOTHERTHING_wgkuet.jpg",
  },
  {
    title: "Hate",
    singer: "Chaotic Order",
    thumbnail:
      "https://res.cloudinary.com/dexdumfqy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg",
    audio:
      "https://res.cloudinary.com/dexdumfqy/video/upload/v1579593746/chaoticorder-feedthepeople/5-HATEREPULSION_s8owm1.mp3",
    picture:
      "https://res.cloudinary.com/dexdumfqy/image/upload/v1581452698/chaoticorder-feedthepeople/full-images/the-oracle-HATE_fn2hvj.jpg",
  },
];

class Rwebmediaplayer extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: "",
      singer: "",
      thumbnail: "",
      audio: "",
      picture: "",
      lyric: "",
      classname: "",
    };
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      title: "",
      singer: "",
      thumbnail: "",
      audio: "",
      picture: "",
      lyric: "",
      classname: "",
    });
  };

  render() {
    let { thumbnail, title, description, tags, ...other } = this.props;

    return (
      <React.Fragment>
        <Modal
          visible={this.state.modalIsOpen}
          width="1000"
          height="600"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <Row style={{ display: "flex" }}>
            <div
              style={{
                backgroundImage: `url(${this.state.picture})`,
                height: "800px",
                width: "1000px",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  verticalAlign: "middle",
                }}
              >
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card.Body className="lyricsCards">
                    {this.state.lyric}
                  </Card.Body>
                  <FaAngleDown
                    className="angledown"
                    focusable="false"
                    aria-hidden="true"
                  />
                </Card>
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "77%",

                  top: "50%",
                  /*marginLeft: '-110px',
                            marginTop: '370px'* /
                }}
              >
                <ReactWebMediaPlayer
                  width={200}
                  height={200}
                  title={this.state.title}
                  thumbnail={this.state.thumbnail}
                  audio={this.state.audio}
                  vinyl={{
                    img: this.state.thumbnail,
                    rpm: 15,
                  }}
                  style={{
                    backgroundColor: "transparent",
                    background: "transparent",
                  }}
                />
                {/* <ReactWebMediaPlayer
  title="My own vinyl player"
  audio="https://any-link.com/my-music.mp3" 
  thumbnail="https://any-link.com/audio-thumbnail.jpg"
  vinyl={{img: "https://any-link.com/vinyl.jpg", rpm: 33 }}
/> * /}
              </div>
            </div>
          </Row>
        </Modal>
        <Row style={{ display: "flex" }}>
          <Col xs="2" lg="2" md="6">
            <TaggedContentCard
              className="plzwork"
              style={{ width: "200px", minWidth: "220px" }}
              thumbnail={song[0].picture}
              title="ChemTrails"
              description=""
              tags={[<FaPlay focusable="false" aria-hidden="true" />]}
              onClick={() => {
                this.setState({
                  modalIsOpen: true,
                  title: song[0].title,
                  singer: song[0].singer,
                  thumbnail: song[0].thumbnail,
                  audio: song[0].audio,
                  picture: song[0].picture,
                  lyric: song[0].lyric,
                });
              }}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Rwebmediaplayer;
*/