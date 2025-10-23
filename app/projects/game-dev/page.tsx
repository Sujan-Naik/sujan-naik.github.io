import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RoboSimRoguelikeScholar from "@/components/project-sections/RoboSimRoguelikeScholar";
import AvatarDuels from "@/components/project-sections/AvatarDuels";
import Dragon from "@/components/project-sections/Dragon";
import SonorousMinecraft from "@/components/project-sections/SonorousMinecraft";
import Vulcan from "@/components/project-sections/Vulcan";
import Zephyrus from "@/components/project-sections/Zephyrus";

export default function Projects() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <article>
          <RoboSimRoguelikeScholar />
          <AvatarDuels />
          <Dragon />
          <SonorousMinecraft />
          <Vulcan />
          <Zephyrus />
        </article>
      </main>
    </>
  );
}