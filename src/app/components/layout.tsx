// components/Layout.tsx

import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex space-x-4 p-4 bg-gray-200">
            <li><Link href="/">Home page</Link></li>
            <li><Link href="/case_studies">Case studies</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Content for each page */}
      <main>{children}</main>
    </div>
  );
}
