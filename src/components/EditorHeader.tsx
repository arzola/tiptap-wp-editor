import { StatusIndicator } from '@/components/StatusIndicator'

const EditorHeader = () => {
  // TODO: hook editor data to fill in the stats and current user
  return (
    <div className="editor-header flex flex-row justify-between w-full flex-1 bg-white shadow-md p-2 rounded">
      <div className="stats">
        <ul>
          <li>Word count: 5</li>
          <li>Character count: 100</li>
        </ul>
      </div>
      <div className="current-user">
        <StatusIndicator status={'green'} userName={'Oscar'} />
      </div>
    </div>
  )
}

export { EditorHeader }