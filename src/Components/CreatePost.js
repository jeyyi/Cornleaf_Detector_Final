import React from 'react'

export default function CreatePost() {

    const handleClick = () => {
        // Redirect to the specified page
        window.location = '/create/post'
      };
  return (
    <div><button className="btn w-full max-w-xs bg-green-400" onClick={handleClick}>Create Post</button></div>
  )
}
