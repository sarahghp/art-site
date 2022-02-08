import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Serrated = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Serrated'
        vidLink='https://sarahghp.com/vids/serrated.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/serrated/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Serrated