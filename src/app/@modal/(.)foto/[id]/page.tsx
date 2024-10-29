import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/feed-modal";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

// Metadata generation function
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params; // Destructure `id` directly from `params`

  const { data } = await photoGet(id); // Fetch photo data by `id`

  // Fallback metadata in case `data` is missing
  return {
    title: data?.photo.title || "Fotos",
  };
}

// Page component function
export default async function FotoIdPage({ params }: PageProps) {
  const { id } = await params;
  const { data } = await photoGet(id);

  // Redirect to a 404 page if the photo data is not found
  if (!data) return notFound();

  // Render the `FeedModal` component with the fetched photo data
  return <FeedModal photo={data} />;
}
