import type { Metadata } from "next";
import Layout from '../../components/layout'
export const metadata: Metadata = {
  title: "Fashion",
};

export default function Fashion() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Fashion</h1>
    </main>
    </Layout>
  );
}