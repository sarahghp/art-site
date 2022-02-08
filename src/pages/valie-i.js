import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Layout, NavFooter } from '../components'

const LifeThatBelongsToValie = ({ data }) => {

  
  const images = data.allFile.edges;  
  const imgWrapperStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left'
  }
  
  return (
      <Layout wide>
      <h2>Life That Belongs to Valie, 1</h2>
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
                  alt={`Life That Belongs to Valie, Still ${idx + 1}`}
                />
              ))
            }
        </div>
      

        <NavFooter current='valie-i' />
      </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/valie-english/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default LifeThatBelongsToValie