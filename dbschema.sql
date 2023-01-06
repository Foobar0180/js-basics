table Users {
    Id int pk
    UserName nvarchar
    Password nvarchar
    Email nvarchar
    ProfilePic nvarchar
}

table Categories {
    Id int pk
    Name nvarchar
}

table Posts {
    Id int pk
    UserId int
    CategoryId int
    Title nvarchar
    Excerpt nvarchar
    Content nvarchar
    PublishedDate datetime
    MembersOnly bool
    IsFeatured bool
    Status int              
    CommentsEnabled bool
    CommentCount int
    LikeCount int
    LastModifiedDate datetime
}

table Comments {
    Id int pk
    PostId int
    ParentCommentId int           
    UserId int         
    AuthorEmail nvarchar
    AuthorName nvarchar
    AuthorIp nvarchar
    Content nvarchar 
    IsApproved bool
    CreatedDate datetime
}

table Likes {
    UserId int
    PostId nvarchar
    LikedDate datetime
}

Ref: Posts.CategoryId > Categories.Id
Ref: Posts.UserId > Users.Id
Ref: Comments.PostId > Posts.Id
Ref: Comments.UserId > Users.Id
Ref: Likes.UserId > Users.Id
Ref: Likes.PostId > Posts.Id
