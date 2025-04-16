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
                width: '100%', // Allow the card to take the full width of the grid cell
                height: 'auto', // Allow the height to adjust based on content
                transition: 'box-shadow 0.2s ease', // Adding a transition for hover effect
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