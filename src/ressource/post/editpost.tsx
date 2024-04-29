import { ReactNode } from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default function editpost(): ReactNode {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name='user id' label='User Id' source='userId' />
        <TextInput name='post id' label='Post Id' source='id' />
        <TextInput name='title' label='Title' source='title' required />
        <TextInput name='body' label='Body' source='body' required />
      </SimpleForm>
    </Edit>
  );
}
