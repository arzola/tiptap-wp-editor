import React from 'react';
import {createRoot} from 'react-dom/client';
import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../css/main.scss';

const TiptapWpEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
    });

    if (!editor) {
        return null;
    }

    return <EditorContent editor={editor}/>;
};

const rootElement = document.getElementById('tiptap-editor-root');

if (!rootElement) {
    console.error('Root element not found. Ensure an element with ID "tiptap-editor-root" exists in the DOM.');
    throw new Error('Root element not found.');
}

const root = createRoot(rootElement);
root.render(<TiptapWpEditor/>);
