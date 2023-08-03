import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Property } from '../../components/Services/Property';

export interface PropertiesState {
    values: Array<object>;
    myvalues: Array<object>;
    value: Property;
    loading: Boolean;
    error: string;
    id: string;
  }

const initialState = {
  values: [],
  myvalues: [],
  value: {},
  id: ""
} as PropertiesState

export const isEmpty = (val) => {
  return val === undefined || 
    val === null || 
    (typeof(val) === "object" && Object.keys(val).length === 0) || 
    (typeof(val) === "string" && val.trim().length === 0)
}

const getProperties = async (dataObject : object) => {
  try {
    const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties', {params : dataObject});
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncProperties = createAsyncThunk(
  'getProperties',
  async (dataObject : object) => {
    for (var k in dataObject){
      if(isEmpty(dataObject[k])){
        delete dataObject[k];
      }
    }
    const response = await getProperties(dataObject);
    return response;
  }
);

const getProperty = async (dataObject : object) => {
  try {
    const id = dataObject['id'];
    const response = await axios.get(`https://agreeable-tweed-jacket-dog.cyclic.cloud/properties/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncProperty = createAsyncThunk(
  'getProperty',
  async (dataObject : object) => {
    const response = await getProperty(dataObject);
    return response;
  }
);

const postProperties = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const values = dataObject['values'];
    const response = await axios.post('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties', values, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const postAsyncProperties = createAsyncThunk(
  'postProperties',
  async (dataObject : object) => {
    const response = await postProperties(dataObject);
    return response;
  }
);

const updateProperty = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject['id'];
    const values = dataObject['values'];
    await axios.patch(`https://agreeable-tweed-jacket-dog.cyclic.cloud/properties/${id}`, values, { headers: { 'Authorization': `Bearer ${token}` } });
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const updateAsyncProperty = createAsyncThunk(
  'updateProperty',
  async (dataObject : object) => {
    await updateProperty(dataObject);
  }
);

const deleteMyProperty = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject['id'];
    const seller = {seller : dataObject['seller']};
    await axios.delete(`https://agreeable-tweed-jacket-dog.cyclic.cloud/properties/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
    const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties', {params : seller});
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const deleteAsyncMyProperty = createAsyncThunk(
  'deleteMyProperty',
  async (dataObject : object) => {
    const response = await deleteMyProperty(dataObject);
    return response;
  }
);

const deleteProperty = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const id = dataObject['id'];
    await axios.delete(`https://agreeable-tweed-jacket-dog.cyclic.cloud/properties/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
    const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const deleteAsyncProperty = createAsyncThunk(
  'deleteProperty',
  async (dataObject : object) => {
    const response = await deleteProperty(dataObject);
    return response;
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setId: (state: any, action: PayloadAction<object>) => {
      state.id = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncProperties.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(postAsyncProperties.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(postAsyncProperties.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateAsyncProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateAsyncProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAsyncMyProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(deleteAsyncMyProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAsyncProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
      state.error = null;
    });
    builder.addCase(deleteAsyncProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const propertyId = (state) => state.properties.id;

export const { setId } = propertiesSlice.actions;

export default propertiesSlice.reducer;