import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading({loading, error, children}) {
  return (
    <>
     {loading?
      (<p>Loading please wait ... <Spinner animation="border"  variant="danger" role="outbut">
        <span className="visually-hidden">Loading...</span>
      </Spinner></p>) 
      : error? (<p>{error}</p>)
      :(children) }
    </>
   
  )
}

export default Loading