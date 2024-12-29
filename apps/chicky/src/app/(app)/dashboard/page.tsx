import SignOutBtn from "@/components/auth/SignOutBtn";
import { getUser } from "@/lib/auth/utils";

export default async function Home() {
  const { session } = await getUser();
  return (
    <main className="">
      <h1 className="my-2 text-2xl font-bold">Profile</h1>
      <pre className="my-2 rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
        {JSON.stringify(session, null, 2)}
      </pre>
      <SignOutBtn />
    </main>
  );
}
