import Link from 'next/link';

const AboutPageLayout = ({ children }) => {
  return (
    <div>
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default AboutPageLayout;
