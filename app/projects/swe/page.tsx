import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Striving from "@/components/project-sections/Striving";
import HeadedUI from "@/components/project-sections/HeadedUI";
import PollAnywhere from "@/components/project-sections/PollAnywhere";
import Dingo from "@/components/project-sections/Dingo";
import AmplifyTripsPlanner from "@/components/project-sections/AmplifyTripsPlanner";
import AIRecipeGenerator from "@/components/project-sections/AIRecipeGenerator";


export default function Projects() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <article>
          <Striving />
          <HeadedUI />
          <PollAnywhere />
          <Dingo />
          <AmplifyTripsPlanner />
          <AIRecipeGenerator />
        </article>
      </main>
    </>
  );
}