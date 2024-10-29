import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/feed-modal";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const id = (await params).id;

  const { data } = await photoGet(id);
  return {
    title: data?.photo.title || "Fotos",
  };
}

export default async function FotoIdPage({ params }: Props) {
  const id = (await params).id;
  const { data } = await photoGet(id);

  if (!data) return notFound();

  return <FeedModal photo={data} />;
}
