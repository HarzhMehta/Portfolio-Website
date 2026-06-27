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
      <br></br> <br></br>
      <main className="relative z-20 flex justify-center pt-24">
        <div className="w-full max-w-6xl px-6">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}