import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const v010221 = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='01.02.2021'
        vidLink='https://sarahghp.com/making/2021-01-02a.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/010221/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default v010221