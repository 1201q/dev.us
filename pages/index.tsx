import nookies from "nookies";
import { GetServerSideProps, Redirect } from "next";
import { admin } from "@/utils/firebase/admin";

import PageRender from "@/components/PageRender";

export interface ServerSideProps {
  isLogin?: boolean;
  uid?: string | null;
  url?: string;
}

export default function Home({ isLogin, uid, url }: ServerSideProps) {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: any
): Promise<{ props: ServerSideProps } | { redirect: Redirect }> => {
  return { redirect: { destination: "/team" } } as {
    redirect: Redirect;
  };
};