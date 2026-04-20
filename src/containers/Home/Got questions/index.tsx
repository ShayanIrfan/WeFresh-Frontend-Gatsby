import * as React from "react";
import "./style.scss";
import HeadingWithSub from "../../../components/common/HeadingWithSub";
import Accordian from "../../../components/common/Accordian";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

function GotQuestions() {
  const data = useStaticQuery(graphql`
    query {
      contentfulGotQuestions {
        heading {
          raw
        }
        accordianContent {
          question
          answer {
            title
            value
          }
          show
        }
      }
    }
  `);

  const [questions, setQuestions] = useState(
    data?.contentfulGotQuestions?.accordianContent,
  );

  const headingContent = data?.contentfulGotQuestions?.heading;

  const change = (val: any) => {
    setQuestions(val);
  };

  return (
    <div className="got-questions">
      <HeadingWithSub richText={headingContent} />
      <Accordian questions={questions} onChange={change} />
    </div>
  );
}

export default GotQuestions;
