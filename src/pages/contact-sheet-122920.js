import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const v122920 = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='12.29.2020'
        vidLink='https://sarahghp.com/vids/2020-12-29a.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/122920/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default v122920