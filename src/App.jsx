import { useEffect, useState } from 'react';
import { featuredProjects, additionalProjects, githubData, certifications, achievements } from './data.mjs';
const resume=import.meta.env.BASE_URL+'Ashish_Singh_Resume.pdf';
const featured=[...featuredProjects].sort((a,b)=>Number(a.number)-Number(b.number));
const sortedAwards=[...achievements].sort((a,b)=>Number(b.type.includes('Award Winner'))-Number(a.type.includes('Award Winner')));
function submitContact(e){e.preventDefault();const f=e.currentTarget;const name=f.querySelector('#cf-name').value.trim(),email=f.querySelector('#cf-email').value.trim(),message=f.querySelector('#cf-message').value.trim();window.location.href='mailto:ashishsingh100580@gmail.com?subject='+encodeURIComponent('Portfolio contact from '+name)+'&body='+encodeURIComponent(message+'\n\n— '+name+' ('+email+')');}
function ProjectCard({p,featured=false}){return <div className={'project-card'+(featured?' featured':'')+(p.flagship?' flagship':'')}><div className="project-header"><div className="project-header-left">{featured&&<span className="project-number">{p.number}</span>}<div className="project-icon">{p.icon}</div></div><div className="project-links"><a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo" aria-label={p.name+' live demo'}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a><a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub" aria-label={p.name+' GitHub repository'}>&lt;/&gt;</a></div></div><div className="project-name">{p.name}</div><div className="project-subtitle">{p.subtitle}</div>{p.category&&<div className="project-category">{p.category}</div>}<p className="project-desc">{p.description}</p>{p.note&&<p className="project-note">{p.note}</p>}{p.evidence&&<p className="project-evidence"><a href={p.evidence} target="_blank" rel="noopener noreferrer">Engineering update / merged PR ↗</a></p>}<div className="project-features">{p.features.map(f=><span key={f} className="feature-tag">{f}</span>)}</div><div className="project-stack">{p.stack.map(t=><span key={t} className="stack-tag">{t}</span>)}</div><div className="project-actions"><a href={p.live} target="_blank" rel="noopener noreferrer" className="project-btn live">Live Demo →</a><a href={p.github} target="_blank" rel="noopener noreferrer" className="project-btn code">GitHub →</a></div></div>}
function Hero(){return (<section className="hero" id="home">
  <div className="hero-bg">
    <div className="grid-lines"></div>
    <div className="orb orb1"></div>
    <div className="orb orb2"></div>
    <div className="orb orb3"></div>
    
    <div className="float-el float-el1">
      <span className="dot" style={{"background":"#00e5ff"}}></span>thermoguard.ai
    </div>
    <div className="float-el float-el2">
      <span className="dot" style={{"background":"#f5e642"}}></span>forge.ai
    </div>
    <div className="float-el float-el3">
      <span className="dot" style={{"background":"#3b82f6"}}></span>urbanpulse.guardian
    </div>
    <div className="float-el float-el4">
      <span className="dot" style={{"background":"#8b5cf6"}}></span>resq-x.live
    </div>
  </div>

  <div className="hero-content">
    <div className="hero-badge">CSE (AI/ML) · NIET Greater Noida · 2025–2029</div>
    <h1 className="hero-name">Ashish Singh</h1>
    <p className="hero-role">// Full-Stack Developer &amp; AI/ML Student</p>
    <h2 className="hero-heading">Building Real-World Products with AI, Code &amp; Systems.</h2>
    <p className="hero-desc">I build AI-powered and full-stack applications that turn practical problems into usable products — from intelligent urban and disaster-response systems to career platforms and management software.</p>

    <a className="hero-award inline-flex items-center gap-2" href="#achievements">🏆 SEGUE 3.0 Diversity Champion · ₹25,000 team prize</a>
    <div className="hero-btns">
      <a href="#projects" className="btn-primary">View Projects →</a>
      <a href={resume} download className="btn-resume">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
      <a href="https://github.com/ashishsingh256259" target="_blank" rel="noopener" className="btn-ghost">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/ashish-singh-946711367/" target="_blank" rel="noopener" className="btn-ghost">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
    </div>

    <div className="hero-social">
      <a href="https://github.com/ashishsingh256259" target="_blank" rel="noopener" className="social-pill" aria-label="GitHub profile">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        ashishsingh256259
      </a>
      <a href="https://www.youtube.com/@ashish_singh_259" target="_blank" rel="noopener" className="social-pill" aria-label="YouTube channel">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg>
        YouTube
      </a>
      <a href="https://www.instagram.com/ashish_singh_259/" target="_blank" rel="noopener" className="social-pill" aria-label="Instagram profile">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.96 4.96.06 1.3.07 1.6.07 4.77s-.01 3.47-.07 4.77c-.15 3.25-1.7 4.8-4.96 4.96-1.3.06-1.6.07-4.9.07-3.2 0-3.6-.01-4.9-.07-3.26-.15-4.8-1.72-4.96-4.96-.06-1.3-.07-1.6-.07-4.77s.01-3.47.07-4.77C2.28 3.97 3.83 2.42 7.1 2.27 8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.73.07-2.27.1-3.31 1.16-3.42 3.42-.06 1.23-.07 1.6-.07 4.51s.01 3.28.07 4.51c.11 2.26 1.15 3.32 3.42 3.42 1.23.06 1.59.07 4.73.07s3.5-.01 4.73-.07c2.26-.1 3.31-1.15 3.42-3.42.06-1.23.07-1.6.07-4.51s-.01-3.28-.07-4.51c-.11-2.26-1.15-3.32-3.42-3.42-1.23-.06-1.59-.07-4.73-.07zm0 3.06a4.94 4.94 0 110 9.88 4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.13-1.98a1.16 1.16 0 110 2.32 1.16 1.16 0 010-2.32z"/></svg>
        Instagram
      </a>
      <a href="mailto:ashishsingh100580@gmail.com" className="social-pill" aria-label="Email me">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email
      </a>
    </div>
  </div>
</section>);}
function About(){return (<section id="about">
  <div className="container fade-up">
    <div className="section-label">About</div>
    <h2 className="section-title">Student developer.<br/>Real-world builder.</h2>
    <p className="section-desc">Learning through implementation, testing and iteration.</p>

    <div className="about-grid">
      <div className="about-text">
        <p>I'm <strong>Ashish Singh</strong>, a 2nd year <em>CSE (AI/ML) student at NIET Greater Noida</em>, and a self-taught full-stack developer focused on building practical software products.</p>
        <p>I enjoy taking ideas from concept to working interfaces, backend systems, AI integrations, and deployed applications — picking up <strong>React, Node.js, Firebase, Tailwind, and AI APIs</strong> along the way to turn ideas into systems that real users can interact with.</p>
        <p>I'm currently exploring <strong>AI integrations, backend engineering, system design, and intelligent product development</strong> — trying to understand not just how to build features, but how to build them well. Projects like FORGE, ThermoGuard AI, and RESQ-X have taught me more about product thinking than any course could.</p>
        <p>I also contribute to Machine Magnets as Outreach Coordinator, supporting the student technical community at NIET.</p>
        <p>If I'm not coding, I'm usually researching tools, reading about system architecture, or entering hackathons to test what I've built against real problems. <em>Still very much learning — and loving every step of it.</em></p>
      </div>
      <div className="about-stats">
        <div className="stat-card">
          <span className="stat-num">8</span>
          <span className="stat-label">Projects showcased</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">4</span>
          <span className="stat-label">Hackathons Entered</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">₹25k</span>
          <span className="stat-label">Hackathon team prize</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">Full<br/>Stack</span>
          <span className="stat-label">+ AI Learning Journey</span>
        </div>
      </div>
    </div>
  </div>
</section>);}
function Projects(){return (<section id="projects">
  <div className="container fade-up">
    <div className="section-label">Projects</div>
    <h2 className="section-title">Things I've actually built.</h2>
    <p className="section-desc">Selected projects with source code, demos and transparent development status.</p>

    <div className="projects-subhead">
      <h3>Featured Projects</h3>
      <div className="line"></div>
      <span className="tag">05 builds</span>
    </div>
    <div className="projects-grid featured" id="featured-projects-grid">{featured.map(p=><ProjectCard key={p.name} p={p} featured/>)}</div>

    <div className="projects-subhead">
      <h3>Additional Projects</h3>
      <div className="line"></div>
      <span className="tag">03 builds</span>
    </div>
    <div className="projects-grid" id="additional-projects-grid">{additionalProjects.map(p=><ProjectCard key={p.name} p={p}/>)}</div>

    <div className="exploring-strip">
      <span className="exp-label">// Now exploring:</span>
      <span className="exp-pill">AI/ML Systems</span>
      <span className="exp-pill">Backend Engineering</span>
      <span className="exp-pill">System Design</span>
      <span className="exp-pill">Intelligent Product Development</span>
    </div>
  </div>
</section>);}
function Skills(){return (<section id="skills">
  <div className="container fade-up">
    <div className="section-label">Skills</div>
    <h2 className="section-title">Technologies I work with.</h2>
    <p className="section-desc">A growing toolkit — adding new things to it constantly.</p>

    <div className="skills-wrapper">
      <div className="skill-category">
        <div className="skill-cat-title">Frontend</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">⚛️</span> React.js</div>
          <div className="skill-card"><span className="skill-icon">🟨</span> JavaScript (ES6+)</div>
          <div className="skill-card"><span className="skill-icon">🌐</span> HTML5</div>
          <div className="skill-card"><span className="skill-icon">🎨</span> CSS3</div>
          <div className="skill-card"><span className="skill-icon">💨</span> Tailwind CSS</div>
        </div>
      </div>
      <div className="skill-category">
        <div className="skill-cat-title">Backend</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">🟢</span> Node.js</div>
          <div className="skill-card"><span className="skill-icon">🚀</span> Express.js</div>
          <div className="skill-card"><span className="skill-icon">🔗</span> REST APIs</div>
          <div className="skill-card"><span className="skill-icon">⚡</span> FastAPI</div>
        </div>
      </div>
      <div className="skill-category">
        <div className="skill-cat-title">Database</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">🍃</span> MongoDB</div>
          <div className="skill-card"><span className="skill-icon">🔥</span> Firebase</div>
          <div className="skill-card"><span className="skill-icon">📄</span> Firestore</div>
          <div className="skill-card"><span className="skill-icon">⏱️</span> Realtime Database</div>
          <div className="skill-card"><span className="skill-icon">🐘</span> PostgreSQL</div>
        </div>
      </div>
      <div className="skill-category">
        <div className="skill-cat-title">AI / Intelligent Systems</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">🤖</span> Claude API</div>
          <div className="skill-card"><span className="skill-icon">✨</span> Gemini API</div>
          <div className="skill-card"><span className="skill-icon">👁️</span> YOLOv8</div>
        </div>
      </div>
      <div className="skill-category">
        <div className="skill-cat-title">Real-Time / Maps</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">🔌</span> Socket.IO</div>
          <div className="skill-card"><span className="skill-icon">🗺️</span> Leaflet</div>
          <div className="skill-card"><span className="skill-icon">🧭</span> OpenStreetMap</div>
        </div>
      </div>
      <div className="skill-category">
        <div className="skill-cat-title">DevOps / Deployment</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">🐙</span> Git &amp; GitHub</div>
          <div className="skill-card"><span className="skill-icon">▲</span> Vercel</div>
          <div className="skill-card"><span className="skill-icon">☁️</span> Google Cloud Run</div>
          <div className="skill-card"><span className="skill-icon">🎨</span> Render</div>
        </div>
      </div>
      <div className="skill-category">
        <div className="skill-cat-title">Concepts</div>
        <div className="skill-cards">
          <div className="skill-card"><span className="skill-icon">🧠</span> DSA</div>
          <div className="skill-card"><span className="skill-icon">🔐</span> Authentication</div>
          <div className="skill-card"><span className="skill-icon">🔌</span> API Integration</div>
          <div className="skill-card"><span className="skill-icon">📐</span> System Design</div>
          <div className="skill-card"><span className="skill-icon">📱</span> Responsive UI Design</div>
        </div>
      </div>
    </div>
  </div>
</section>);}
function Strengths(){return (<section id="strengths">
  <div className="container fade-up">
    <div className="section-label">Engineering Focus</div>
    <h2 className="section-title">What I bring to the table.</h2>
    <p className="section-desc">Areas I've genuinely invested time into.</p>

    <div className="strengths-grid">
      <div className="strength-card">
        <div className="strength-icon">🏗️</div>
        <div className="strength-title">Full-Stack Development</div>
        <p className="strength-desc">Building end-to-end features — from interactive React UIs to backend APIs and real-time databases.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">🤖</div>
        <div className="strength-title">AI Feature Integration</div>
        <p className="strength-desc">Embedding AI capabilities — mentor chat, resume analysis, risk scoring — into working product flows.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">🎯</div>
        <div className="strength-title">Product-Oriented Development</div>
        <p className="strength-desc">Thinking about why a feature matters before building it. User needs, not just technical solutions.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">📊</div>
        <div className="strength-title">Dashboard &amp; UI Engineering</div>
        <p className="strength-desc">Creating multi-role dashboard interfaces that are clean, functional, and visually organized.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">🔌</div>
        <div className="strength-title">API Integration</div>
        <p className="strength-desc">Connecting third-party services — AI APIs, Firebase, REST endpoints — into working product flows.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">🧩</div>
        <div className="strength-title">DSA &amp; Problem Solving</div>
        <p className="strength-desc">Translating abstract algorithms and data structures into working systems and interactive demos.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">📐</div>
        <div className="strength-title">System Design Learning</div>
        <p className="strength-desc">Actively studying how scalable, maintainable software systems are architected — still learning, always curious.</p>
      </div>
      <div className="strength-card">
        <div className="strength-icon">💡</div>
        <div className="strength-title">Real-World Project Building</div>
        <p className="strength-desc">Shipping working, deployed products instead of tutorial clones — and iterating on them after launch.</p>
      </div>
    </div>
  </div>
</section>);}
function Journey(){return (<section id="journey">
  <div className="container fade-up">
    <div className="section-label">Learning Journey</div>
    <h2 className="section-title">2025 — where it all began.</h2>
    <p className="section-desc">An honest timeline. Real projects, real milestones, real progress.</p>

    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot">Year 1</div>
        <div className="timeline-content">
          <div className="timeline-title">Started with Programming Fundamentals</div>
          <p className="timeline-desc">Began B.Tech CSE (AI/ML) at NIET and dived into HTML, CSS, JavaScript and React from the ground up, while building first responsive UI projects and pushing early experiments to GitHub.</p>
          <span className="timeline-badge">Foundation</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot">Full<br/>Stack</div>
        <div className="timeline-content">
          <div className="timeline-title">Moved into Full-Stack Development</div>
          <p className="timeline-desc">Picked up Node.js and Firebase alongside React, and started shipping production-style student projects — UniConnect, CouponDS, and Smart Parking System — while experimenting with authentication and databases.</p>
          <span className="timeline-badge">Skill Building</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot">Jan–Jun<br/>2026</div>
        <div className="timeline-content">
          <div className="timeline-title">Certified in DSA &amp; Python (iamneo, an NIIT Venture)</div>
          <p className="timeline-desc">Completed the Data Structures and Algorithms – I course (27 Jan – 04 May 2026) and the Python Programming course (30 May – 13 Jun 2026), strengthening core programming fundamentals.</p>
          <span className="timeline-badge">Certification</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot">2026</div>
        <div className="timeline-content">
          <div className="timeline-title">Building AI-Powered Systems</div>
          <p className="timeline-desc">Started integrating AI APIs (Claude, Gemini) into full products — FORGE (AI career ecosystem) and the Hotel &amp; Restaurant Management System — deploying to Vercel and Google Cloud Run.</p>
          <span className="timeline-badge">Project Ship</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot">May<br/>2026</div>
        <div className="timeline-content">
          <div className="timeline-title">InnovateX-NIET 1.0 Hackathon</div>
          <p className="timeline-desc">Presented FORGE at NIET's 36-hour college-level hackathon as part of Team Forge, and won the Diversity Champion Award at SEGUE 3.0 with the UrbanPulse Guardian AI team, earning a ₹25,000 team prize.</p>
          <span className="timeline-badge">Hackathon</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot">Aug<br/>2026</div>
        <div className="timeline-content">
          <div className="timeline-title">RESQ-X &amp; More Hackathons</div>
          <p className="timeline-desc">Worked on RESQ-X, a disaster-response intelligence platform, at Automate India 2026 — The GenAI &amp; Blockchain Hackathon — and took part in the Adobe University Hackathon 2026.</p>
          <span className="timeline-badge">Hackathon</span>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-dot">Now</div>
        <div className="timeline-content">
          <div className="timeline-title">2nd Year — Building ThermoGuard AI</div>
          <p className="timeline-desc">Currently a 2nd year student building ThermoGuard AI, a geospatial fire-risk intelligence platform, while continuing to explore AI/ML systems, backend engineering, and system design.</p>
          <span className="timeline-badge">In Progress 🔥</span>
        </div>
      </div>
    </div>
  </div>
</section>);}
function Certifications(){return (<section id="certifications">
  <div className="container fade-up">
    <div className="section-label">Certifications</div>
    <h2 className="section-title">Courses completed.</h2>
    <p className="section-desc">Courses and certificates.</p>
    <div className="cert-grid" id="cert-grid">{certifications.map(c=><div className="cert-card" key={c.title}><div className="cert-icon">{c.icon}</div><div className="cert-title">{c.title}</div><div className="cert-issuer">{c.issuer}</div><div className="cert-duration">{c.duration}</div><span className="cert-type">{c.type}</span></div>)}</div>
  </div>
</section>);}
function Achievements(){return (<section id="achievements">
  <div className="container fade-up">
    <div className="section-label">Hackathons &amp; Achievements</div>
    <h2 className="section-title">Building under pressure.</h2>
    <p className="section-desc">Awards, team achievements and hackathon participation.</p>
    <div className="achievement-grid" id="achievement-grid">{sortedAwards.map(a=><div className="achievement-card" key={a.name}><div className="achievement-icon">{a.icon}</div><div className="achievement-name">{a.name}</div><div className="achievement-org">{a.org}</div><div className="achievement-date">{a.date}</div><span className="achievement-type">{a.type}</span></div>)}</div>
  </div>
</section>);}
function GitHub(){return (<section className="github-section" id="github">
  <div className="container fade-up">
    <div className="section-label">GitHub</div>
    <h2 className="section-title">Code lives here.</h2>
    <p className="section-desc" style={{"marginBottom":"40px"}}>Explore selected source repositories and development history.</p>

    <div className="github-card">
      <div className="github-profile">
        <div className="github-avatar">A</div>
        <div>
          <div className="github-name">Ashish Singh</div>
          <div className="github-handle">@ashishsingh256259</div>
          <div className="github-location">📍 Greater Noida</div>
        </div>
      </div>
      <div className="github-stats" id="github-stats">{githubData.stats.map(s=><div key={s.label}><span className="gh-stat-val">{s.val}</span><span className="gh-stat-label">{s.label}</span></div>)}</div>
      <a href="https://github.com/ashishsingh256259" target="_blank" rel="noopener" className="btn-primary">View Profile →</a>
    </div>
    <p className="github-note">See the GitHub profile for live repository and contribution counts.</p>

    <div className="repo-grid" id="repo-grid">{githubData.repos.map(r=><a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="repo-card"><div className="repo-name">📁 {r.name}</div><p className="repo-desc">{r.desc}</p><div className="repo-meta"><span><span className="repo-dot" style={{background:r.color}}/>{r.lang}</span><span>{r.tags}</span></div></a>)}</div>
  </div>
</section>);}
function Contact(){return (<section id="contact">
  <div className="container fade-up">
    <div className="section-label">Contact</div>
    <h2 className="section-title">Have an idea worth building?</h2>
    <p className="section-desc">Open to collaborations, feedback on projects, and interesting conversations about tech.</p>

    <div className="contact-grid">
      <div className="contact-info">
        <h3>Get in touch →</h3>
        <p>Whether you want to collaborate on a project, give feedback on something I've built, or just talk about code — I'm always up for it.</p>

        <div className="contact-items">
          <a href="mailto:ashishsingh100580@gmail.com" className="contact-item">
            <div className="contact-item-icon">✉️</div>
            <span className="contact-item-text">ashishsingh100580@gmail.com</span>
          </a>
          <a href="https://github.com/ashishsingh256259" target="_blank" rel="noopener" className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{"width":"16px","height":"16px"}}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </div>
            <span className="contact-item-text">github.com/ashishsingh256259</span>
          </a>
          <a href="https://www.linkedin.com/in/ashish-singh-946711367/" target="_blank" rel="noopener" className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{"width":"16px","height":"16px"}}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <span className="contact-item-text">linkedin.com/in/ashish-singh-946711367</span>
          </a>
          <a href="https://www.youtube.com/@ashish_singh_259" target="_blank" rel="noopener" className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{"width":"16px","height":"16px"}}><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg>
            </div>
            <span className="contact-item-text">youtube.com/@ashish_singh_259</span>
          </a>
          <a href="https://www.instagram.com/ashish_singh_259/" target="_blank" rel="noopener" className="contact-item">
            <div className="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{"width":"16px","height":"16px"}}><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.96 4.96.06 1.3.07 1.6.07 4.77s-.01 3.47-.07 4.77c-.15 3.25-1.7 4.8-4.96 4.96-1.3.06-1.6.07-4.9.07-3.2 0-3.6-.01-4.9-.07-3.26-.15-4.8-1.72-4.96-4.96-.06-1.3-.07-1.6-.07-4.77s.01-3.47.07-4.77C2.28 3.97 3.83 2.42 7.1 2.27 8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.73.07-2.27.1-3.31 1.16-3.42 3.42-.06 1.23-.07 1.6-.07 4.51s.01 3.28.07 4.51c.11 2.26 1.15 3.32 3.42 3.42 1.23.06 1.59.07 4.73.07s3.5-.01 4.73-.07c2.26-.1 3.31-1.15 3.42-3.42.06-1.23.07-1.6.07-4.51s-.01-3.28-.07-4.51c-.11-2.26-1.15-3.32-3.42-3.42-1.23-.06-1.59-.07-4.73-.07zm0 3.06a4.94 4.94 0 110 9.88 4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.13-1.98a1.16 1.16 0 110 2.32 1.16 1.16 0 010-2.32z"/></svg>
            </div>
            <span className="contact-item-text">instagram.com/ashish_singh_259</span>
          </a>
        </div>
      </div>

      <form className="contact-form" id="contactForm" onSubmit={submitContact}>
        <div className="form-group">
          <label className="form-label" htmlFor="cf-name">NAME</label>
          <input type="text" id="cf-name" className="form-input" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cf-email">EMAIL</label>
          <input type="email" id="cf-email" className="form-input" placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cf-message">MESSAGE</label>
          <textarea id="cf-message" className="form-input" placeholder="What's on your mind?" required></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{"width":"100%","padding":"14px","justifyContent":"center"}}>Open in Email App →</button>
        <p className="form-hint">This opens your email app with the message pre-filled — nothing is sent from this page.</p>
      </form>
    </div>
  </div>
</section>);}

export default function App(){const [open,setOpen]=useState(false);const toggleMenu=()=>setOpen(v=>!v);useEffect(()=>{const els=document.querySelectorAll('.fade-up');const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.1});els.forEach(el=>observer?observer.observe(el):el.classList.add('visible'));const sections=document.querySelectorAll('section[id]');const links=document.querySelectorAll('.nav-links a');function scroll(){let current='';sections.forEach(s=>{if(window.scrollY>=s.offsetTop-80)current=s.id});links.forEach(a=>{const active=a.getAttribute('href')==='#'+current;a.style.color=active?'var(--yellow)':'';if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}window.addEventListener('scroll',scroll,{passive:true});scroll();return()=>{observer?.disconnect();window.removeEventListener('scroll',scroll)}},[]);useEffect(()=>{function esc(e){if(e.key==='Escape')setOpen(false)}window.addEventListener('keydown',esc);return()=>window.removeEventListener('keydown',esc)},[]);return <>
<a href="#main" className="skip-link">Skip to content</a>


<nav>
  <a href="#home" className="nav-logo">A<span>.</span>Singh</a>
  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#journey">Journey</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#achievements">Achievements</a></li>
    <li><a href="#github">GitHub</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div className="nav-actions">
    <a href={resume} download className="nav-cta-ghost">Download Resume</a>
    <a href="mailto:ashishsingh100580@gmail.com" className="nav-cta">Say Hello →</a>
  </div>
  <button className="hamburger" onClick={toggleMenu} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobileMenu">
    <span></span><span></span><span></span>
  </button>
</nav>


<div className={open ? "mobile-menu open" : "mobile-menu"} id="mobileMenu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <button className="mobile-close" onClick={toggleMenu} aria-label="Close menu">✕</button>
  <a href="#about" onClick={toggleMenu}>About</a>
  <a href="#projects" onClick={toggleMenu}>Projects</a>
  <a href="#skills" onClick={toggleMenu}>Skills</a>
  <a href="#journey" onClick={toggleMenu}>Journey</a>
  <a href="#certifications" onClick={toggleMenu}>Certifications</a>
  <a href="#achievements" onClick={toggleMenu}>Achievements</a>
  <a href="#github" onClick={toggleMenu}>GitHub</a>
  <a href="#contact" onClick={toggleMenu}>Contact</a>
  <a href={resume} download className="mobile-resume" onClick={toggleMenu}>Download Resume ↓</a>
</div>

<main id="main">


<Hero/>

<div className="divider"></div>


<About/>

<div className="divider"></div>


<Projects/>

<div className="divider"></div>


<Skills/>

<div className="divider"></div>


<Strengths/>

<div className="divider"></div>


<Journey/>

<div className="divider"></div>


<Certifications/>

<div className="divider"></div>


<Achievements/>

<div className="divider"></div>


<GitHub/>

<div className="divider"></div>


<Contact/>

</main>


<footer>
  <div>
    <div className="footer-brand footer-glow">Built by <span>Ashish Singh</span></div>
    <div className="footer-copy">CSE (AI/ML) · NIET Greater Noida · 2025–2029 · 2nd Year</div>
  </div>
  <div className="footer-links">
    <a href="https://github.com/ashishsingh256259" target="_blank" rel="noopener">GitHub</a>
    <a href="https://www.linkedin.com/in/ashish-singh-946711367/" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://www.youtube.com/@ashish_singh_259" target="_blank" rel="noopener">YouTube</a>
    <a href="https://www.instagram.com/ashish_singh_259/" target="_blank" rel="noopener">Instagram</a>
    <a href="mailto:ashishsingh100580@gmail.com">Email</a>
  </div>
</footer>

</>}
