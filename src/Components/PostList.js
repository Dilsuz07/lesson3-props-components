import React from 'react'

const PostList = (props) => {
  return (
    <div>
      <p onClick={props.cb}>{props.name}</p>
    </div>
  )
}

export default PostList
