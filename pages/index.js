import Link from "next/link";
import Header from "@/layout/Header/Header";

export default function Home() {
  return (
    <>
      <Header>
        <main className="mx-auto h-screen w-screen flex flex-col items-center gap-5">
          <Link href="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/membership_form/1">
            <p>Membership From</p>
          </Link>
        </main>
      </Header>
    </>
  );
}
