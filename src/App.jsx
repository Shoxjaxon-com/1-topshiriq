import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
function App() {
  function getTodo(){
    return axios.get('https://jsonplaceholder.typicode.com/todos/')
  }

  const {data,isError,isLoading} =useQuery({
    queryKey:['todos'],
    queryFn : getTodo,
    refetchInterval : 300000
  })

  console.log("data" , data?.data);


  
  return (
    <div>
      {
        !isLoading > 0 && data.data.map((item,index) =>{
          return (
            <div key={index}>
              <ul className='ml-3 mt-5'>
                <li>{item.title}</li>
                <button className='border border-red-600 p-2 rounded-md bg-red-600 text-white cursor-pointer'>delete</button>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
