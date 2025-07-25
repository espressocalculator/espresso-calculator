import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5efe6] text-[#3e2f2f] font-sans flex flex-col">
      <header className="bg-[#d3c0b0] text-[#3e2f2f] shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Espresso Calculator
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">{children}</main>

      <footer className="bg-[#d3c0b0] text-sm text-center p-4 mt-8">
        © {new Date().getFullYear()} Espresso Calculator
      </footer>
    </div>
  );
}
