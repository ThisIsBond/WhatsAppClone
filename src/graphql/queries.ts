/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $id: ID
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatRoomUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        chatRoom {
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $id: ID
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChatRooms(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        chatRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
