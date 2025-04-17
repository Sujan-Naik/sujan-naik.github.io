// pages/projects/media/[stub].tsx
"use client"
import React, { useEffect, useState } from 'react';

const Page = ({ params }: { params: { stub: string } }) => {
    const { stub } = params;
    const [videoId, setVideoId] = useState<string | null>(null);

    useEffect(() => {
        // Here you could fetch logic to validate or acquire video ID if needed.
        // If stub is a valid YouTube ID, just set it directly.
        setVideoId(stub);
    }, [stub]);

    if (!videoId) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                title="Video Player"
                allowFullScreen
            />
        </div>
    );
};

export default Page;