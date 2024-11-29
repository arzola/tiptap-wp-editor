const StatusIndicator = ({ status, userName }: { status: 'red' | 'green' | 'yellow', userName: string }) => {
  const statusColors = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500'
  }

  return (
    <span className="flex items-center">
      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${statusColors[status]}`}></span>
      <strong>{userName}</strong>
    </span>
  )
}

export { StatusIndicator }