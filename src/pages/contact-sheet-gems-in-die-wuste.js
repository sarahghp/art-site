import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Gems = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Gems in die Wüste'
        vidLink='https://sarahghp.com/2022-02-05a-segment-a.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/02-05aa/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Gems