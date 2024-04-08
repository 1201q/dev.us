import PageRender from "@/components/PageRender";
import { SSRType } from "@/types/types";
import getSSRAuth from "@/utils/common/getSSRAuth";
import { withUser, withUserTokenSSR } from "next-firebase-auth";

const CreateLounge = ({ url, isLogin }: SSRType) => {
  return <PageRender props={{ url, isLogin }} />;
};

export const getServerSideProps = withUserTokenSSR()(async (ctx) => {
  const url = ctx.resolvedUrl;
  let isLogin = false;

  if (ctx.user?.id) {
    await getSSRAuth(ctx.user);
    isLogin = true;
  }

  return {
    props: {
      isLogin: isLogin,
      url: url,
    },
  };
});

export default withUser<SSRType>()(CreateLounge);
