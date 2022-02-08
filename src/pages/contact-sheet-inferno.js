import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Inferno = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Sequencer I: Inferno'
        vidLink='https://sarahghp.com/vids/inferno.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/inferno/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Inferno