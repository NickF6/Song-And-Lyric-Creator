import gql from 'graphql-tag';

// currying function - same as redux
export default gql`
  {
    songs {
      id
      title
    }
  }
`;