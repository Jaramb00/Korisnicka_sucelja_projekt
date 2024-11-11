import type { Metadata } from "next";
import Layout from "../components/layout";

export const metadata: Metadata = {
  title: "Case_studies",
};

export default function Case_studiesPage() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Case studies</h1>
      <p>Explore our case studies across different industries.</p>
    </main>
    </Layout>
    
    
  );
}