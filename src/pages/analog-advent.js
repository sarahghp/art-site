import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from '../components'
import { dailies } from '../images/analog-advent'

const Videos = ({ list }) => {
    const { vid } = list;
    return (
      <div style={{ padding: "0 1rem"}}>
       { /* eslint-disable-next-line jsx-a11y/media-has-caption */ }
        <video style={{ width: '80vw', left: '10vw' }} key={vid} src={vid} controls />
      </div>
    )
}

const AnalogAdvent = () => {
  const vidWrapperStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', 
  };
  
  const detailStyles = {marginTop: '2rem', display: 'inline-block', marginRight: '10vw'}
  
  return (
    <Layout>
    
      <h3>The collected Analog Advent clips. Just cause. <Link to='/works'>See more finished works.</Link></h3>

            
      <hr />
      
      <div style={vidWrapperStyles}>
      
        {dailies.map((src, idx) => {
          const adjIdx = idx + 1;
          const title = adjIdx < 10 ? `0${adjIdx}` : adjIdx;
          return (
            <details key={title} style={detailStyles}>
              <summary className='advent-detail'>
                <h4 id={title}>{ title }</h4>
              </summary>
              
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap', 
                }}>
                  <Videos list={src} />
                </div>
              
            </details>
          )
        })}
      </div>
      
      <NavFooter current='works' />
    </Layout>
  )
}

export default AnalogAdvent
