import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface UserAttributes {
    user: {
        username: String,
        email?: String,
        admin: Boolean,
        seller: Boolean,
        blogger: Boolean,
    }
    authTokens: any
}

export interface UserState {
    values: Array<object>;
    value: UserAttributes;
    loading: Boolean;
    error: string;
    id: string;
  }

const initialState = {
  values: [],
  value: {},
  id: ""
} as UserState

const getUsers = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/users', { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncUsers = createAsyncThunk(
  'getUsers',
  async (dataObject : object) => {
    const response = await getUsers(dataObject);
    return response;
  }
);

const createUser = async (userParams: object) => {
  try {
    const response = await axios.post('https://agreeable-tweed-jacket-dog.cyclic.cloud/users', userParams);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const createAsyncUser = createAsyncThunk(
  'createUser',
  async (userParams : object) => {
    const response = await createUser(userParams);
    return response;
  }
);

const login = async (dataObject : object) => {
    try {
      const response = await axios.post('https://agreeable-tweed-jacket-dog.cyclic.cloud/login', dataObject);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  
export const createAsyncLogin = createAsyncThunk(
  'login',
  async (dataObject : object) => {
    const response = await login(dataObject);
    return response;
  }
);

const logout = async (dataObject : object) => {
    try {
      const token = dataObject['authToken'];
      const response = await axios.post('https://agreeable-tweed-jacket-dog.cyclic.cloud/logout', dataObject, { headers: { 'Authorization': `Bearer ${token}` } });
      return response.data;
      
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  
export const createAsyncLogout = createAsyncThunk(
  'logout',
  async (dataObject : object) => {
    const response = await logout(dataObject);
    return response;
  }
);

const updateUsers = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const response = await axios.patch('https://agreeable-tweed-jacket-dog.cyclic.cloud/users/me', dataObject['user'], { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const updateAsyncUsers = createAsyncThunk(
  'updateUsers',
  async (dataObject : object) => {
    const response = await updateUsers(dataObject);
    return response;
  }
);

const deleteSomeUser = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject["id"];
    await axios.delete(`https://agreeable-tweed-jacket-dog.cyclic.cloud/users/${id}`,  { headers: { 'Authorization': `Bearer ${token}` } });
    const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/users', { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const deleteAsyncSomeUser = createAsyncThunk(
  'deleteUsers',
  async (dataObject : object) => {
    const response = await deleteSomeUser(dataObject);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state: any, action: PayloadAction<object>) => {
      state.id = action.payload
    },
    resetError: (state: any, action: PayloadAction<object>) => {
        state.error = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createAsyncUser.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
      
    });
    builder.addCase(createAsyncUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      
    });
    builder.addCase(getAsyncUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
      
    });
    builder.addCase(getAsyncUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      
    });
    builder.addCase(createAsyncLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(createAsyncLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(createAsyncLogout.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(createAsyncLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateAsyncUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(updateAsyncUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAsyncSomeUser.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(deleteAsyncSomeUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const userId = (state) => state.user.id;

export const { setId, resetError
 } = userSlice.actions;

export default userSlice.reducer;