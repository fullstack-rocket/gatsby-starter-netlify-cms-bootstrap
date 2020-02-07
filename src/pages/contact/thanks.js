import React from 'react';
import Container from 'react-bootstrap/Container';

import Layout from '../../components/Layout';

export default () => (
  <Layout>
    <section className="mt-5">
      <Container>
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
      </Container>
    </section>
  </Layout>
);
