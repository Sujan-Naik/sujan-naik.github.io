export default function PollAnywhere() {
  return (
    <section>
      <h2>PollAnywhere</h2>
      <p><strong>Date Finished:</strong> Mar 28, 2024</p>
      <p>A responsive polling web application for Informatics lectures by Team Marshall & Co.</p>
      <iframe
        src="https://poll-anywhere-kappa.vercel.app/"
        style={{ width: "100%", height: "400px", border: "none" }}
        allowFullScreen
      />
      <h3>Technology</h3>
      <ul>
        <li>MERN stack</li>
        <li>Frontend on Vercel</li>
        <li>Backend on Render</li>
        <li>Database: MongoDB</li>
      </ul>
    </section>
  );
}