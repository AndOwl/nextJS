import React from 'react'

/* components */
import Item from './Item'

export default ({ results }) => ( results.map((item, key) => <Item key={ key } result={ item } />) )