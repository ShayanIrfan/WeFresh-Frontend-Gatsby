import * as React from "react";
import { useState } from "react";
import "./style.scss";

type AccordionItem = {
  question: string;
  answer: {
    title: string;
    value: string;
  };
  show: boolean;
};

type AccordianProps = {
  questions: AccordionItem[];
  onChange: (val: AccordionItem[]) => void;
};

function Accordian({ questions, onChange }: AccordianProps) {
  const [prev, setPrev] = useState<number>();

  const toShow = (curr: number) => {
    let temp = questions;
    if (prev !== undefined) {
      temp[prev].show = false;
    }
    if (curr !== prev) {
      temp[curr].show = true;
      setPrev(curr);
    } else {
      setPrev(undefined);
    }
    onChange(temp);
  };

  return (
    <>
      {questions.map((v, i) => (
        <div className="accordian" key={i}>
          <div className="question" onClick={() => toShow(i)}>
            <p>{v.question}</p>
          </div>
          {v.show && (
            <div className="ans-div">
              <p className="heading">{v.answer.title}</p>
              <p className="answer-para">{v.answer.value}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Accordian;
