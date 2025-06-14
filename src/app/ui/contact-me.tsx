import PrimaryLink from "@/app/ui/components/Link/primary-link";
import Link from "next/link";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";

export default function ContactMe() {
    return (
        <section>
        <PrimaryCard width={"80%"}>
            <hgroup>
                <h1> I am available for Freelance or Short Term opportunities</h1>
                <h2> My Socials</h2>
            </hgroup>
            <p>
                    <li> My Email: <code>sujannaik047@gmail.com</code></li>

                    <li> Phone Number: <code> 07376050492</code></li>


                <li> <Link href={"https://www.linkedin.com/in/sujan-naik-69878a312/"} > Click me to see my LinkedIn</Link></li>

            </p>
        </PrimaryCard>
        </section>
    )
}