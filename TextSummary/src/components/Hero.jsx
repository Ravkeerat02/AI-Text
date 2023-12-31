const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Ravkeerat02/AI-Text", "_blank")
          }
          className="black_btn a flex items-center"
        >
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </button>
      </nav>

      <div className="bg-yellow-200 p-4 rounded-md mb-4">
        <p className="text-yellow-800">
          ⚠️ Warning: ScrapeNinja fails to extract data from this source due to
          anti-scraping protection. Data may not be accessible for processing.
        </p>
      </div>

      <h1 className="head_text">Article Summarizer</h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
