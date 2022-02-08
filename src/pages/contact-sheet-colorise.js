import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const Colorise = ({ data }) => {

  const images = data.allFile.edges;  
  return (
    <ContactSheet 
      images={images} 
      title='Colorise'
      vidLink='https://sarahghp.com/vids/colorise.mp4'
    />
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/colorise/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default Colorise