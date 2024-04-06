import { User } from "next-firebase-auth";

export default async function getSSRAuth(user: User): Promise<User> {
  const token = await user?.getIdToken();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
    method: "GET",
    headers: {
      authorization: token as string,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}
