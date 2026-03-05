'use client'

import React from 'react'
import NextImage from 'next/image'

interface SeoSectionsProps {
    sections: any[]
}

const SeoSections: React.FC<SeoSectionsProps> = ({ sections }) => {
    return (
        <>
            {sections.map((section: any) => (
                <div key={section.id} className="info-box">
                    {section.level === 3 ? (
                        <h3 className="section-sub-title">{section.title}</h3>
                    ) : (
                        <h2 className="section-main-title">{section.title}</h2>
                    )}
                    <div className="content-intro">
                        {section.type === 'text' && (
                            <>
                                {section.content && <p className="intro-text" dangerouslySetInnerHTML={{ __html: section.content }} />}

                                {section.subsections && section.subsections.map((sub: any) => (
                                    <div key={sub.id} className="info-subsection">
                                        {sub.level === 3 ? (
                                            <h3 className="section-sub-title">{sub.title}</h3>
                                        ) : (
                                            <h4 className="section-sub-title">{sub.title}</h4>
                                        )}
                                        <p className="intro-text" dangerouslySetInnerHTML={{ __html: sub.content }} />
                                    </div>
                                ))}

                                {section.image && (
                                    <div className="section-image-container">
                                        <NextImage
                                            src={section.image}
                                            alt={section.title}
                                            width={1000}
                                            height={600}
                                            sizes="(max-width: 768px) 100vw, 800px"
                                            style={{ width: '100%', height: 'auto' }}
                                            className="section-image"
                                        />
                                    </div>
                                )}
                            </>
                        )}

                        {section.type === 'features' && (
                            <div className="feature-cards-grid">
                                {section.features.map((feature: any, idx: number) => (
                                    <div key={idx} className="feature-card gradient-purple">
                                        <div className="feature-card-icon">{feature.icon}</div>
                                        <div className="feature-card-title-simple" dangerouslySetInnerHTML={{ __html: feature.title }} />
                                        <p>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'fontFeatures' && (
                            <div className="feature-cards-grid">
                                {section.features.map((feature: any, idx: number) => (
                                    <div key={idx} className={`feature-card ${feature.gradient}`}>
                                        <span className="example-text" style={{ fontSize: '1.25rem' }}>{feature.text}</span>
                                        <p>{feature.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'steps' && (
                            <div className="detailed-steps">
                                {section.steps.map((step: any, idx: number) => (
                                    <div key={idx} className="detailed-step">
                                        <div className="step-visual">
                                            <div className="step-number-large">{step.number}</div>
                                            <div className="step-icon-circle">{step.icon}</div>
                                        </div>
                                        <div className="step-details">
                                            <div className="feature-card-title-simple">{step.title}</div>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'textSteps' && (
                            <div className="text-steps-list">
                                {section.steps.map((step: string, idx: number) => (
                                    <div key={idx} className="text-step-item">
                                        <span className="step-bullet">{idx + 1}</span>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'fontTypes' && (
                            <div className="font-types-grid">
                                {section.types.map((type: any, idx: number) => (
                                    <div key={idx} className="font-type-card">
                                        <div className="font-type-icon">{type.icon}</div>
                                        <div className="font-type-info">
                                            <div className="font-type-title">{type.title}</div>
                                            <p className="font-type-desc">{type.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.type === 'categoriesList' && (
                            <div className="categories-brief-list">
                                {section.categories.map((cat: any, idx: number) => (
                                    <div key={idx} className="cat-brief-item">
                                        <strong>{cat.title}</strong> {cat.desc}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default SeoSections
