import React from 'react';
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";

interface PreviewCardProps {
    externalUrl: string;
    previewImage: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({externalUrl, previewImage}) => {
    return (
        <div className="preview-card">
            <div className="preview-content">
                {externalUrl && (
                    <a
                        href={externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        GitHub
                    </a>
                )}

                <PrimaryCard width={"100%"} height={"100%"}>
                    {previewImage && (
                        <div
                            style={{
                                backgroundImage: `url(${previewImage})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    )}
                </PrimaryCard>
            </div>



        </div>
    );
};

export default PreviewCard;