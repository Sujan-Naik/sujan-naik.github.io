import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'


interface PopoverProps {
    title: string;
    children: React.ReactNode;
}

export default function PrimaryPopover({title, children}: PopoverProps) {
    return (
        <Popover className="relative">
            <PopoverButton>{title}</PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col">
                {children}
            </PopoverPanel>
        </Popover>
    )
}