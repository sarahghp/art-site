import React from 'react'
import { graphql } from 'gatsby'
import { ContactSheet } from '../components'

const IchFreueMich = ({ data }) => {

  const images = data.allFile.edges;  
  return (
    <ContactSheet 
      images={images} 
      title='Ich Freue Mich'
      vidLink='https://sarahghp.com/vids/ifm.mp4'
    />
  )  
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/ich-freue-mich/"}} sort: {fields: relativePath}) {
      ...ContactImages
    }
  }
`
    
export default IchFreueMich