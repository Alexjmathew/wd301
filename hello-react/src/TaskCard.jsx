const TaskCard = ({ title, completedAtDate, dueDate, assigneeName }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          {completedAtDate 
            ? `Completed on: ${completedAtDate}` 
            : `Due on: ${dueDate}`}
        </p>
        <p>Assignee: {assigneeName}</p>
      </div>
    </div>
  );
}

export default TaskCard;
