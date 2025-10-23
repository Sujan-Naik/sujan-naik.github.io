import Link from "next/link";

export default function SonorousMinecraft() {
  return (
    <section>
      <h2>SonorousMinecraft</h2>
      <p><em>In Progress</em></p>
      <iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/WEVVOWkuW0w?controls=1"
        title="SonorousMinecraft Demo"
        allowFullScreen
      />
      <Link href="https://github.com/SonorousMinecraft">GitHub Organization</Link>
    </section>
  );
}