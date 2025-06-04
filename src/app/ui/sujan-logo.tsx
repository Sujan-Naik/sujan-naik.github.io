import {TvIcon} from '@heroicons/react/24/outline';
import {pixelifySans} from '@/app/ui/fonts';
import PrimaryLink from "@/app/ui/components/Link/primary-link";

export default function SujanLogo() {
    return (
        <PrimaryLink className={`${pixelifySans.className} flex flex-row items-center leading-none`}
                     href="/">
            <TvIcon className="h-12 w-12"/>
            <p className="text-[44px]">Sujan Naik</p>
        </PrimaryLink>
    )
}