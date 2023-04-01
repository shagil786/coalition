import { Navbar,HistorySection, TeamSection } from "./";
export const MainContent = () => {
  return (
    <main className="overflow-hidden">
      <Navbar bgColor="white" linkColor="black" header />
      <HistorySection/>
      <TeamSection/>
    </main>
  );
};
