import React from 'react'

const getLink = (current) => {
  switch (current) {
    case 'about-art':
      return {
        next: '/works',
        prev: '/about-sarah'
      }
    
    case 'about-codie':
      return {
        next: '/about-livecode',
        prev: '/works'
      }
    
    case 'about-livecode':
      return {
        next: '/',
        prev: '/about-codie'
      }
    
    case 'about-sarah':
      return {
        prev: '/',
        next: '/about-art'
      }
    
    case 'codie-live': 
      return {
        next: '/about-codie',
        prev: '/works'
      }
      
    case 'contact-sheet': 
      return {
        prev: '/contact-sheets'
      }
    
    case 'index': 
      return {
        next: '/about-sarah'
      }
    
    case 'works': 
      return {
        next: '/about-codie',
        prev: '/about-art'
      }
      
    default:
      return {
        next: null,
        prev: null
      }
  }
}

const NavFooter = ({ current }) => {
  const prev = getLink(current).prev;
  const next = getLink(current).next;
  
  return (
    <h4
      style={{
        alignSelf: 'flex-start',
        marginTop: '2rem'
      }}>
      {prev && <a href={prev}>←</a>}&nbsp;
      <a href='/'>↑</a>&nbsp;
      {next && <a href={next}>→</a>}
    </h4>
  )
}

export default NavFooter
