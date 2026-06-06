'use client';

import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';

const CreateNote = () => {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </section>
  );
};

export default CreateNote;
