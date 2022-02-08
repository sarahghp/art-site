import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const JetsQuad = ({ data }) => {

  const images = data.allFile.edges;  
  return (
    <ContactSheet 
      images={images} 
      title='Jets to Codie: Quad'
      vidLink='https://sarahghp.com/vids/jets-quad.mp4'
    />
  )  
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/jets-quad/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default JetsQuad