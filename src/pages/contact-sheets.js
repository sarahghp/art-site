import React from 'react'
import { Link } from 'gatsby'
import { Layout, NavFooter } from '../components'


const List = () => (
  <Layout>
    <h2 id="contact-sheets>">Contact Sheets</h2>
    <h3> <Link to="../contact-sheet-010221">01.02.2021</Link></h3>
    <h3> <Link to="../contact-sheet-122920">12.29.2020</Link></h3>
    <h3> <Link to="../contact-sheet-serrated">Serrated</Link></h3>
    <h3> <Link to="../contact-sheet-inferno">Sequencer I: Inferno</Link></h3>
    <h3> <Link to="../contact-sheet-purgatorio">Sequencer II: Purgatorio</Link></h3>
    <h3> <Link to="../contact-sheet-paradiso">Sequencer III: Paradiso</Link></h3>
    <h3> <Link to="../contact-sheet-egg-party">Egg Party</Link></h3>
    <h3> <Link to="../contact-sheet-ich-freue-mich">Ich Freue Mich</Link></h3>
    <h3> <Link to="../contact-sheet-bean">Bean</Link></h3>
    <h3> <Link to="../contact-sheet-jets-trails">Jets to Codie: Trails</Link></h3>
    <h3> <Link to="../contact-sheet-jets-quad">Jets to Codie: Quad</Link></h3>
    <h3> <Link to="../contact-sheet-homage-to-aldo">Homage to Aldo</Link></h3>
    <h3> <Link to="../contact-sheet-colorise">Colorise</Link></h3>
    
    <NavFooter current='' />
  </Layout>
)

export default List
