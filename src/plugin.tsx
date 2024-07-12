/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/sdk';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

interface TextProps {
  value: string;
  onChange: () => void;
}

function RichTextEditor({value, onChange}: TextProps) {
  return (
      <SimpleMDE value={value} onChange={onChange} />
  );
}

Builder.registerEditor({
  name: 'Markdon text editor',
  component: RichTextEditor,
});

export default RichTextEditor