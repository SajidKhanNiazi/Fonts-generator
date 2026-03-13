'use client'

import Link from 'next/link'

const RelatedTools = () => {
    const tools = [
        {
            title: "Kalın Yazı Stili",
            desc: "Metninizi saniyeler içinde kalın Unicode yazıya dönüştürün.",
            link: "/kalin-yazi-stili/",
            icon: "🔥"
        },
        {
            title: "İtalik Yazı Stili",
            desc: "Metninizi estetik eğik karakterlere dönüştürün.",
            link: "/italik-egik-yazi/",
            icon: "✒️"
        },
        {
            title: "El Yazısı Fontları",
            desc: "Zarif ve el yazısı tarzı stilleri keşfedin.",
            link: "/el-yazisi/",
            icon: "✨"
        }
    ];

    return (
        <section className="related-tools-section" style={{ padding: '4rem 0', marginTop: '2rem' }}>
            <div className="section-header-premium" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-main-title" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                    Explore More Font Styles
                </h2>
                <div className="section-subtitle-premium" style={{ fontSize: '1.125rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
                    Try our other popular tools to make your text more appealing.
                </div>
                <div className="title-underline" style={{ width: '80px', height: '4px', background: 'var(--gradient-primary)', margin: '1.5rem auto', borderRadius: '2px' }}></div>
            </div>

            <div className="related-tools-grid">
                {tools.map((tool, index) => (
                    <Link href={tool.link} key={index} className="tool-directory-card glass-card luxury-hover">
                        <div className="tool-card-icon-wrapper">
                            <span className="tool-card-icon">{tool.icon}</span>
                        </div>
                        <div className="tool-card-content">
                            <h3 className="tool-card-title">{tool.title}</h3>
                            <p className="tool-card-desc" style={{ marginBottom: '1rem' }}>{tool.desc}</p>
                            <span className="try-tool-btn">
                                Aracı Dene <span className="arrow">→</span>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <style jsx>{`
                .related-tools-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                .tool-card-icon-wrapper {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--surface-elevated);
                    border-radius: 1rem;
                    font-size: 2rem;
                    margin-bottom: 1.25rem;
                    transition: all 0.3s ease;
                    border: 1px solid var(--border);
                }

                .luxury-hover {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 2rem;
                    border-radius: 1.5rem;
                    background: var(--surface);
                    border: 1px solid var(--border);
                    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                }

                .luxury-hover:hover {
                    transform: translateY(-8px);
                    border-color: var(--primary-color);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    background: var(--surface-elevated);
                }

                .luxury-hover:hover .tool-card-icon-wrapper {
                    transform: rotate(10deg) scale(1.1);
                    background: var(--primary-light);
                    border-color: var(--primary-color);
                }

                .try-tool-btn {
                    display: inline-flex;
                    align-items: center;
                    font-size: 0.9375rem;
                    font-weight: 700;
                    color: var(--primary-color);
                    transition: all 0.3s ease;
                }

                .luxury-hover:hover .try-tool-btn {
                    gap: 0.5rem;
                }

                .arrow {
                    margin-left: 0.25rem;
                    transition: transform 0.3s ease;
                }

                .luxury-hover:hover .arrow {
                    transform: translateX(4px);
                }

                @media (max-width: 1100px) {
                    .related-tools-grid {
                        grid-template-columns: repeat(2, 1fr);
                        max-width: 800px;
                    }
                }

                @media (max-width: 640px) {
                    .related-tools-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default RelatedTools;
