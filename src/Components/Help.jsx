import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {setHelp} from "../redux/Text/textSlicer"

function Help() {
  const dispatch = useDispatch();
  const help = useSelector((state) => state.userText.help);

  console.log(help);
  return (
    <div className='help'>
    <button className='helpButton' onClick={() => {dispatch(setHelp())}}>HELP</button>
    </div>
  )
}

export default Help