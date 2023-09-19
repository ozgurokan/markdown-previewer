import {createSlice} from "@reduxjs/toolkit";

const helpText = `
# Heading

## Heading 2

### Heading 3


*italic*
**bold**

~~strikethrough~~ 

> Block Quote

Unordered List
- 1
- 2
- 3

 \` Code Block \`


[Markdown Link](https://github.com/ozgurokan?tab=repositories)
`
const initText = "# Markdown Previewer (Özgür Okan Özdal)";

const textSlicer = createSlice({
    name : "userText",
    initialState: {
        text : initText,
        help : false,
    },
    reducers:{
        addText : (state,action) => {
            state.text = action.payload;
        },
        setHelp : (state) => {
            state.help = !state.help;
            state.help ? state.text = helpText : state.text = initText;
        }
    }
});


export const {addText,setHelp} = textSlicer.actions; 
export default textSlicer.reducer;