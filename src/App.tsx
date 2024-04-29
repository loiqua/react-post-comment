import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import comments from './ressource/comments';
import post from './ressource/post';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='posts' {...post} />
    <Resource name='comments' {...comments} />
  </Admin>
);
