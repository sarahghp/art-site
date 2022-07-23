import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const v20220202 = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='02.02.2022'
        vidLink='https://sarahghp.com/2022-02-02-full.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/02-02/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default v20220202