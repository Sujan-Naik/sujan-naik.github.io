'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import PrimaryLink from "@/app/ui/components/Link/primary-link";
import AnimatedText from "@/app/ui/components/Animations/AnimatedText";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Projects',
    href: '/projects',
    icon: DocumentDuplicateIcon,
  }
  ];

interface NavLinksProps {
    projectNames: string[];
}

export default function NavLinks({projectNames} : NavLinksProps) {

  const pathname = usePathname();
  return (
    <div>
    {links.map(link => {
    const LinkIcon = link.icon;
    return (
        <PrimaryLink key={link.name} href={link.href} className="flex items-center space-x-2 p-1">
            <span className="flex items-center justify-center w-6 h-6">
                <LinkIcon className="w-full h-full" />
            </span>
                <AnimatedText text={link.name}></AnimatedText>
        </PrimaryLink>
    );
})}

    {projectNames && projectNames.map(link => {
        const LinkIcon = ArrowRightIcon;
        return (
            <PrimaryLink key={link} href={`/projects/${link}`} className="flex items-center space-x-2 p-1">
                <span className="flex items-center justify-center w-6 h-6">
                  <LinkIcon className="w-full h-full" />
                </span>
                <AnimatedText text={link}></AnimatedText>
            </PrimaryLink>
        );
    })}
</div>
  );
}