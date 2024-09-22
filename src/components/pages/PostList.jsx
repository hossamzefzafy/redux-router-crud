import { Table } from "react-bootstrap" 
import{memo} from 'react'

  
    
    
import PostHandling from "./PostHandling";

function PostList({data, loading, error , deleteRecord}) {

 
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>No</th>
        <th style={{ width: "70%" }}>Title</th>
        <th style={{ width: "10%" }}></th>
      </tr>
    </thead>
    <tbody>
     <PostHandling data={data} loading={loading} error={error} deleteRecord={deleteRecord}/>    
     </tbody>
  </Table>
  )
}

export default  memo(PostList)