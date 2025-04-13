// src/components/PreviewCard.tsx

import React from 'react';

interface PreviewCardProps {
    title: string;
    githubUrl?: string;
    previewImage?: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ title, githubUrl, previewImage }) => {
    return (
        <div
            style={{
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                maxWidth: '300px',
                margin: '20px',
            }}
        >
            {previewImage && (
                <div
                    style={{
                        backgroundImage: `url(${previewImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '180px',
                    }}
                />
            )}
            <div style={{ padding: '16px', background: 'white' }}>
                <h3 style={{ margin: 0 }}>{title}</h3>
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'block',
                            marginTop: '8px',
                            color: '#0070f3',
                        }}
                    >
                        Edit on GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default PreviewCard;