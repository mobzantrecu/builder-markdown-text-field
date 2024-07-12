import "easymde/dist/easymde.min.css";
interface TextProps {
    value: string;
    onChange: () => void;
}
declare function RichTextEditor({ value, onChange }: TextProps): JSX.Element;
export default RichTextEditor;
