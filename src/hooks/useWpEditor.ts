import { useEffect } from 'react'
import { useEditor } from '@tiptap/react'
import type { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

// Declare a global interface for the window object to include the editor property
declare global {
  interface Window {
    editor: Editor | null
  }
}

// Custom hook to initialize and manage the Tiptap editor
export const useWpEditor = (content: string) => {
  // Initialize the editor with the provided content and the StarterKit extension
  // The StarterKit extension provides basic editor functionality, such as text formatting
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: content,
  })

  // useEffect hook to set the global window.editor property when the editor is initialized
  useEffect(() => {
    window.editor = editor
    // Cleanup function to reset the window.editor property when the component is unmounted
    return () => {
      window.editor = null
    }
  }, [editor]) // Dependency array to run the effect when the editor instance changes

  return editor
}