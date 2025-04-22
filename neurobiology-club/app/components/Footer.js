export default function Footer() {
  return (
    <footer className="border-t text-center mt-4 text-sm font-semibold bg-primary-100 text-primary-900 border-primary-200">
      <p className = "text-center text-xl font-bold mt-4" style = {{ color: "var(--navbar-background)" }}> Neurobiology Club @ UW </p>
      <ul className="flex justify-center gap-6 mt-2">
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Mailing List
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Meta
          </a>
        </li>
      </ul>
      <p className = "mt-2 pb-4"> Web Impact UW  &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}