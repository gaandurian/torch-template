import React from "react";
import { Segment } from "semantic-ui-react";
import { SegmentTitle } from "../Typography";

export default function SegmentWithTitle({ title, children, style, ...props }) {
  return (
    <Segment style={style} {...props}>
      {title && <SegmentTitle title={title} />}
      {children}
    </Segment>
  );
}
