import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const TwoUpTwo = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Two-Up No. 2'
        vidLink='https://sarahghp.com/two-up-2.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/02-03a/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default TwoUpTwo