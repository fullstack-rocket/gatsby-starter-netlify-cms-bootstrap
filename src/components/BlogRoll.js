import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Container>
        <Row>
          {posts &&
            posts.map(({ node: post, ...rest }, idx) => (
              <>
                <Col lg={6} key={post.id}>
                  <Card className={`m-2 p-0 ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
                    <Card.Title className="p-2">
                      <Link className="h4 text-dark text-top" to={post.fields.slug}>
                        <Row className="p-0 m-0">
                          {post.frontmatter.featuredimage ? (
                            <Col md={2} className="p-0 m-0">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.featuredimage,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </Col>
                          ) : null}
                          <Col className="p-0 m-0">{post.frontmatter.title}</Col>
                        </Row>
                      </Link>
                      <Card.Subtitle className="my-2 text-muted">{post.frontmatter.date}</Card.Subtitle>
                    </Card.Title>
                    <Card.Text className="m-2 text-justify">{post.excerpt}</Card.Text>
                    <Link className="btn btn-light" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </Card>
                </Col>
                {idx > 0 && idx % 3 ? (
                  <>
                    {/*<!-- Force next columns to break to new line at md breakpoint and up -->*/}
                    <div className="w-100 d-none d-md-block" />
                  </>
                ) : null}
              </>
            ))}
        </Row>
      </Container>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
