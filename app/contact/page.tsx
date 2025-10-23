"use client";

import {
    FaInstagram,
    FaXTwitter,
    FaReddit,
    FaFacebook,
    FaTiktok,
    FaSteam,
    FaEnvelope,
    FaYoutube,
    FaPatreon,
    FaLinkedin
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import Link from "next/link";

const socials = [
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/sujangamedev/" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sujan-naik-69878a312/" },
  { name: "X (Twitter)", icon: <FaXTwitter />, url: "https://x.com/SujanGameDev" },
  { name: "Bluesky", icon: <SiBluesky />, url: "https://bsky.app/profile/sujangamedev.bsky.social" },
  { name: "Reddit", icon: <FaReddit />, url: "https://www.reddit.com/user/SujanGameDev/" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61573162659914" },
  { name: "TikTok", icon: <FaTiktok />, url: "https://www.tiktok.com/@sujangamedev" },
  { name: "Steam", icon: <FaSteam />, url: "https://steamcommunity.com/id/sujangamedev/" },
  { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@sujannaik9811" },
  { name: "Patreon", icon: <FaPatreon />, url: "https://www.patreon.com/c/SujanGameDev" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Connect with Me</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {socials.map((social) => (
          <li key={social.name} className="flex flex-col items-center hover:text-blue-400 transition">
            <Link href={social.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="text-4xl mb-2">{social.icon}</div>
              <span className="text-sm">{social.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}