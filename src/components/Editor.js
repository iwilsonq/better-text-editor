import React, { Component } from 'react';
import Section from './Section';
import Paragraph from './Paragraph';

const content = [
  "I am a Full Stack JavaScript Developer that fancies the React ecosystem in particular. While I've used Angular in the past, React and its accompanying technologies stole the show with respect to the community at large. I like to use Redux for state management and more recently I have been learning GraphQL, which perches on the cutting edge of web development.",
  "I like to work with Node, Express and MongoDB on the backend, but I also have experience with older solutions like SQL and PHP. All that said, I am a big fan of front end web development in general, using Sass to preprocess CSS and implementing my own style components."
];

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  renderSections() {
    let newContent = [];
    for (let i = 0; i < 2; i++) {
      newContent.push(content);
    }

    return newContent.map((section, index) => {
      return (
        <Section key={index} className={index === 0 ? "section--first" : ""}>
          {section.map((p, i) => <Paragraph key={i} text={p} />)}
        </Section>
      );
    });
  }

  render() {
    return (
      <div className="editor" contentEditable>
        {this.renderSections()}
      </div>
    );
  }
}

export default Editor;
