import Head from 'next/head'

export default ({ head }) => (
	<Head>
		<meta charSet='utf-8' />
		<meta name='viewport'
			  content='width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, , shrink-to-fit=no' />
		<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
		<meta name='HandheldFriendly' content='True' />
		<meta name='cleartype' content='on' />

		<title>{ head.title }</title>
	</Head>
)