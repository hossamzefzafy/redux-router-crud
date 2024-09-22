import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'
import Details from './Details'

function PostHandling({data, loading, error, deleteRecord}

) {

  const handlingDelete = (item)=>{
    if (window.confirm(`Are you sure you want to delete the post ${item.title} ?` )){
      deleteRecord(item.id)
    }

  }
  const navigate = useNavigate()
  const handleNavigate = (data)=>{
    navigate(`/post/${data.id}`)
  }
  
    const records = data.map((ele, index)=><tr key ={ele.id}>
    <td onClick={()=>handleNavigate(ele)}>{++index}</td>
    <td onClick={()=>handleNavigate(ele)}>{ele.title}</td>
    <td onClick={()=>handleNavigate(ele)}>
      {ele.describtion}
    </td>
    <td>
      <ButtonGroup aria-label="Basic example">
        <Button variant="success">Edit</Button>
        <Button variant="danger" onClick={()=>handlingDelete(ele)}>Delete</Button>
      </ButtonGroup>
    </td>
  </tr>)
  return (
    <> 
        {loading? 
        (<tr>
          <td colSpan={3}> <Spinner animation="border"  variant="danger" role="outbut">
        <span className="visually-hidden">Loading...</span>
      </Spinner></td>
        </tr>)
        :error?(<tr>
          <td colSpan={3}>  
            {error}
      </td>
        </tr>) :records}
        </>
  )
}

export default PostHandling