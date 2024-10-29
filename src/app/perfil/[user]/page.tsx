import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

type Props = {
  params: Promise<{
    user: string;
  }>;
};

export default async function PerfilUserPage({ params }: Props) {
  const user = (await params).user;
  const { data } = await photosGet({ user: user });

  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
}
