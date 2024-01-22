import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  imageUs,
  title,
  content,
  contentComponent,
  date,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} subheading={date} />
      <section className="section section--gradient">
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column is-12-tablet is-offset-0-tablet is-10-desktop is-offset-1-desktop">
              <div className="content flex flex-col items-center justify-center">
                <div className="content flex flex-col items-center justify-center">
                  <h2 className="title is-size-3 has-text-weight-semibold has-text-centered">
                    {mainpitch.title}
                  </h2>
                  <div className="text-center flex flex-col justify-items-start items-center max-w-2xl text-lg text-black">
                    <p className="font-bold">Kjære venner og familie,</p>
                    <p>10.08.24 klokka 14:30, sier vi endelig JA til hverandre i Lensmannsløa her på vakre, vindfulle Jæren.</p>
                    <p>Hvorfor Jæren tenker du? Jo- Da brudgommen er herifra og bruden har forelsket seg både i han og det nydelige landskapet (og ikke minst råvarene som finnes her) ble denne plassen et naturlig valg for oss når vi skulle finne en plass å feire kjærligheten.</p>
                    <p>Selv om både vær og vind er ganske så uforutsigbart her borte på Vestlandet, kan vi likevel forutsi at dette vil bli en uforglemmelig dag, og vi håper dere vil dele den med oss. </p>
                    <p>Så bli med å feire oss med en bryllupsfest som vil blåse dere av banen- muligens bokstavelig talt! </p>
                    <p><p className="font-bold">Dresscode:</p> Pent (Dress/ Kjole), Ta med en genser til kvelden da låven ikke er godt isolert.
                    </p>
                    <p className="mt-4 flex flex-row italic text-base"><p className="text-base font-bold">NB!</p> Denne nettsiden inneholder all informasjon om vår store dag, så les i vei!
                      Husk også å fylle inn RSVP skjemaet slik at vi vet om du vil ha muligheten til å komme.</p>
                  </div>
                </div>
                <div className="">
                  <Zoom zoomMargin={40}>
                    <GatsbyImage
                      image={imageUs.childImageSharp.gatsbyImageData}
                      alt={"us"}
                      style={{ maxWidth: '600px'}}
                    />
                  </Zoom>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered my-10">
                    <p
                      style={{
                        position: "relative",
                        top: "-20px",
                        marginBottom: "-20px",
                      }}
                      className="text-6xl lg:text-8xl mt-4 font-northwell color-info"
                    >
                      {subheading}
                    </p>
                  </div>
                </div>
                <div className="font-bold text-2xl">Kommer snart, sjekk inn nermere dagen</div>
                <span className="font-bold text-2xl">Seremonien starter kl. 14:30</span>
                {/*
                <Features gridItems={intro.blurbs} />
                */}
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="is-offset-1 has-text-centered"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.object,
  imageUs: PropTypes.object,
  title: PropTypes.string,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  date: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        imageUs={frontmatter.imageUs}
        content={frontmatter.html}
        contentComponent={HTMLContent}
        title={frontmatter.title}
        date={frontmatter.date}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
        imageUs {
          childImageSharp {
            gatsbyImageData(quality: 80, layout: CONSTRAINED)
          }
        }
        date
        heading
        subheading
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 80, layout: CONSTRAINED)
              }
            }
            headline
            subheading
            text
          }
          heading
        }
        description
      }
    }
  }
`;
