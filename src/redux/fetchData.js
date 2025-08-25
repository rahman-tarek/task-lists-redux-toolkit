import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await response.json();
    return data;
})

export default fetchData;