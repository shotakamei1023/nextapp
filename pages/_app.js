import Link from "next/link";


const MyApp = ({ Component, pageProps }) => {
  return (
    <div>

      {/* Container */}
      <div>

        {/* Header */}
        <header>
          <h1>My Website</h1>
        </header>

        {/* Nav */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Main */}
        <main>
          <Component {...pageProps} />
        </main>
      </div>

      {/* Footer */}
      <footer>
        <div>
          Powered by <a href="https://nextjs.org/">Next.js</a>
        </div>
      </footer>
    </div>
  );
};

export default MyApp;