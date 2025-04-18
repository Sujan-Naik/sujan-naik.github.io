import React from 'react';

export default async function Page({
    params,
}: {
    params: { stub: string }
}) {
    // No need to await params, directly destructure
    const { stub } = params;

    console.log(stub);

    return (
        <div>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${stub}?autoplay=0&controls=1`}
                title="Video Player"
                allowFullScreen
            />
        </div>
    );
};