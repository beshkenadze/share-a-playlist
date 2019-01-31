import fetch from 'isomorphic-fetch';

const configureApi = (config) => {
  return {
    fetchUser: (payload) => {
      console.log('fetchUser');
      return fetch(`https://www.reddit.com/r/${payload.reddit}.json`)
        .then(response => response.json())
        .then(json => json.data.children.map(child => child.data))
    }
  }
};
export default configureApi