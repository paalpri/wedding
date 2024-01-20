import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from 'react-markdown';
import Layout from "../components/Layout";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import { Accordion } from "react-bootstrap";
import gfm from 'remark-gfm';

// eslint-disable-next-line
export const AccomodationPageTemplate = ({
  title,
  subheading,
  description,
  image,
  questions,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-12-tablet is-offset-0-tablet is-10-desktop is-offset-1-desktop">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="text-2xl">
                    {title}
                  </h2>
                  <div className="flex flex-col prose lg:prose-xl justify-center">
                    <ReactMarkdown remarkPlugins={[gfm]}>
                      {description}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-10-tablet is-offset-1-tablet is-6-desktop is-offset-3-desktop">
              <Accordion>
                {questions?.map((item, i) => (
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AccomodationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  subheading: PropTypes.string,
  description: PropTypes.string,
  questions: PropTypes.object,
};

const AccomodationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AccomodationPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        subheading={post.frontmatter.subheading}
        questions={post.frontmatter.questions}
      />
    </Layout>
  );
};

AccomodationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccomodationPage;

export const accomodationPageQuery = graphql`
  query AccomodationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        description
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
        questions {
          question
          answer
        }
      }
    }
  }
`;
