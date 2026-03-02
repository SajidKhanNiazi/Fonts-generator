'use client'

import React, { useState } from 'react'

interface FaqAccordionProps {
    title: string
    faqs: any[]
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ title, faqs }) => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

    return (
        <section className="faq-section-premium" aria-labelledby="faq-title">
            <div className="faq-header-container">
                <div id="faq-title" className="section-main-title centered">{title}</div>
                <div className="title-accent-line"></div>
            </div>

            <div className="faq-grid-premium">
                {faqs.map((faq: any, idx: number) => {
                    const isExpanded = expandedFaq === idx;
                    return (
                        <div
                            key={idx}
                            className={`faq-card-premium ${isExpanded ? 'active' : ''}`}
                        >
                            <button
                                className="faq-trigger-premium"
                                onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                                aria-expanded={isExpanded}
                                aria-controls={`faq-answer-${idx}`}
                                id={`faq-question-${idx}`}
                            >
                                <span className="faq-question-text">{faq.q}</span>
                                <span className="faq-icon-wrapper">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="faq-chevron-icon"
                                    >
                                        <path
                                            d="M6 9L12 15L18 9"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${idx}`}
                                className="faq-content-premium"
                                role="region"
                                aria-labelledby={`faq-question-${idx}`}
                                style={{
                                    maxHeight: isExpanded ? '1000px' : '0',
                                    opacity: isExpanded ? 1 : 0
                                }}
                            >
                                <div className="faq-answer-inner">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default FaqAccordion
