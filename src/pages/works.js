import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from '../components'
import { worksList } from '../works/'

const Images = ({
  list
}) => {
  const imgWidth = list.length > 1 ? '49.5%' : '100%';
  return list.map(({ img, desc, alt }, idx) => {
    return (
       <div style={{ width: imgWidth, padding: 0 }}>
        <img style={{ width: '100%'}} key={img.toString()} alt={alt || desc} src={img} />
        {!!desc && <p className='art-caption'>{desc}</p>}
      </div>
    )
  })
}

const Videos = ({ list }) => {
  return list.map(({posterPath, vid, caption}) => {
    return (
      <div style={{ padding: "0 1rem"}}>
        { /* eslint-disable-next-line jsx-a11y/media-has-caption */ }
        <video 
          style={{ width: '100%', paddingRight: 0 }} 
          key={vid.toString()} 
          src={vid} 
          controls
          controlsList='nodownload' 
        />
        
        <p><em>{caption}</em></p>
      </div>
    )
  })
}

const Works = () => {
  const photoWrapperStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  };
  
  return (
    <Layout>
    
      <h3>Installation views and videos from selected works. See more works and more details with <Link to='/contact-sheets'>contact sheets and videos</Link> or <Link to='/about-art'>read more about my approach.</Link></h3>
            
      {worksList.map(( { title, desc, photos, vids, forceOpen }) => {
        const processedTitle = title.split(' ').map(el => el.toLowerCase()).join('-');
        const [ feat01, feat02, ...remainderPhotos ] = photos;
        return (
          <>
            <hr />
            <details open={forceOpen} key={title} style={{
                marginTop: '2rem', 
                paddingBottom: '3rem', 
                position: 'relative'
              }}>
              <summary>
                <h4 id={processedTitle}>{ title }</h4>
                <em>{ desc() }</em>
                
                {
                  !!photos.length && 
                    <div style={photoWrapperStyles}>
                      <Images key={`feature-${processedTitle}`} list={[feat01, feat02].filter(Boolean)} />
                    </div>
                  }
                
              </summary>
              
              {
                !!remainderPhotos.length && 
                <div style={photoWrapperStyles}>
                  <Images key={`remainder-${processedTitle}`} list={remainderPhotos} />
                </div>
              }

              {
                !!vids && 
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap', 
                  }}>
                    <Videos list={vids} />
                  </div>
                  
              }
              
            </details>
          </>

        )
      })}
      
      <NavFooter current='works' />
    </Layout>
  )
}

export default Works
