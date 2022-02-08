import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const HomageToAldo = ({ data }) => {

  const images = data.allFile.edges;  
  
  return (
    <ContactSheet 
      images={images} 
      title='Homage to Aldo'
      vidLink='https://sarahghp.com/vids/hta.mp4'
    />
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/homage-to-aldo/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default HomageToAldo