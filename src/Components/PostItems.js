import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, updatePost } from '../Redux/PostSlice';

function PostItems() {
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const posts = useSelector(state => state.posts.items);
    const dispatch = useDispatch();

  return (
      <div>
          {posts.length > 0 ? posts.map((item) =>
              <div className='post' key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{ item.description}</p>
                  <button onClick={() => {
                      setIsEdit(true)
                      setId(item.id)

                  }}>edit</button>
                  <button onClick={()=>{dispatch(deletePost({id:item.id}))}}>delete</button>
                  <br />
                  {isEdit && id===item.id&&
                      <div className='edit-post' key={id}>
                          <input
                              value={title}
                              type='text'
                              placeholder='edit your title'
                              onChange={(e)=>{setTitle(e.target.value)}}
                          />
                          <input
                              value={description}
                              type='text'
                              placeholder='edit your description'
                              onChange={(e)=>{setDescription(e.target.value)}}
                          />
                          <button onClick={() => {
                              if (title && description) {
                                  dispatch(updatePost({ id: item.id, title: title, description: description }))
                              }
                              setIsEdit(false)
                              setTitle('')
                              setDescription('')
                          }}>update</button>
                      
                  </div>
                  }
              </div>
          )
          
               :<p className='no-post'>there is no posts !!!</p>
          }
          
      
    </div>
  )
}

export default PostItems
