import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';

export const TestPage = () => {

	const [resourceType, setResourceType] = useState(null)

	console.log(resourceType);
	console.log("===============")

	useEffect(() => {
		console.log('resource type changed');
	},[])


  return (
		<Container className='text-light'>
			<button onClick={() => setResourceType('posts')}> posts </button>
			<button onClick={() => setResourceType('users')}> users </button>
			<button onClick={() => setResourceType('comments')}> comments </button>

			<h1> {resourceType} </h1>

		</Container>
	)
}
