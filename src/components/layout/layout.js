import Head from "next/head";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bitalin</title>
        <meta name="description" content="Bitalin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* nav */}
      <div className="grid grid-cols-12 bg-[#E5E5E5] md:bg-white">
        <div className="col-span-10 col-start-2 ">
          <nav className=" py-7 md:py-2.5">
            {/* mobile */}
            <NavMobile />
            {/* desktop */}
            <NavDesktop />
          </nav>
        </div>
      </div>
      {/* main */}
      <div className="grid grid-cols-12 bg-[#E5E5E5]">
        <div className="col-span-10 col-start-2 ">
          <main className="min-h-screen ">{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
