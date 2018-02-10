import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getTopTenCoins = () => {
  const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

  return async (dispatch) => {
    const request = await axios.get(url);

    dispatch({
      type: actionTypes.GET_TOP_COINS,
      payload: request,
    });
  };
};

export default getTopTenCoins;
