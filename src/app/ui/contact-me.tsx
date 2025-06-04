import PrimaryLink from "@/app/ui/components/Link/primary-link";
import Link from "next/link";

export default function ContactMe() {
    return (
        <div>
            <hgroup>
                <h1> Reach out to me !</h1>
                <h2> My Socials</h2>
            </hgroup>
            <p>
                    <li> My Email: <code>sujannaik047@gmail.com</code></li>

                    <li> Phone Number: <code> 07376050492</code></li>


                <li> <Link href={"https://www.linkedin.com/in/sujan-naik-69878a312/"} > Click me to see my LinkedIn</Link></li>

            </p>
        </div>
    )
}