import React from 'react';

export default async function Page({params,
                                   }: {
    params: Promise<{ stub: string }>
}) {

    const {stub} = await params

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


export function generateStaticParams() {
  return [ { slug: [""] } ]
}