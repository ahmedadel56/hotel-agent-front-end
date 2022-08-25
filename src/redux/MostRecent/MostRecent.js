const FETCH_MOST_RECENT_HOTELS = 'HotelAgentFrontEnd/MostRecent/FETCH_MOST_RECENT_HOTELS';
const initialState = { status: 'Not Fetched', data: [] };

export const success = (mostRecent) => ({
  type: FETCH_MOST_RECENT_HOTELS,
  mostRecent,
});

export const fetchMostRecentHotels = () => async (dispatch) => {
  fetch('https://infinite-falls-52470.herokuapp.com/v1/most_recent')
    .then((data) => data.json())
    .then((data) => {
      dispatch(success(data));
    })
    .catch((error) => {
      throw error;
    });
};

const mostRecentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOST_RECENT_HOTELS:
      return { data: action.mostRecent, status: 'success' };

    default:
      return state;
  }
};

export default mostRecentReducer;
