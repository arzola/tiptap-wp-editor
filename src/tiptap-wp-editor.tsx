/* global document */

import { createRoot } from 'react-dom/client'
import { EditorContent } from '@tiptap/react'
import '../css/main.css'
import { useWpEditor } from './hooks/useWpEditor.js'
import { EditorHeader } from '@/components/EditorHeader'

const TiptapWpEditor = () => {
  const editor = useWpEditor('Hello, World!');

  if (!editor) {
    return null
  }

  return (
    <div className="wp-tiptap-editor">
      <div className="flex h-full flex-col">
        <EditorHeader />
        <EditorContent editor={editor} className="flex-1 h-full overflow-y-auto w-full bg-white shadow-md p-2 rounded mt-2"/>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('tiptap-editor-root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const root = createRoot(rootElement)
root.render(<TiptapWpEditor />)
