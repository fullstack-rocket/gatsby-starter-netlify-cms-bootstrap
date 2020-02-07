import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1
            className=" h1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="mt-5">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
