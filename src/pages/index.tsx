import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Rolph</title>
        <meta
          name="description"
          content="Jordan Rolph is a Product Designer & Software Engineer from Portsmouth, England."
        />
        <meta property="og:title" content="Jordan Rolph" key="title" />
        <meta
          property="og:description"
          content="Jordan Rolph is a Product Designer & Software Engineer from Portsmouth, England."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main
        className={`${inter.className} anti min-h-screen bg-gradient-to-tr from-sky-50 via-pink-50 via-70% to-white px-4 antialiased`}
      >
        <div className="mx-auto max-w-prose pb-20">
          <nav className="pt-10 md:pt-16">
            <ul className="flex text-lg text-[#6D6DA1]">
              <li>
                <Link href="/">
                  <svg
                    className="w-24 text-indigo-500 hover:text-[#3B3B64]"
                    viewBox="0 0 99 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_265_8466)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.26203 1.9831C22.7606 0.630986 38.7606 0 49.3522 0C65.3972 0 81.4423 0.630986 97.4423 1.93803C97.7851 1.96093 98.1063 2.11343 98.3406 2.36456C98.575 2.61569 98.705 2.94662 98.7043 3.29014V27.9437C98.7072 28.2731 98.5898 28.5923 98.374 28.8413C98.1582 29.0902 97.859 29.2519 97.5324 29.2958C82.7944 31.0986 66.7043 32 49.3522 32C32.0001 32 15.9099 31.0986 1.17188 29.2958C0.845363 29.2519 0.54611 29.0902 0.330336 28.8413C0.114562 28.5923 -0.00288603 28.2731 5.38857e-05 27.9437V3.33521C-0.000710282 2.99169 0.129305 2.66076 0.363694 2.40963C0.598083 2.1585 0.919271 2.006 1.26203 1.9831Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.98616 21.2727C6.94661 21.2041 6.92578 21.1264 6.92578 21.0473C6.92578 20.9682 6.94661 20.8905 6.98616 20.822L8.33828 19.4698C8.51856 19.3346 8.74391 19.2896 8.87912 19.4698C9.14954 19.6952 9.3749 19.8755 9.91574 19.8755C10.4566 19.8755 11.0876 19.3797 11.0876 18.3881V9.0135C11.0876 8.83322 11.2228 8.65294 11.4481 8.65294H13.8819C14.1073 8.65294 14.2425 8.83322 14.2425 9.0135V18.3881C14.2425 21.1374 12.3045 22.7149 10.0059 22.7149C8.24814 22.7149 7.30166 21.7234 6.98616 21.2727ZM17.0369 15.5938C17.0369 11.6276 20.1918 8.47266 24.1129 8.47266C25.0481 8.47266 25.9741 8.65685 26.8381 9.01472C27.702 9.37259 28.4871 9.89713 29.1483 10.5584C29.8096 11.2196 30.3341 12.0047 30.692 12.8686C31.0499 13.7326 31.2341 14.6586 31.2341 15.5938C31.2341 16.5289 31.0499 17.4549 30.692 18.3189C30.3341 19.1829 29.8096 19.9679 29.1483 20.6292C28.4871 21.2904 27.702 21.815 26.8381 22.1728C25.9741 22.5307 25.0481 22.7149 24.1129 22.7149C20.1467 22.7149 17.0369 19.56 17.0369 15.5938ZM20.1918 15.5938C20.1918 17.7572 21.9946 19.56 24.1129 19.56C25.1648 19.56 26.1736 19.1421 26.9174 18.3983C27.6613 17.6545 28.0791 16.6457 28.0791 15.5938C28.0791 14.5419 27.6613 13.5331 26.9174 12.7893C26.1736 12.0455 25.1648 11.6276 24.1129 11.6276C21.9946 11.6276 20.1918 13.4304 20.1918 15.5938ZM34.3439 22.1741V9.0135C34.3439 8.83322 34.4791 8.65294 34.7045 8.65294H40.6538C42.9974 8.65294 44.9805 10.591 44.9805 12.9346C44.9805 14.7374 43.7636 16.2248 42.0059 16.9008L44.7101 21.9487C44.8904 22.2191 44.7101 22.5346 44.3946 22.5346H41.7805C41.7167 22.5352 41.6538 22.5188 41.5984 22.4871C41.543 22.4555 41.497 22.4096 41.465 22.3543L38.7608 17.0811H37.4087V22.1741C37.4087 22.3543 37.2284 22.5346 37.0031 22.5346H34.7045C34.6088 22.5346 34.5171 22.4966 34.4495 22.429C34.3819 22.3614 34.3439 22.2697 34.3439 22.1741ZM37.4087 14.6022H40.3383C41.1495 14.6022 41.8256 13.836 41.8256 12.9797C41.8256 12.1684 41.1495 11.4924 40.3383 11.4924H37.4087V14.6022ZM48.2256 22.1741V9.0135C48.2256 8.83322 48.4059 8.65294 48.5862 8.65294H53.4538C57.2397 8.65294 60.3946 11.8079 60.3946 15.5938C60.3946 19.4248 57.2397 22.5346 53.4538 22.5346H48.5862C48.4059 22.5346 48.2256 22.3543 48.2256 22.1741ZM51.3355 19.6051H53.2284C55.4819 19.6051 57.1045 17.8022 57.1045 15.5487C57.1045 13.2952 55.4819 11.5825 53.2284 11.5825H51.3805V19.6051H51.3355ZM61.8819 22.5346C61.6115 22.5346 61.4312 22.2642 61.5664 22.0389L67.7411 8.65294C67.8312 8.5628 67.9664 8.47266 68.1017 8.47266H68.2819C68.4171 8.47266 68.5524 8.5628 68.6425 8.65294L74.8171 22.0839C74.9524 22.3093 74.8171 22.5797 74.5017 22.5797H72.2932C71.9326 22.5797 71.7974 22.4445 71.6171 22.0839L70.896 20.5065H65.4876L64.7664 22.0839C64.6763 22.3543 64.4509 22.5797 64.0904 22.5797H61.8819V22.5346ZM66.7045 17.7572H69.6791L68.1918 14.5121L66.7045 17.7572ZM77.1157 22.1741V8.83322C77.1157 8.60787 77.296 8.47266 77.4763 8.47266H77.9721L85.9045 16.0896V9.0135C85.9045 8.83322 86.0848 8.65294 86.265 8.65294H88.6538C88.8791 8.65294 89.0594 8.83322 89.0594 9.0135V22.3543C89.0594 22.5797 88.8791 22.7149 88.6538 22.7149H88.3383C88.2932 22.7149 88.1129 22.7149 88.0678 22.6248L80.2707 14.7825V22.1741C80.2707 22.3543 80.0904 22.5346 79.82 22.5346H77.5214C77.4212 22.5352 77.3243 22.4988 77.2494 22.4322C77.1745 22.3656 77.1269 22.2737 77.1157 22.1741Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_265_8466">
                        <rect width="98.7042" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li className="ml-auto">
                <a
                  href="https://twitter.com/jordanarolph"
                  target="_blank"
                  className="underline-offset-4 hover:text-indigo-600 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="https://github.com/jordanrolph"
                  target="_blank"
                  className="underline-offset-4 hover:text-indigo-600 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="mailto:jordan.rolph@gmail.com?subject=Hello Jordan!"
                  className="underline-offset-4 hover:text-indigo-600 hover:underline"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
          <header className="pt-28 sm:pt-56">
            <blockquote className="flex flex-col items-end">
              <h1 className="text-5xl font-bold leading-normal tracking-tighter text-[#3B3B64] sm:text-7xl sm:leading-tight">
                <span className="text-indigo-300">&ldquo;</span>Hello, my name
                is Jordan Rolph
                <span className="text-indigo-300">&rdquo;</span>
              </h1>

              <cite className="mt-4 text-right text-lg font-medium not-italic text-indigo-600 sm:tracking-wide">
                <span className=" text-[#6D6DA1]">— </span>Jordan Rolph
              </cite>
              <p className="mt-1 tracking-wide text-[#6D6DA1]">
                Product Designer & Software Engineer
              </p>
            </blockquote>
          </header>
          <article className="mt-28 text-xl  leading-loose text-[#40405F] underline-offset-4">
            <p className="">
              I design and build things at{" "}
              <a
                href="https://9fin.com"
                className="text-zinc-700 underline decoration-zinc-400 decoration-1 hover:text-indigo-500 hover:decoration-indigo-500"
              >
                9fin.com
              </a>
              . We're always hiring good people, so if you're interested in
              joining the team, just reach out.
            </p>
            <p className="mt-10">
              On the side I&apos;m playing with{" "}
              <a
                href="https://pompoo.org"
                className="text-zinc-700 underline decoration-zinc-400 decoration-1 hover:text-indigo-500 hover:decoration-indigo-500"
              >
                pompoo.org
              </a>
              , to monitor water quality at beaches along the south coast.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
