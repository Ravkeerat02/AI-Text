import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="site_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Ravkeerat02/AI-Text", "_blank")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <div className="flex flex-col items-center">
        <h1 className="head_text">
          Summarize Article with <br className="max-md:hidden" />
          <span className="orange_gradient">OPENAI GPT-4</span>
        </h1>
        <h2 className="desc">
          Summarizing the articles based on the provided link
        </h2>
      </div>
    </header>
  );
};

export default Hero;
