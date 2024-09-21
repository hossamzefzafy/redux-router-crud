import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

function PostHandling({data, loading, error, deleteRecord}

) {

  const handlingDelete = (item)=>{
    if (window.confirm('Are you sure you want to delete')){
      deleteRecord(item.id)
    }

  }
  
    const records = data.map((ele, index)=><tr key ={ele.id}>
    <td>{++index}</td>
    <td>{ele.title}</td>
    <td>
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