import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/layout";

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const {
    params: { id },
  } = (await params) as FotoIdParams;
  const { data } = await photoGet(id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: PageProps) {
  const {
    params: { id },
  } = (await params) as FotoIdParams;
  const { data } = await photoGet(id);

  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
