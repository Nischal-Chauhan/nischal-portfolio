export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          NC
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#">About</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}