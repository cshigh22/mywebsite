import React from "react";
import "./styles.css";

function PublicationsModal({ closeModal }) {
  const publications = [
    {
      title: "Implicit Game-Theoretic Model Predictive Control for Multi-Agent Motion Planning",
      authors: "Kevin Lim, Hansung Kim, Edward L. Zhu, Francesco Borrelli",
      venue: "UC Berkeley Model Predictive Control Lab",
      year: "2024",
      status: "Complete",
      description: "Developed IGT-MPC algorithm achieving 97% feasibility rate across 8 multi-agent scenarios with 20% improvement in task success rates.",
      links: {
        paper: "https://arxiv.org/pdf/2411.13983",
        arxiv: "https://arxiv.org/abs/2411.13983", 
      }
    },
    // Add more publications here as they become available
  ];

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content publications-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={closeModal}>&times;</button>
        
        <div className="publications-header">
          <h2>Research Publications</h2>
          <p className="publications-subtitle">Academic work and research contributions</p>
        </div>
        
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-authors">{pub.authors}</p>
              <p className="publication-venue">
                <strong>{pub.venue}</strong> • {pub.year}
                {pub.status && <span className="publication-status"> • {pub.status}</span>}
              </p>
              <p className="publication-description">{pub.description}</p>
              
              {pub.links && (
                <div className="publication-links">
                  {pub.links.paper && (
                    <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="pub-link">
                      📄 Paper
                    </a>
                  )}
                  {pub.links.arxiv && (
                    <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" className="pub-link">
                      📚 ArXiv
                    </a>
                  )}
                  {pub.links.code && (
                    <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="pub-link">
                      💻 Code
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="publications-footer">
          <p>More publications coming soon as research progresses...</p>
        </div>
      </div>
    </div>
  );
}

export default PublicationsModal;
