import { Navbar,HistorySection, TeamSection } from "./";
export const MainContent = () => {
  return (
    <main>
      <Navbar bgColor="white" linkColor="black" header />
      <HistorySection/>
      <TeamSection/>
    </main>
  );
};
