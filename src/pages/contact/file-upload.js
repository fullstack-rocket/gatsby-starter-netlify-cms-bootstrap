import React from "react";
import { navigate } from "gatsby-link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Layout from "../../components/Layout";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Container>
          <h1>File Upload</h1>
          <Form
            name="file-upload"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="file-upload" />
            <div hidden>
              <Form.Group controlId="bot-field">
                <Form.Label>Don’t fill this out:</Form.Label>
                <Form.Control onChange={this.handleChange} />
              </Form.Group>
            </div>
            <Form.Group controlId="name">
              <Form.Label>Your name</Form.Label>
              <Form.Control onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group controlId="attachment">
              <Form.Label>Choose a file…</Form.Label>
              <Form.Control type="file" onChange={this.handleAttachment} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Container>
      </Layout>
    );
  }
}
