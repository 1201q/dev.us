import nookies from "nookies";
import { GetServerSideProps, Redirect } from "next";
import PageRender from "@/components/PageRender";
import getUser from "@/utils/common/getUser";

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
  let url = ctx?.resolvedUrl;

  const { isLogin, uid } = await getUser(cookies.token);

  if (isLogin) {
    return { props: { isLogin, uid, url } };
  } else {
    return { redirect: { destination: "/auth/login" } } as {
      redirect: Redirect;
    };
  }
};
