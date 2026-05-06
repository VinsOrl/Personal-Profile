import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <section className="profile-section" id="profile">
      <div className="profile-container">
        
        <div className="profile-intro fade-in">
          <h2 className="section-title">The <span className="highlight">Profile</span></h2>
          <p className="bio-large">
            I'm an undergraduate student exploring the exciting frontier of Computer Science with a deep focus on Artificial Intelligence and Machine Learning.
          </p>
          <div className="bio-details">
            <p>
              My academic journey is driven by curiosity about how intelligent agents can learn, reason, and interact with complex environments. Whether it's developing new algorithms or researching agentic systems, I'm constantly seeking to understand how AI can extend beyond passive responses to become truly proactive and adaptive.
            </p>
            <p className="university-tag">Student at National Quemoy University</p>
          </div>
        </div>

        <div className="profile-grid">
          <div className="editorial-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-number">01</div>
            <h3>Currently Exploring</h3>
            <ul className="editorial-list">
              <li>Machine Learning Models</li>
              <li>AI Agent Architectures</li>
              <li>Reinforcement Learning</li>
              <li>Natural Language Processing</li>
            </ul>
          </div>
          
          <div className="editorial-card fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="card-number">02</div>
            <h3>Technical Focus</h3>
            <p><strong>Machine Learning:</strong> Building and training models for classification, regression, and pattern recognition. Experience with scikit-learn, TensorFlow, and PyTorch.</p>
          </div>
          
          <div className="editorial-card fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="card-number">03</div>
            <h3>Programming</h3>
            <p>Proficient in Python, with foundational knowledge of Java, C++, and JavaScript for diverse development projects.</p>
          </div>
          
          <div className="editorial-card fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="card-number">04</div>
            <h3>Data Analysis</h3>
            <p>Transforming raw data into actionable insights through statistical analysis, visualization, and data engineering techniques.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Profile;
