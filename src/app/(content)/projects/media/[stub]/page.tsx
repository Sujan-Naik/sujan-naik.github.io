import React from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ stub: string }>
}) {

    const { stub } = await params
     console.log(stub);


    const videoId = Array.isArray(stub) ? stub[0] : stub; // Handle the case where the id might be an array

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

