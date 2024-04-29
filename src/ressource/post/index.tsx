import PostShow from './allpost';
import PostEdit from './editpost';
import PostList from './listpost';

const post = {
  list: <PostList />,
  edit: <PostEdit />,
  show: <PostShow />,
  options: { label: 'Posts' },
};

export default post;
