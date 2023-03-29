import React from 'react'
import PostList from './PostList';

const Post = (props) => {
const {callback} = props
  return (
    <div>
      {
        props.posts.map( post => {
           return <PostList key={post.id} cb={callback} name={post.name} />
        })
      }
    </div>
  )
}

export default Post
