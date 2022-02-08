import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const JetsTrails = ({ data }) => {

  const images = data.allFile.edges; 
  
  return (
    <ContactSheet 
      images={images} 
      title='Jets to Codie: Trails'
      vidLink='https://sarahghp.com/vids/jets-trails.mp4'
    />
  )   
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/jets-trails/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default JetsTrails