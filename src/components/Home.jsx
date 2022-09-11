import React from 'react'
import { useFetchDataQuery,useFetchDataByIdQuery,useCreateDataMutation,useUpdateDataMutation } from '../redux/apiFetch'

import loading from '../images/loading.gif'
import eloaidn from '../images/error.gif'
const Home = () => {
    const {data, isLoading, error} = useFetchDataQuery()
    // console.log('from home', data)
    // const [deletePost] = useDeleteDataByIdQuery()
  
    // const res = useFetchDataByIdQuery(2)
    
    // const [createPost,responseInfo] = useCreateDataMutation()

    const [updatePost,responseInfo] = useUpdateDataMutation()
    console.log('from home create', responseInfo)

    const updatenewPost = {
      userId: 1,
      id: 1,
      title: "This is updated post"
    }

    if(error) return <img  width='100%' src={eloaidn} alt="error" />
  return (
    <div className="container">
           {
 
           isLoading ? <img src={loading} alt="loading" />  :  
            data?.map((item) => {
                return (
                   <div key={item.id} className='card'>
                      <p>{item.title}</p>
                   </div>
                )
              })
            }

          

            {/* <button onClick={()=>createPost()}>Create</button> */}
            {/* <button onClick={()=>createPost(newPost)}>Create</button> */}

            {/* <button onClick={()=>updatePost(updatenewPost)}>Edit</button> */}
          
    </div>
  )
}

export default Home