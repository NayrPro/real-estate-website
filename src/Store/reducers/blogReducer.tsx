import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogArray } from '../../components/Home/models/BlogModel';

export interface PostsState {
    values: BlogArray[];
    value: BlogArray;
    loading: Boolean;
    error: string;
    id: string;
  }

const initialState = {
  values: [],
  value: {},
  id: ""
} as PostsState

const getPosts = async (dataObject: object) => {
  try {
    const response = await axios.get('http://localhost:27017/posts', {params: dataObject});
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const getPost = async (dataString : string) => {
  try {
    const response = await axios.get(`http://localhost:27017/post/${dataString}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncPosts = createAsyncThunk(
  'getPosts',
  async (dataObject: object) => {
    const response = await getPosts(dataObject);
    return response;
  }
);

export const getAsyncPost = createAsyncThunk(
  'getPost',
  async (dataString : string) => {
    const response = await getPost(dataString);
    return response;
  }
);

const postPosts = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const values = dataObject['values'];
    const response = await axios.post('http://localhost:27017/posts', values, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const postAsyncPosts = createAsyncThunk(
  'postPosts',
  async (dataObject : object) => {
    const response = await postPosts(dataObject);
    return response;
  }
);

const updatePost = async (dataObject : object) => {
  try {
    const id = dataObject['id'];
    const token = dataObject['authToken'];
    const values = dataObject['values'];
    await axios.patch(`http://localhost:27017/post/${id}`, values, { headers: { 'Authorization': `Bearer ${token}` } });
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const updateAsyncPost = createAsyncThunk(
  'updatePost',
  async (dataObject : object) => {
    await updatePost(dataObject);
  }
);

const deletePost = async (dataObject : object) => {
  try {
    const id = dataObject['id'];
    const token = dataObject['authToken'];
    const username = {author_username : dataObject['author_username']};
    await axios.delete(`http://localhost:27017/post/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
    const response = await axios.get('http://localhost:27017/posts', {params: username});
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const deleteAsyncPost = createAsyncThunk(
  'deletePost',
  async (dataObject : object) => {
    const response = await deletePost(dataObject);
    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostId: (state: any, action: PayloadAction<object>) => {
      state.id = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncPost.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(postAsyncPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(postAsyncPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateAsyncPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateAsyncPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAsyncPost.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(deleteAsyncPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const postId = (state) => state.posts.id;

export const { setPostId } = postsSlice.actions;

export default postsSlice.reducer;