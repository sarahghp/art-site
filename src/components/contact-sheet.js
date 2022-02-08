import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout, NavFooter } from './';

const ContactSheet = ({ images, title, vidLink }) => {
    const imgWrapperStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left'
    };
        
    return (
        <Layout wide>
        <h3> ↯ { `${title} Contact Sheet` } | ↬ <a href={ vidLink }>Video</a></h3>
          <div style={imgWrapperStyles}>
              {
                images.map( ({ node }, idx) => (
                  <GatsbyImage
                    key={idx}
                    style={{
                      margin: '.25rem',
                      flex: 1,
                      minWidth: '360px',
                    }}
                    image={getImage(node)}
                    alt={`${title} Still ${idx + 1}`}
                  />
                ))
              }
          </div>
        

          <NavFooter current='contact-sheet' />
        </Layout>
    )
}

export const query = graphql`
  fragment ContactImages on FileConnection {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
    
export default ContactSheet