export function fetchBusinesses() {
  return (dispatch) => {
    axios.get('api/v1/businesses');
  };
}
