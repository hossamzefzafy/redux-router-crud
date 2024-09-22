import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector  } from 'react-redux';
import { insertPost } from '../state/PostSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading'
;


function AddPost() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.posts)
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() *500)
    dispatch(insertPost({id, title, description})).unwrap().then(() =>{
      navigate('/')
    }).catch(error=>{
      console.log(error.message)
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
      <Loading loading={loading} error={error}/>
        <Button variant="primary" type='submit' disabled={loading}>Submit</Button>
      
      
    </Form>
    

    </div>
  )
}

export default AddPost