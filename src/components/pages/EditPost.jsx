import usePostDetail from '../Hooks/use-post-detail'
import Loading from '../Loading'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { editPost } from '../state/PostSlice';
import { useNavigate} from 'react-router-dom';

function EditPost() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
 
  const {loading, error , record}= usePostDetail()
 
  
  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')
  useEffect(()=>{
    if (record && !title && !description){
      setTitle(record?.title)

      setDescription(record?.description)
      
     
    }
  },[record, title, description])
  const submitHandler = (event)=>{
    event.preventDefault()
    
    dispatch(editPost({id:record.id,  title,  description})).unwrap().then( navigate('/'))
   
  }
 
 
  return (
    
       <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>title</Form.Label>
      <Form.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>description</Form.Label>
      <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)}/>
    </Form.Group>
    <Loading loading={loading} error={error}>  
      <Button variant="primary" type='submit' disabled={loading}>Submit</Button>
      </Loading>
    
  </Form>
 
  )
}

export default EditPost