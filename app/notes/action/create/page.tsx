import { Metadata } from 'next';
import CreateNote from './CreateNote';

export const metadata: Metadata = {
  title: 'Create Note',
  description: 'Create a new note.',

  openGraph: {
    title: 'Create Note',
    description: 'Create a new note.',
    url: '/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Create Note',
      },
    ],
  },
};

const CreateNotePage = () => {
  return <CreateNote />;
};

export default CreateNotePage;
