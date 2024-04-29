import CommentShow from './allcoms';
import CommentEdit from './editcoms';
import CommentList from './listcoms';

const comments = {
  list: <CommentList />,
  edit: <CommentEdit />,
  show: <CommentShow />,
  options: { label: 'Comments' },
};

export default comments;
