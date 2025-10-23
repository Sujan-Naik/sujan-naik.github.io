import Link from "next/link";

export default function AmplifyTripsPlanner() {
  return (
    <section>
      <h2>AmplifyTripsPlanner</h2>
      <p><strong>A trip-planning tutorial project built using AWS Amplify.</strong></p>
      <p><em>Can be run on iOS, Android, or Web.</em></p>
      <ul>
        <li>Cognito</li>
        <li>S3</li>
        <li>AppSync + GraphQL APIs</li>
      </ul>
      <Link href="https://github.com/Sujan-Naik/amplify-trips-planner">GitHub Repository</Link>
    </section>
  );
}