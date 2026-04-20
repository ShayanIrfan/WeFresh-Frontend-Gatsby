import * as React from "react";
import "./style.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type HeadingWithSubProps = {
  heading?: string;
  subHeading?: string;
  richText?: { raw: string };
};

function HeadingWithSub({
  heading,
  subHeading,
  richText,
}: HeadingWithSubProps) {
  return (
    <div className="headings">
      {richText?.raw ? (
        documentToReactComponents(JSON.parse(richText.raw))
      ) : (
        <>
          <h3>{heading}</h3>
          <p>{subHeading}</p>
        </>
      )}
    </div>
  );
}

export default HeadingWithSub;
