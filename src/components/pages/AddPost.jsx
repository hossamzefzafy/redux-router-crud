import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { insertPost } from '../state/PostSlice';
import { useNavigate } from 'react-router-dom';


function AddPost() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() *500)
    dispatch(insertPost({id, title, description})).then(() =>{
      navigate('/')
    })
  }
  return (
    <div>
       <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type='submit'>Submit</Button>
    </Form>
    

    </div>
  )
}

export default AddPost