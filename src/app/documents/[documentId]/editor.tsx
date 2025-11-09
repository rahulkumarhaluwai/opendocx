'use client'

import { TaskItem, TaskList} from '@tiptap/extension-list'
import { TableKit } from '@tiptap/extension-table'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { useStorage } from '@liveblocks/react/suspense'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from "@tiptap/extension-highlight"
import {FontFamily , TextStyle, Color, FontSize, LineHeight} from "@tiptap/extension-text-style"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEditorStore } from '@/store/use-editor-store';
import { Ruler } from './ruler'
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { AnyExtension } from '@tiptap/core';
import { Threads } from './threads';
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins'

interface EditorProps {
  initialContent?: string | undefined;
};

export const Editor = ({initialContent}:EditorProps) => {
  const leftMargin = useStorage((root)=>root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
  const rightMargin = useStorage((root)=>root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;
  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental:true,
  });
  const {setEditor} = useEditorStore();
  const editor = useEditor({
    onCreate({editor}) {
      setEditor(editor);
    },
    onDestroy(){
     setEditor(null);
    },
    onUpdate({editor}){
     setEditor(editor)
    },
    onSelectionUpdate({editor}){
     setEditor(editor)
    },
    onTransaction({editor}){
     setEditor(editor)
    },
    onFocus({editor}){
     setEditor(editor)
    },
    onBlur({editor}){
     setEditor(editor)
    },
    onContentError({editor}){
     setEditor(editor)
    },
    editorProps:{
     attributes:{
        style:`padding-left: ${leftMargin}px; padding-right: ${rightMargin}px`,
      class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
     },
    },
    extensions: [
      liveblocks as unknown as AnyExtension,
      StarterKit,
      LineHeight,
      FontSize,
      TextAlign.configure({
        types:["heading", "paragraph"]
      }),
      Link.configure({
       openOnClick: false,
       autolink: true,
       defaultProtocol:'https'
      }),
      Color,
      Highlight.configure({multicolor: true}),
      FontFamily,
      TextStyle,
      Image,
      TableKit.configure({
        table:{resizable: true},
      }),
      TaskItem.configure({
      nested: true,
    }), TaskList],
    immediatelyRender: false,
  })

  return(
    <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0
    print:bg-white print:overflow-visible'>
        <Ruler/>
        <div className='min-w-max flex justify-center w-[816px] 
        py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor} />
        <Threads editor={editor}/>
    </div>
  </div>
  );
};