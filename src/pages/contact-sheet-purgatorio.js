import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Purgatorio = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Sequencer II: Purgatorio'
        vidLink='https://sarahghp.com/vids/purgatorio.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/purgatorio/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Purgatorio