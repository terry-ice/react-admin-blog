import { useMutation, useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';

const GET_LABEL_QUERY = gql`
  query GET_LABEL_QUERY {
    labels: labels {
      key: id
      id
      name
      description
      slug
    }
  }
`;

const CREATE_LABEL_MUTATION = gql`
  mutation CREATE_LABEL_MUTATION(
    $name: String!
    $slug: String!
    $description: String!
  ) {
    createLabel(name: $name, slug: $slug, description: $description) {
      id
      name
      slug
      description
    }
  }
`;

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteLabel(id: $id) {
      id
    }
  }
`;
const UPDATE_LABEL_MUTATION = gql`
  mutation UPDATE_LABEL_MUTATION(
    $id: ID!
    $name: String!
    $slug: String!
    $description: String!
  ) {
    updateLabel(id: $id, slug: $slug, name: $name, description: $description) {
      id
      name
      slug
      description
    }
  }
`;

const LabelContainer = ({ children }: any) => {
  const { loading, data } = useQuery(GET_LABEL_QUERY);
  const [addLabelMutation, addLabelResult] = useMutation(
    CREATE_LABEL_MUTATION,
    {
      refetchQueries: ['GET_LABEL_QUERY']
    }
  );
  const [delLabelMutation, delLabelResult] = useMutation(DELETE_ITEM_MUTATION, {
    refetchQueries: ['GET_LABEL_QUERY']
  });
  const [updateLabelMutation, updateLabelResult] = useMutation(
    UPDATE_LABEL_MUTATION,
    { refetchQueries: ['GET_LABEL_QUERY'] }
  );
  return children({
    getLabel: { loading, data },
    addLabel: { mutation: addLabelMutation, result: addLabelResult },
    delLabel: { mutation: delLabelMutation, result: delLabelResult },
    updateLabel: {
      mutation: updateLabelMutation,
      result: updateLabelResult
    }
  });
};
export default LabelContainer;
export { GET_LABEL_QUERY };
