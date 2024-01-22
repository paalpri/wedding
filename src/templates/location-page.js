import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Heading from "../components/Heading";

// eslint-disable-next-line
export const LocationPageTemplate = ({
  title,
  subheading,
  images,
  mainpitch,
  content,
  contentComponent,
  address,
  questions,
  handwrittenTitle,
  handwrittenSubtitle,
}) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(images.home) || images.home;

  return (
    <div>
      <FullWidthImage img={heroImage} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container is-widescreen">
          <div className="columns mb-0">
            <div className="column is-12-tablet is-offset-0-tablet is-10-desktop is-offset-1-desktop">
              <div className="content has-text-centered">
                <Heading
                    aboveText={handwrittenTitle}
                    belowText={handwrittenSubtitle}
                    colorClass="color-success"
                />
                <p className="subtitle  mb-5">{mainpitch.descriptionTuscany}</p>
              </div>
              <div className="column is-8 mb-5" style={{margin: "auto"}}>
                <Zoom zoomMargin={40}>
                  <GatsbyImage
                      image={images.imageLoa.childImageSharp.gatsbyImageData}
                      alt={"Tenuta Larnianone"}
                  />
                </Zoom>
              </div>
              <div className="content has-text-centered mb-5">
                <p className="subtitle">{mainpitch.descriptionTenuta}</p>
              </div>
              <div className="column is-12">
                <div className="columns mt-5 mb-5">
                  <div className="column is-4 has-text-centered-mobile">
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                      {title}
                      </h2>
                    <div className="is-size-4">
                      <h2>{address.name}</h2>
                      <p>{address.street}</p>
                      <p>{address.city}</p>
                      <p>{address.country}</p>
                      <a
                          className="font-bold"
                          href="https://maps.app.goo.gl/mPS8xz1jYZLjH52e9"
                          target="_blank"
                          rel="noreferrer"
                      >
                        <p>{address.linkToGoogle}</p>
                      </a>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <iframe
                          title="google-maps-address"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277952.76999500714!2d5.141961852159782!3d58.729795104736446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a3fe28f8d81f5%3A0xecb86549c18b4891!2sLensmannsl%C3%B8a!5e0!3m2!1sno!2sno!4v1704830239445!5m2!1sno!2sno"
                          width="600"
                          height="450"
                          style={{border: 0}}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  {/*
                  <div className="column is-8">
                    <Zoom zoomMargin={40}>
                      <GatsbyImage
                          image={
                            images.imageTenuta.childImageSharp.gatsbyImageData
                          }
                          alt={"Tenuta Larnianone"}
                      />
                    </Zoom>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
};

LocationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
      images
:
  PropTypes.object,
  subheading: PropTypes.string,
  content: PropTypes.string,
  mainpitch: PropTypes.object,
  contentComponent: PropTypes.func,
  address: PropTypes.object,
  questions: PropTypes.object,
};

const LocationPage = ({data}) => {
  const {markdownRemark: post} = data;

  return (
    <Layout>
      <LocationPageTemplate
        images={post.frontmatter.images}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        handwrittenTitle={post.frontmatter.handwrittenTitle}
        handwrittenSubtitle={post.frontmatter.handwrittenSubtitle}
        mainpitch={post.frontmatter.mainpitch}
        content={post.html}
        address={post.frontmatter.address}
        questions={post.frontmatter.questions}
      />
    </Layout>
  );
};

LocationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LocationPage;

export const locationPageQuery = graphql`
  query LocationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        handwrittenTitle
        handwrittenSubtitle
        images {
          home {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
          imageTenuta {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED)
            }
          }
          imageLoa {
            childImageSharp {
              gatsbyImageData(quality: 80, layout: CONSTRAINED)
            }
          }
        }
        mainpitch {
          descriptionTuscany
          descriptionTenuta
        }
        address {
          name
          street
          city
          country
          linkToGoogle
        }
        questions {
          question
          answer
        }
      }
    }
  }
`;
