import {
  AuthAction,
  User,
  useUser,
  withUser,
  withUserTokenSSR,
} from "next-firebase-auth";

const Demo = ({ thing }) => {
  console.log(thing);
  const user = useUser();

  return (
    <div>
      <p>Your email is {user.email ? user.email : "unknown"}.</p>
    </div>
  );
};

export const getServerSideProps = withUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ user }) => {
  const token = await user?.getIdToken();
  const response = await fetch("http://localhost:3000/api/auth", {
    method: "GET",
    headers: {
      authorization: token,
    } as any,
  });
  const data = await response.json();
  return {
    props: {
      thing: data.user || null,
    },
  };
});

export default withUser()(Demo);
