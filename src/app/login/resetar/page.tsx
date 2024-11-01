import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";
import { PageProps } from "../../../../.next/types/app/layout";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({ params }: PageProps) {
  const { searchParams } = (await params) as ResetarSearchParams;
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm
        keyToken={searchParams?.key}
        login={searchParams?.login}
      />
    </div>
  );
}
