import React from 'react';
import AccordianWrapper from '../../components/Accordian';
import './index.css';

export const Data = [
    {
      question: 'What do you call a dog magician?',
      answer: 'A labracadabrador.'
    },
    {
      question: 'What do you call a funny mountain?',
      answer: 'Hill-arious.'
    },
    {
      question: 'What did the astronaut say when he crashed into the moon?',
      answer: 'I Apollo-gize.'
    }
  ];

const AccordianComp = () => {
    return (
        <div className="accordian-container">
            <AccordianWrapper data={Data}/>
        </div>
    )
}

export default AccordianComp
