import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Paradiso = ({ data }) => {

  const images = data.allFile.edges;  
  
    return (
      <ContactSheet 
        images={images} 
        title='Sequencer III: Paradiso'
        vidLink='https://sarahghp.com/vids/paradiso.mp4'
      />
    )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/paradiso/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Paradiso