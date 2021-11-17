import React, {useState} from 'react';
import './index.css';

const AccordianWrapper = ({data}) => {
    return (
        data.map((indv, index) => {
            return (<Accordian question={indv.question} answer={indv.answer} index={index} />)
        })
    )
};

const Accordian = ({question, answer, index}) => {
    const [clicked, setClicked] = useState(false);
    const onAccClickHandler = (index) => {
        if(clicked === index) {
       return setClicked(null);
        }
        setClicked(index);
    };
    return (
        <div>
            <div className={`accordian-ques ${clicked === index ? 'active' : " "}` } onClick={() => onAccClickHandler(index)} key={`accHead-${index}`} >{question}{(clicked === index) ? <span className="sign">-</span> : <span className="sign">+</span>}</div>
                 {
                   (clicked === index ? <div className="accordian-ans" key={`accAns-${index}`} >{answer}</div> : null)
                 }
        </div>
    )
}


export default AccordianWrapper
