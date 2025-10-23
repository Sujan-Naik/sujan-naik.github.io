import Link from "next/link";

export default function Dingo() {
  return (
    <section>
      <h2>Dingo - Task Manager</h2>
      <p><strong>Date Finished:</strong> Dec 14, 2023</p>
      <p><strong>By Team Dingo</strong></p>
      <p>
        Task management system for teams using Django and PostgreSQL.
      </p>
      <Link href="https://dingo-topaz.vercel.app/">Live Demo</Link>
      <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <iframe
          src="https://dingo-topaz.vercel.app/"
          style={{ width: "100%", height: "100%", border: "none" }}
          allowFullScreen
        />
      </div>
    </section>
  );
}