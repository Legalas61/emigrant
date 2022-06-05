import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { BLUE, LIST_ICON_BLACK, LIST_ICON_WHITE } from "../../global";
import styles from "./TextEditor.module.css";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor_header">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={editor.isActive("bold") ? "is-active" : "" + "bold"}
      >
        B
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={editor.isActive("italic") ? "is-active" : "" + "italic"}
      >
        i
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        className={
          editor.isActive("strike") ? "is-active strike" : "" + "strike"
        }
      >
        S
      </button>
      <div
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={
          editor.isActive("bulletList")
            ? "is-active list-icon white btn"
            : "list-icon black btn"
        }
      ></div>

      <style jsx>{`
        button,
        .btn {
          border: 3px solid ${BLUE};
          background-color: #fff;
          margin-right: 5px;
          border-radius: 5px;
          font-size: 15px;
          font-weight: bold;
          width: 30px;
          height: 30px;
        }
        .italic {
          font-style: italic;
        }
        .strike {
          text-decoration: line-through;
        }
        .is-active {
          background-color: ${BLUE};
          color: #fff;
          font-weight: bold;
        }
        .list-icon {
          background-size: 14px;
          background-repeat: no-repeat;
          background-position: center;
        }
        .black {
          background-image: url(${LIST_ICON_BLACK});
        }
        .white {
          background-image: url(${LIST_ICON_WHITE});
        }
        .editor_header {
          display: flex;
          margin-bottom: 5px;
          border-bottom: 3px solid #f7f7f7;
          padding: 5px;
        }
      `}</style>
    </div>
  );
};

export default ({
  description,
  setDescription,
  setIsDescriptionError,
  setErrorText,
  isDescriptionError,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Описание объявления ...",
        emptyEditorClass: styles.russianEconomic,
      }),
    ],
    editorProps: {
      attributes: {
        class: styles.ProseMirror,
      },
    },
    content: description,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // send the content to an API here
      html.length > 7 ? setDescription(html) : setDescription("");
      setIsDescriptionError(true);
      setErrorText(undefined);
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <style jsx>{`
        div {
          border-radius: 10px;
          margin-bottom: 5px;
          border: ${isDescriptionError || isDescriptionError === null
            ? "3px solid #f7f7f7"
            : "3px solid red"};
          width: 100%;
          min-height: 185px;
          max-height: 320px;
          max-width: 410px;
        }
      `}</style>
    </div>
  );
};
