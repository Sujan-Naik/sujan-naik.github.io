import React from 'react';

interface PreviewCardProps {
    githubUrl: string;
    previewImage: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({githubUrl, previewImage}) => {
    return (
        <div className="preview-card">
            {previewImage && (
                <div
                    className="preview-image"
                    style={{
                        backgroundImage: `url(${previewImage})`
                    }}
                />
            )}
            <div className="preview-content">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        Edit on GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default PreviewCard;