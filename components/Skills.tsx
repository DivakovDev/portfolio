import { SectionTitles } from "./ui/SectionTitles";
import { Cards } from "./ui/Cards";

const SkillsSection = () => {
  return (
    <section id="skills">
      <SectionTitles title="Skills" />
      <div className="flex flex-col items-center justify-center gap-4">
        <Cards />
      </div>
    </section>
  );
};

export default SkillsSection;
