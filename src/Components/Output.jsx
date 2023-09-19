import React from 'react'
import {useSelector} from "react-redux";
import {marked} from "marked";

marked.setOptions({
  breaks : true,
})
function Output() {
  const text = useSelector((state) => state.userText.text);
  return (
    <div className='output'>
    <div dangerouslySetInnerHTML={{__html : marked(text)}}></div>
    </div>
  )
}

export default Output