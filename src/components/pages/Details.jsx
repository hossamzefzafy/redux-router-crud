import React from 'react'
import { useParams } from 'react-router-dom'
import usePostDetail from '../Hooks/use-post-detail'

function Details() {
  const { id } = useParams()
  const { loading, error, record } = usePostDetail(id)
  console.log(record)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!record) return <p>No post found with id: {id}</p>
  const {  title, content } = record

  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{content}</h1>
      
      
    </div>
  )
}

export default Details