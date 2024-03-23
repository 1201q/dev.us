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
  return <PageRender props={{ uid, url }} />;
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: any
): Promise<{ props: ServerSideProps } | { redirect: Redirect }> => {
  const cookies = nookies.get(ctx);
  let isLogin = false;
  let uid = null;
  let url = ctx?.resolvedUrl;

  try {
    const token = await admin?.auth().verifyIdToken(cookies.token);

    if (token) {
      uid = token.uid;
      isLogin = true;
    }

    return { props: { isLogin, uid, url } };
  } catch (error) {
    return { redirect: { destination: "/auth/login" } } as {
      redirect: Redirect;
    };
  }
};
