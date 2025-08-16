export default function NavMenu() {
  return (
    <nav className="absolute bottom-0 right-0 flex justify-center items-center bg-gray-800 p-4 rounded-lg shadow-lg">
      <ul className="space-y-2 flex flex-col sm:flex-col sm:space-y-2 text-xs text-right items-end">
        <li className="items-right">
          <a href="#home" className="flex flex-row items-center gap-2">
            <span className="text-green-600 text-lg font-medium">Home</span>
            <div className="-skew-y-30 bg-green-800 w-8 h-5 mb-3.5" />
          </a>
        </li>
        <li className="items-right">
          <a href="#projects" className="flex flex-row items-center gap-2">
            <span className="text-yellow-400 text-lg font-medium">Projects</span>
            <div className="-skew-y-30 bg-yellow-400 w-8 h-5 mb-3.5" />
          </a>
        </li>
        <li className="items-center">
          <a href="#cursus" className="flex flex-row items-center gap-2">
            <span className="text-yellow-400 text-lg font-medium">Cursus</span>
            <div className="-skew-y-30 bg-yellow-400 w-8 h-5 mb-3.5" />
          </a>
        </li>
        <li className="items-center">
          <a href="#about" className="flex flex-row items-center gap-2">
            <span className="text-yellow-400 text-lg font-medium">About</span>
            <div className="-skew-y-30 bg-yellow-400 w-8 h-5 mb-3.5" />
          </a>
        </li>
        <li className="items-center">
          <a href="#contact" className="flex flex-row items-center gap-2">
            <span className="text-yellow-400 text-lg font-medium">Contact</span>
            <div className="-skew-y-30 bg-yellow-400 w-8 h-5 mb-3.5" />
          </a>
        </li>
        <li className="items-center">
          <a href="#shop" className="flex flex-row items-center gap-2">
            <span className="text-yellow-400 text-lg font-medium">Shop</span>
            <div className="-skew-y-30 bg-yellow-400 w-8 h-5 mb-3.5" />
          </a>
        </li>
      </ul>
      <span className="text-xs text-gray-400 rotate-270 p-0">Navigation Menu</span>
    </nav>
  );
}
