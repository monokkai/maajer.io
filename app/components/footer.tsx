const Footer = () => {
  return (
    <footer className="border-t border-darkGray mt-auto">
      <div className="mx-auto w-[90%] md:w-[60%] py-6 flex items-center justify-between">
        <p className="text-xs text-lightGray/50">
          © {new Date().getFullYear()} Egør Maajer
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/monokkai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-lightGray/50 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/igor-mayer-688614374/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-lightGray/50 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@lydd2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-lightGray/50 hover:text-white transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
