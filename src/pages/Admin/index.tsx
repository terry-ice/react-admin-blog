import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    articles {
      description
      title
      id
    }
  }
`;

const Admin = () => (
  <div>
    <h1>admin Page</h1>
    <Query query={ALL_ITEMS_QUERY}>
      {(data: any) => {
        if (data.loading) {
          return <p>Loding...</p>;
        }
        if (data.error) {
          return <p>Error: {data.error.message}</p>;
        }
        return (
          <div>
            {data.data.articles.map((item: any) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);

export default Admin;
