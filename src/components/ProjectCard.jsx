import React, { useState } from "react";

const ProjectCard = ({ 
    title, 
    description, 
    videoSrc, 
    thumbnail,
    cardTitle, 
    cardDescription 
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="service-card" onClick={handleCardClick}>
                <img src={thumbnail} alt="thumbnail" className="thumbnail"/>
                <h3>{cardTitle}</h3>
                <p>{cardDescription}</p>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div 
                        className="video-modal"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <button className="close-button" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <div className="video-overlay-content">
                            <h2>{title}</h2>
                            <div className="modal-footer">
                                <p className="project-description">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <img src={videoSrc} alt="project preview" className="custom-video-player" />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;