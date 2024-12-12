// components/Layout.tsx

import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex space-x-4 p-4 bg-gray-200">
            <li><Link href="/" className="text-1xl font-bold tracking-tight">Home page</Link></li>
            <li><Link href="/case_studies" className="text-1xl font-bold tracking-tight">Case studies</Link></li>
            <li><Link href="/industries" className="text-1xl font-bold tracking-tight">Industries</Link></li>
            <li><Link href="/services" className="text-1xl font-bold tracking-tight">Services</Link></li>
            <li><Link href="/blog" className="text-1xl font-bold tracking-tight">Blog</Link></li>
            <li><Link href="/about" className="text-1xl font-bold tracking-tight">About us</Link></li>
            <li><Link href="/contact" className="text-1xl font-bold tracking-tight">Contact us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Content for each page */}
      <main>{children}</main>
    </div>
  );
}
