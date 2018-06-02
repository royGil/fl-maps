import React from 'react'
import { Nav } from 'reactstrap'
import LinkItem from '../../LinkItem'
import './styles.scss'

const Category = ({ item }) => {
  const {
    title,
    content
  } = item

  return (
    <li className='category'>
      <div className='divider' />
      <Nav vertical>
        <div className='title'>{title}</div>
        {content.map((link, index) => (
          <LinkItem key={index} item={link} />
        ))}
      </Nav>
    </li>
  )
}

export default Category
