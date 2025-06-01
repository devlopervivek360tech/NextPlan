import React from 'react';

const ScheduleDisplay = ({ schedule }) => {
  if (!schedule) {
    return (
      <div className='p-4 mt-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 text-center'>
        <h2 className='text-xl font-semibold mb-2 text-gray-700'>Your AI Powered Schedule</h2>
        <p className='text-gray-500'>Enter your thoughts above and click 'Plan My Day' to see your schedule here.</p>
      </div>
    );
  }

  return (
    <div className='p-4 mt-6 border border-gray-200 rounded-lg bg-white shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center text-indigo-700'>{schedule.title || 'Your Schedule'}</h2>
      {schedule.tasks && schedule.tasks.length > 0 ? (
        <ul className='space-y-3'>
          {schedule.tasks.map((task, index) => (
            <li
              key={index}
              className='p-3 bg-slate-50 rounded-md shadow-sm border border-slate-200 flex items-center space-x-3 hover:shadow-md transition-shadow duration-150'
            >
              <span className='font-semibold text-indigo-600 text-sm w-20 text-right'>{task.time}</span>
              <span className='text-gray-700 flex-1'>{task.description}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-500 text-center py-4'>No tasks scheduled yet. Looks like a chill day!</p>
      )}
      {schedule.note && (
        <p className='mt-6 text-center text-pink-600 font-medium text-sm italic'>
          ✨ {schedule.note} ✨
        </p>
      )}
    </div>
  );
};

export default ScheduleDisplay;
