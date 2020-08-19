import React from "react";
import Form from "react-bootstrap/Form";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//import { navigate } from "gatsby";

import estimateformStyles from "./estimateform.module.css";

///const EstimateForm = (props) => (

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function EstimateForm() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    /*e.preventDefault();*/
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      /*.then(() => navigate(form.getAttribute("action")))*/
      .then(() => alert("Sent Succesfully! We'll Respond As Soon As We Can"))
      .catch(error => alert(error));

      e.preventDefault();
  };

  return (
    <>
      <div className={estimateformStyles.formBox}>
        <div className="item-heading">
          <h3 className={estimateformStyles.title}>Contact Form</h3>
        </div>
        <form
          name="EstimateForm"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="EstimateForm" />

          <Form.Row>
            <Col>
              <Form.Group controlId="estimateFirstName">
                {/*<Form.Label>First name</Form.Label>*/}
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              {/*<Form.Group>
                <label htmlFor="name" style={{ display: "none" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  required
                  onClick={handleChange}
                />
              </Form.Group>*/}
              <Form.Group controlId="estimateLastName">
                {/*<Form.Label>First name</Form.Label>*/}
                <Form.Control 
                required 
                type="text" 
                placeholder="Last Name" 
                onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="estimateEmail">
                {/*<Form.Label>Email address</Form.Label>*/}
                <Form.Control 
                type="email" 
                placeholder="Email address" 
                onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>

              <Form.Group controlId="estimatePhone">
                {/*<Form.Label>First name</Form.Label>*/}
                <Form.Control 
                required type="tel" 
                placeholder="Phone" 
                onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            {/* <Col>
            <Form.Group>
                  <label htmlFor="streetname" style={{display: 'none'}}>Street Address</label>
                  <input
                    type="text"
                    name="streetname"
                    id="streetname"
                    placeholder="123 Your Street"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
              <Col>
            <Form.Group>
                  <label htmlFor="city" style={{display: 'none'}}>City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>
                <Col xs={2}>
            <Form.Group>
                  <label htmlFor="state" style={{display: 'none'}}>State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value="CA"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                </Col>*/}
            <Col>
              {/*<Form.Group>
                <label htmlFor="address" style={{ display: "none" }}>
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="Zip Code"
                  required
                  onChange={handleChange}
                />
              </Form.Group>* /}
              <Form.Group controlId="estimateZip">
                {/*<Form.Label>First name</Form.Label>* /}
                <Form.Control 
                required type="text" 
                placeholder="Zip Code" 
                onChange={handleChange}
                />
              </Form.Group>*/}
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                {/*<Form.Label>Job Details</Form.Label>*/}
                <Form.Control 
                as="textarea" 
                rows="3" 
                placeholder="Comments"
                onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group>
            <ul className="actions">
              <li>
                <Button
                  type="submit"
                  value="Send Message"
                  className={estimateformStyles.estimateSubmit}
                  onChange={handleSubmit}
                >
                  Submit{" "}
                </Button>
              </li>
            </ul>
          </Form.Group>
        </form>
      </div>
    </>
  );
}
