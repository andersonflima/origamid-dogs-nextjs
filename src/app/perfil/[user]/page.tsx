import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import { PageProps } from "../../../../.next/types/app/layout";

export default async function PerfilUserPage({ params }: PageProps) {
  const { user } = (await params) as { user: string };
  const { data } = await photosGet({ user: user });

  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
}
