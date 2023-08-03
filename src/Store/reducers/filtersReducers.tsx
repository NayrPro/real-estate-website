import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface FilterState {
    cities: object;
    states: object;
    sellers: object;
    loading: Boolean;
    error: string;
  }
  
  const initialState = {
    cities: {},
    states: {},
    sellers: {}
  } as FilterState

  function Cities(properties){  
    const filter = properties.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.city === current.city)) {
        accumulator.push(current);
        }
        return accumulator;
    }, []);
    const result = filter.map(({ city }) => ({ city }));
    let new_result : object = {"default" : 'Cities'};
    for (let value of Object.values(result)) {
        const key = value['city'];
        new_result[key] = value['city'];
      }
    return new_result; 
  }
  function States(properties){
    const filter = properties.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.state === current.state)) {
        accumulator.push(current);
        }
        return accumulator;
    }, []);
    const result = filter.map(({ state }) => ({ state }));
    let new_result : object = {"default" : 'States'};
    for (let value of Object.values(result)) {
        const key = value['state'];
        new_result[key] = value['state'];
      }
    return new_result; 
  }
  function Sellers(properties){
    const filter = properties.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.seller === current.seller)) {
        accumulator.push(current);
        }
        return accumulator;
    }, []);
    const result = filter.map(({ seller }) => ({ seller }));
    let new_result : object = {"default" : 'Sellers'};
    for (let value of Object.values(result)) {
        const key = value['seller'];
        new_result[key] = value['seller'];
      }
    return new_result; 
  }

  const getCities = async () => {
    try {
      const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties');
      const cities = Cities(response.data);
      return cities;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };
  const getStates = async () => {
    try {
      const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties');
      const states = States(response.data);
      return states;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };
  const getSellers = async () => {
    try {
      const response = await axios.get('https://agreeable-tweed-jacket-dog.cyclic.cloud/properties');
      const sellers = Sellers(response.data);
      return sellers;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  export const getAsyncCities = createAsyncThunk(
    'filterCities',
    async () => {
      const response = await getCities();
      return response;
    }
  );
  export const getAsyncStates = createAsyncThunk(
    'filterStates',
    async () => {
      const response = await getStates();
      return response;
    }
  );
  export const getAsyncSellers = createAsyncThunk(
    'filterSellers',
    async () => {
      const response = await getSellers();
      return response;
    }
  );
  
  export const filterSlice = createSlice({
    name: 'query',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAsyncCities.fulfilled, (state, action) => {
          state.loading = false;
          state.cities = action.payload;
          state.error = null;
        });
        builder.addCase(getAsyncCities.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
        builder.addCase(getAsyncStates.fulfilled, (state, action) => {
          state.loading = false;
          state.states = action.payload;
          state.error = null;
        });
        builder.addCase(getAsyncStates.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
        builder.addCase(getAsyncSellers.fulfilled, (state, action) => {
          state.loading = false;
          state.sellers = action.payload;
          state.error = null;
        });
        builder.addCase(getAsyncSellers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
  });
  
  export default filterSlice.reducer;