import {useSelector, useDispatch} from "react-redux"
import {addText} from "../redux/Text/textSlicer";



function Input() {
  const text = useSelector((state) => state.userText.text);
  const dispatch = useDispatch()

  const handleChange = (e) => {
      dispatch(addText(e.target.value));
  }

  return (
    <div>
      <textarea name="text" id="input" cols="90" rows="30" onChange={handleChange} value={text} ></textarea>
    </div>
  )
}

export default Input