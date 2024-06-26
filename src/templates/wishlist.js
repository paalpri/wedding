import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import { Button, Form, Spinner } from "react-bootstrap";

// eslint-disable-next-line
export const WishlistTemplate = ({
  title,
  subheading,
  description,
  image,
  formProps,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <>
      <FullWidthImage img={heroImage} subheading={subheading} />
      <section>
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop">
              <div className="section pb-0  mb-80">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <div className="tile flex flex-column gap-2">
                  <div className="text-xl">Under ligger lenken til vår ønskeliste. Mest av alt ønsker vi oss at dere kommer til Jæren for å feirer den store dagen med oss. MEN om dere likevel ønsker å gi oss noe så har vi lagt inn litt ønsker. Listen vil bli oppdatert løpende</div>
                  <div className="font-bold flex flex-row gap-2 my-4 text-3xl mb-4">
                    <div>Link: </div>
                    <a href="https://onsk.no/lister/vq3-l9y" target="_blank" rel="noopener noreferrer"
                       className="your-custom-class">Ønskeliste</a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-xl font-bold">Hvordan funker ønskelisten:</div>
                    <div className="text-xl">Vi har laget ønskelisten i onsk.no. Her har man mulighet til å se samt reservere ønsker. Dersom dere ser et "ønske" dere gjerne vil gi oss, så kan dere klikke "Reserver" på den gitte tingen. På denne måten kan andre se at "ønsket" allerede er kjøpt.</div>
                  </div>
                  </div>
              </div>
              {/*
              <div className="section">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>{formProps.name}</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder={formProps.placeholderName}
                      disabled={submissionSuccess}
                      onChange={handleChange}
                      value={inputValue.name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>{formProps.email}</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder={formProps.placeholderEmail}
                      disabled={submissionSuccess}
                      onChange={handleChange}
                      value={inputValue.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>{formProps.message}</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      maxLength={1200}
                      rows={6}
                      disabled={submissionSuccess}
                      onChange={handleChange}
                      value={inputValue.message}
                    />
                  </Form.Group>
                  {!submissionSuccess && (
                    <Button
                      type="submit"
                      variant={"outline-primary"}
                      disabled={loading}
                      onSubmit={handleSubmit}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          &nbsp;{formProps.sending}
                        </>
                      ) : (
                        formProps.send
                      )}
                    </Button>
                  )}
                  {submissionError && (
                    <p className="color-warning pt-2">{formProps.error}</p>
                  )}
                  {submissionSuccess && (
                    <p className="color-success">{formProps.success}</p>
                  )}
                </Form>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

WishlistTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  subheading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  formProps: PropTypes.object,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WishlistTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        subheading={post.frontmatter.subheading}
        description={post.frontmatter.description}
        formProps={post.frontmatter.formProps}
        content={post.html}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
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
        formProps {
          email
          placeholderEmail
          name
          placeholderName
          message
          send
          sending
          error
          success
        }
      }
    }
  }
`;
