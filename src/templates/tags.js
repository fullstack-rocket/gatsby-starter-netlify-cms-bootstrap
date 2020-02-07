import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/Layout';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="h2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;

    return (
      <Layout>
        <section className="mt-5">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <Row>
              <Col className="is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
                <h3 className="title h4">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
