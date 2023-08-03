import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface transactionsState {
    transactions: Array<object>;
    sold: Array<object>;
    value: {};
    loading: Boolean;
    error: string;
    id: string;
  }

const initialState = {
  transactions: [],
  sold: [],
  value: {},
  id: ""
} as transactionsState

const getTransactions = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/transactions', { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncTransactions = createAsyncThunk(
  'getTransactions',
  async (dataObject : object) => {
    const response = await getTransactions(dataObject);
    return response; 
  }
)
;
const getUserTransactions = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const userId = dataObject['id'];
    const response = await axios.get(`https://agreeable-tweed-jacket-dog.cyclic.cloud/transactions/${userId}`, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncUserTransactions = createAsyncThunk(
  'getUserTransactions',
  async (dataObject : object) => {
    const response = await getUserTransactions(dataObject);
    return response; 
  }
);

const getTransaction = async (dataObject : object) => {
  try {
    const response = await axios.get(`https://agreeable-tweed-jacket-dog.cyclic.cloud/transaction/${dataObject['id']}`, { headers: { 'Authorization': `Bearer ${dataObject['authToken']}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncTransaction = createAsyncThunk(
  'getTransaction',
  async (dataObject : object) => {
    const response = await getTransaction(dataObject);
    return response; 
  }
);

const getSoldProperty = async () => {
  try {
    const response = await axios.get(`https://agreeable-tweed-jacket-dog.cyclic.cloud/transactionprop`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getAsyncSoldProperty = createAsyncThunk(
  'getSoldProperty',
  async () => {
    const response = await getSoldProperty();
    return response; 
  }
);

const postTransaction = async (dataObject : object) => {
  try {
    const token = dataObject['authToken'];
    const values = {property_id : dataObject['property_id']};
    const response = await axios.post('https://agreeable-tweed-jacket-dog.cyclic.cloud/transactions', values, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const postAsyncTransaction = createAsyncThunk(
  'postTransaction',
  async (dataObject : object) => {
    const response = await postTransaction(dataObject);
    return response;
  }
);


const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setId: (state: any, action: PayloadAction<object>) => {
      state.id = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncUserTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncUserTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAsyncSoldProperty.fulfilled, (state, action) => {
      state.loading = false;
      state.sold = action.payload;
      state.error = null;
    });
    builder.addCase(getAsyncSoldProperty.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(postAsyncTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = null;
    });
    builder.addCase(postAsyncTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default transactionSlice.reducer;