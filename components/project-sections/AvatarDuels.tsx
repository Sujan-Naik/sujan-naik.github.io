import Link from "next/link";

export default function AvatarDuels() {
  return (
    <section>
      <h2>AvatarDuels</h2>
      <p><em>In Progress</em></p>
      <p>Autonomous AI Bender Plugin improving <Link href="https://projectkorra.com">ProjectKorra</Link>.</p>
      <iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/eiEDAnGJ7Lg?controls=1"
        title="AvatarDuels Demo"
        allowFullScreen
      />
      <Link href="https://github.com/Sujan-Naik/AvatarDuels">GitHub Repository</Link>
    </section>
  );
}