import ModeToggle from "./ModeToggle";

const Navigation = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-center items-center">
      <div className="flex gap-5 justify-end w-full max-w-3xl pr-10">
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          about
        </button>
        <button
          className="py-2 group text-sm flex items-center"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1-tsBBCEFjmXJZ9oimeVrtYzE-hpN-mtq/view",
              "_blank"
            );
          }}
        >
          resume
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          projects
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm hover:text-blue-500 transition-colors"
        >
          skills
        </button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
