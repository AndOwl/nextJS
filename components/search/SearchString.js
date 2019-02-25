import React from 'react'

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './_search.scss'

export default ( { handleSearch } ) => (
	<Form  method="get"
		   action="/search"
		   onSubmit={ handleSearch }
		   className="container-fluid px-0">

		<InputGroup className="search__input-group">
			<FormControl
				name="keyword"
				className="search__input col-9 col-sm-8"
				placeholder="Search Shows and Peoples"
				aria-describedby="search shows and people" />
			<InputGroup.Append className="col-3 col-sm-2 px-0">
				<Button
					className="col-lg-12 search__button"
					variant="outline-secondary"
					type="submit"
					title="search"><span className="icon icon-zoom" /></Button>
			</InputGroup.Append>
		</InputGroup>

	</Form>
)
