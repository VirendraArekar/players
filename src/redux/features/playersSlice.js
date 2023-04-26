import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_URL } from '../../utility/constants';
export const getPlayers = createAsyncThunk('players/getPlayers', async (args, {rejectWithValue}) => {
  try{
    const response = await axios.get(BASE_URL)
    return response.data
  }
  catch(err){
    return rejectWithValue("Opps found an error", err.response.data);
  }
})

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    products: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlayers.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.players = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getPlayers.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occurred'
      }
    })
  },
})
export default playersSlice.reducer