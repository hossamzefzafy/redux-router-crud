import {useParams}from 'react-router-dom'
import  {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../state/PostSlice'

const usePostDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {loading, error, record} = useSelector((state)=> state.posts)
    useEffect(()=> {dispatch(fetchPost(id))}, [dispatch , id])
   
  return (
   {loading, error, record}
  )
}

export default usePostDetail
