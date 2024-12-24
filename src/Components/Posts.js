import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Redux/PostSlice';
import PostItems from './PostItems';

function Posts() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const posts = useSelector(state => state.posts.items);
    const dispatch = useDispatch();

    const addPostItem = () => {
        if (title && description) {
            dispatch(addPost({ id: posts.length + 1, title, description }));
            setTitle('');
            setDescription('');
        }    
    }

  return (
      <div className=''>
          <div className='form'>
              <input
                  value={title}
                  type='text'
                  placeholder='enter your title'
                  onChange={(e)=>setTitle(e.target.value)}
              />
              <input
                  value={description}
                  type='text'
                  placeholder='enter your description'
                  onChange={(e)=>setDescription(e.target.value)}
              />
              <button 
                  onClick={() => {addPostItem()}}>
                  add post
              </button> 
              
          </div>

          <div className='posts' >
              <PostItems />  
          </div>
      
    </div>
  )
}

export default Posts
