import React from 'react'
import Head from '../head/head'

import './layout.scss'

import './bootstrap/bootstrap.scss'
import './bootstrap/bootstrap-grid.scss'
import './bootstrap/bootstrap-reboot.scss'

export default ({ children, head }) => (
	<div className='page'>
		<Head head={ head } />
		{ children }
		<footer></footer>
	</div>
)