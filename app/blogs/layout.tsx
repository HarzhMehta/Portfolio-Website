import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="relative z-20 flex justify-center pt-24 pb-24 lg:pb-10">
        <div className="page-container max-w-6xl">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}