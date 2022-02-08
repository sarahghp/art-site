import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Bean = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Bean'
        vidLink='https://sarahghp.com/vids/bean.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/beanz/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Bean