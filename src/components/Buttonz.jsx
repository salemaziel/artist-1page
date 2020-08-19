
import styled, { css } from 'styled-components'


const Buttonz = styled.Button = styled.a`
  display: inline-block;
  background: rgba(0,0,0,0.05);
  border-radius: 5px;
  border: 2px solid black;
  color: black;
  margin: auto auto 15px auto;
  padding: 0.75em 2em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.65);
  width: 100%;
  font-size: 1.5rem;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  box-shadow: 5px 5px 8px 2px gray;
  @media screen and (max-width:480px){
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
  
  &:hover {
    text-decoration:none;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.65);
    -webkit-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
    box-shadow: 5px 5px 15px 5px #2f2929;
    border-color: white;
  }

  ${props => props.spotify && css`
  margin: 15px auto 15px auto;
  border: 2px solid black;
  width: 100%;
    &:hover {
      background: rgba(27,215,95,1);
      color: black;
    }
  `}

  ${props => props.soundcloud && css`

    &:hover {
      background: #F66F0E;
      color: black;
  }
`}

  ${props => props.apple && css`

    &:hover {
    background: black;
    color: white;
  }
  `}
  ${props => props.shop && css`

    &:hover {
      background: #bf2515;
      color: white;
    }
  `}


  ${props => props.mailinglist && css`
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  margin: auto;
  display: flex;
  text-transform: uppercase;
  text-align: center;
  color: #fff!important;
  width: 16rem;
  height: 3.25rem;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  line-height: 3.25rem;
  font-size: 0.875em;
  letter-spacing: 0.275rem;
  font-weight: 900;
  padding: 0px 1.625rem;
  border-radius: 0.25rem;
  transition: 0.4s ease-out;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
    &:hover {
      color: #ffc529!important;
      border: 2px solid #fff;
      text-decoration:none;
      cursor: pointer;
      transform: scale(1.05);
      transition: 0.4s ease-out;
      -webkit-transition: 0.3s all ease-in-out;
      -o-transition: 0.3s all ease-in-out;
      transition: 0.3s all ease-in-out;
    }
  `}
  ${props => props.signup && css`
    margin-left: -1rem;
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 2rem);
    color: lightgray!important;
    margin: 0 0;
    border: none;
    background:transparent;
    padding: 0 3em;
    text-shadow: none;
    &:hover {
      cursor: pointer;
      margin-left: -1rem;
      display: inline-block;
      vertical-align: middle;
      max-width: calc(100% - 2rem);
      color: darkgray!important;
      margin: 0 0;
      border: none;
      background:transparent;
      padding: 0 3em;
      text-shadow: none!important;
    }
  `}
`

export default Buttonz