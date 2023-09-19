import {configureStore} from "@reduxjs/toolkit";
import textSlicer from "./Text/textSlicer"



export const store = configureStore({
    reducer: {
        userText : textSlicer
    }
});
