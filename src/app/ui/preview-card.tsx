import React from 'react';

interface PreviewCardProps {
    githubUrl: string;
    previewImage: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({githubUrl, previewImage}) => {
    return (
        <div className="preview-card">
            <div className="preview-content">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        Check out on GitHub
                    </a>
                )}
            </div>

            {previewImage && (
                <div
                    style={{
                        backgroundImage: `url(${previewImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%'
                    }}
                />
            )}

        </div>
    );
};

export default PreviewCard;