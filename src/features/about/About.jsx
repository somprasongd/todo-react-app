/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="display-4">About Page</h1>

      <blockquote className="blockquote">
        <p className="mb-0">
          Show how to create Todo-list using react -> context api -> hooks
        </p>
        <footer className="blockquote-footer">
          Read more{' '}
          <cite>
            <a
              href="https://github.com/somprasongd/todo-react-app"
              target="_blank"
            >
              <span className="text-danger">On GitHub</span>
            </a>
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default About;
