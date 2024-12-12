import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '../components/layout'
export const metadata: Metadata = {
  title: 'Industries',
};

export default function Industries() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Industries</h1>
      <ul>
        <li><Link href="/industries/wellness">Wellness & Lifestyle</Link></li>
        <li><Link href="/industries/legal">Legal & Professional Services</Link></li>
        <li><Link href="/industries/fashion">Fashion & Sustainability</Link></li>
      </ul>
    </main>
    </Layout>
  );
}
