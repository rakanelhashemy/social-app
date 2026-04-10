

interface Comment {
  _id: string;
  content: string;
  commentCreator: CommentCreator;
  post: string;
  parentComment: null;
  likes: any[];
  image:string;
  createdAt: string;
  repliesCount: number;
}

interface CommentCreator {
  _id: string;
  name: string;
  username: string;
  photo: string;
}