import React from 'react';
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";
import PrimaryLink from "@/app/ui/components/Link/primary-link";

interface PreviewCardProps {
    externalUrl: string;
    previewImage: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({externalUrl, previewImage}) => {
    return (
        <div className="preview-card">

            <div className="preview-content">
                <PrimaryLink href={externalUrl}>
                    External Link
                </PrimaryLink>



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


            </div>



        </div>
    );
};

export default PreviewCard;