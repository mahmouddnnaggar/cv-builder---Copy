"use client";
import { useState } from "react";
import {
  BtnItalic,
  Editor,
  EditorProvider,
  BtnBold,
  BtnBulletList,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  createButton,
  BtnUndo,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
export default function Description({ onRichTextEditorChange}) {
  const [value, setValue] = useState("");

  return (
    <div>
      <EditorProvider>
        <Editor
          
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}
