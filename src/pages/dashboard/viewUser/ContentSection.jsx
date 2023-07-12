import { SectionCard } from "./SectionCard";

export const ContentSection = ({ sectionName }) => {
  return (
    <>
      <div className="col-12 col-md-6 px-1">
        <SectionCard />
      </div>
      <div className="col-12 col-md-6 px-1">
        <SectionCard />
      </div>
    </>
  );
};
