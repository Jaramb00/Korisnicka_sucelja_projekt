import type { Metadata } from "next";
import Layout from '../../components/layout'
export const metadata: Metadata = {
  title: "Wellness",
};

export default function Wellness() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Wellness & Lifestyle</h1>
    </main>
    </Layout>
  );
}