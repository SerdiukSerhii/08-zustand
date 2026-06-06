import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getPrefetchedNoteClient } from '@/lib/prefetchNote';
import NoteDetailsClient from './NoteDetails.client';

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

const NoteDetails = async ({ params }: NoteDetailsProps) => {
  const { id } = await params;

  const queryClient = await getPrefetchedNoteClient(id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
};

export default NoteDetails;
