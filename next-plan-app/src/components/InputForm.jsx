import React from 'react';

const InputForm = ({ rawText, setRawText, onPlanSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!rawText.trim()) return; // Prevent submission if empty
    onPlanSubmit(rawText);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <label htmlFor='thoughtInput' className='block text-sm font-medium text-gray-700 mb-1'>
        Your Raw Thoughts:
      </label>
      <textarea
        id='thoughtInput'
        className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out'
        rows='4'
        placeholder='e.g., Gym at 4, call Ria, finish history paper, buy shampoo'
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
      />
      <button
        type='submit'
        className='mt-3 w-full px-4 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out'
      >
        Plan My Day ✨
      </button>
    </form>
  );
};

export default InputForm;
