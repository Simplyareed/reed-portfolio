// components/ResumeButton.js
import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    const confirmed = window.confirm("Are you sure you want to download the resume?");
    if (confirmed) {
      // Trigger the download
      const link = document.createElement('a');
      link.href = '/FullstackDevResume.pdf'; // Ensure this path is correct
    }
  };

  return (
    <button
      className="bg-gradient-to-r from-slate-600 to-teal-50 px-4 py-2 rounded-md ml-8"
      onClick={handleDownload}
    >
      Resume
    </button>
  );
};

export default ResumeButton;
