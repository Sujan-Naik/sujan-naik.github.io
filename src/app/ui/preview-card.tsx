// src/components/PreviewCard.tsx

import React from 'react';

interface PreviewCardProps {
    githubUrl: string;
    previewImage: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ githubUrl, previewImage }) => {
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