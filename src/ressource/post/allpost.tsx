import { ReactNode } from 'react';
import { RichTextField, Show, SimpleShowLayout, TextField } from 'react-admin';

export default function allpost(): ReactNode {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='userId' />
        <TextField source='id' />
        <TextField source='title' />
        <RichTextField source='body' />
      </SimpleShowLayout>
    </Show>
  );
}
