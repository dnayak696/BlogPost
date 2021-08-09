/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlogpost = /* GraphQL */ `
  query GetBlogpost($id: ID!) {
    getBlogpost(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const listBlogposts = /* GraphQL */ `
  query ListBlogposts(
    $filter: ModelBlogpostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogposts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
