
const {gql} =require('apollo-server');

module.exports=gql`
type Post{
    id:ID!
    username:String!    
    email:String!
    createdAt:String!
    body:String!
    comments:[Comment]!
    likes:[Like]!
    likeCount: Int!
    commentCount: Int!
}
type Comment{
    id: ID!
    username: String!
    createdAt: String!
    body: String!
}
type Like{
    id:ID!
    username: String!
    createdAt:String!
}
type User{
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
}
input RegisterInput{
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}
type Query{
    getPosts:[Post]
    getPost(postId:ID!):Post
    # sayHi: String!
}
type Mutation{
    register(registerInput: RegisterInput):User!
    login(username:String! password:String!):User!
    createPost(body:String!):Post!
    deletePost(postId:ID!):String!
    createComment(postId:ID! body:String!):Post!
    deleteComment(postId:ID! commentId:ID!):Post!
    likePost(postId:ID!): Post!
}
type Subscription{
    newPost:Post!
}
`