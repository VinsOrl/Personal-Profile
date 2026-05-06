import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section className="profile-section" id="profile">
      <div className="profile-container glass-panel">
        <div className="profile-header">
          <h2>Hi, I'm <span className="highlight">林新興</span></h2>
          <p className="tagline">Student at National Quemoy University</p>
          <p className="bio">
            I'm an undergraduate student exploring the exciting frontier of Computer Science with a deep focus on Artificial Intelligence and Machine Learning. My academic journey is driven by curiosity about how intelligent agents can learn, reason, and interact with complex environments. Whether it's developing new algorithms or researching agentic systems, I'm constantly seeking to understand how AI can extend beyond passive responses to become truly proactive and adaptive.
          </p>
        </div>
        
        <div className="profile-grid">
          <div className="card">
            <h3>Currently Exploring</h3>
            <ul>
              <li>Machine Learning Models</li>
              <li>AI Agent Architectures</li>
              <li>Reinforcement Learning</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>
          <div className="card">
            <h3>Technical Focus</h3>
            <p><strong>Machine Learning:</strong> Building and training models for classification, regression, and pattern recognition. Experience with scikit-learn, TensorFlow, and PyTorch.</p>
          </div>
          <div className="card">
            <h3>Programming</h3>
            <p>Proficient in Python, with foundational knowledge of Java, C++, and JavaScript for diverse development projects.</p>
          </div>
          <div className="card">
            <h3>Data Analysis</h3>
            <p>Transforming raw data into actionable insights through statistical analysis, visualization, and data engineering techniques.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
