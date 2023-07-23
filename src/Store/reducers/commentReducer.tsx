import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogArray } from '../../components/Home/models/BlogModel';
import { CommentsModel } from '../../components/Blog/CommentsModel';

export interface CommentsState {
    values: CommentsModel[];
    value: BlogArray;
    loading: Boolean;
    error: string;
    id: string;
  }

const initialState = {
  values: [],
  value: {},
  id: ""
} as CommentsState

const getComment = async (dataObject: object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject['id'];
    const response = await axios.get(`http://localhost:27017/comments/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncComment = createAsyncThunk(
  'getComment',
  async (dataObject: object) => {
    const response = await getComment(dataObject);
    return response;
  }
);

const getUserComments = async (dataObject: object) => {
  try {
    const token = dataObject['authToken'];
    const userId = dataObject['id'];
    const response = await axios.get(`http://localhost:27017/comments/user/${userId}`, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncUserComments = createAsyncThunk(
  'getUserComments',
  async (dataObject: object) => {
    const response = await getUserComments(dataObject);
    return response;
  }
);

const getComments = async (dataObject: object) => {
  try {
    const token = dataObject['authToken'];
    const response = await axios.get(`http://localhost:27017/comments`, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncComments = createAsyncThunk(
  'getComments',
  async (dataObject: object) => {
    const response = await getComments(dataObject);
    return response;
  }
);

const postComment = async (dataObject: object) => {
  try {
    const token = dataObject['authToken'];
    const body = {post_id : dataObject['post_id'], body : dataObject['body']};
    const response = await axios.post('http://localhost:27017/comments', body, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const postAsyncComment = createAsyncThunk(
  'postComment',
  async (dataObject : object) => {
    const response = await postComment(dataObject);
    return response;
  }
);

const updateComment = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const body = {body : dataObject['body']};
    const id = dataObject['id'];
    await axios.patch(`http://localhost:27017/comment/${id}`, body, { headers: { 'Authorization': `Bearer ${token}` } });
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const updateAsyncComment = createAsyncThunk(
  'updateComment',
  async (dataObject : object) => {
    updateComment(dataObject);
  }
);

const deleteMyComment = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject['id'];
    const userId = dataObject['userId'];
    await axios.delete(`http://localhost:27017/comment/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
    const response = await axios.get(`http://localhost:27017/comments/user/${userId}`, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const deleteAsyncMyComment = createAsyncThunk(
  'deleteMyComment',
  async (dataObject : object) => {
    const response = await deleteMyComment(dataObject);
    return response;
  }
);
const deleteComment = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject['id'];
    await axios.delete(`http://localhost:27017/comment/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
    const response = await axios.get(`http://localhost:27017/comments`, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const deleteAsyncComment = createAsyncThunk(
  'deleteComment',
  async (dataObject : object) => {
    const response = await deleteComment(dataObject);
    return response;
  }
);

const postsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setPostId: (state: any, action: PayloadAction<object>) => {
      state.id = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncComment.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncUserComments.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncUserComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncComments.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(postAsyncComment.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(postAsyncComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateAsyncComment.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateAsyncComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAsyncMyComment.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(deleteAsyncMyComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAsyncComment.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(deleteAsyncComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;