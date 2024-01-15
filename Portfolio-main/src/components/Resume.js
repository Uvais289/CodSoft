// Resume.js
import React from 'react';

const Resume = () => {
  return (
    <div id="resume">
      <h2>My Resume</h2>
      <p>Click the link below to view and download my resume:</p>
      <a href="https://drive.google.com/file/d/1nkilDZJcgCTcBcIorofx8uj23ituqPrt/view?usp=drive_link" download="YourResumeFileName.pdf">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
