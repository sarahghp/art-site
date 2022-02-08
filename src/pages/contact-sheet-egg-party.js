import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const EggParty = ({ data }) => {

  const images = data.allFile.edges;  
  return (
    <ContactSheet 
      images={images} 
      title='Egg Party'
      vidLink='https://sarahghp.com/vids/egg-party.mp4'
    />
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/egg-party/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default EggParty