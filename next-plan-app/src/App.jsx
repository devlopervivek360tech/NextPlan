import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ScheduleDisplay from './components/ScheduleDisplay';
import Button from './components/Button';
import { generateMockPlan } from './features/ai/mockAIService';
import './index.css';

function App() {
  const [rawText, setRawText] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handlePlanCreation = (text) => {
    const newSchedule = generateMockPlan(text);
    setSchedule(newSchedule);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white flex flex-col items-center p-4 selection:bg-pink-500 selection:text-white'>
      <header className='w-full max-w-3xl text-center py-8 md:py-12'>
        <h1 className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
          NextPlan
        </h1>
        <p className='mt-3 text-lg text-slate-300 sm:mt-4 md:text-xl'>
          Clear Your Mind. Rule Your Day.
        </p>
      </header>

      <main className='w-full max-w-xl bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8'>
        <InputForm rawText={rawText} setRawText={setRawText} onPlanSubmit={handlePlanCreation} />
        <ScheduleDisplay schedule={schedule} />
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <Button onClick={() => console.log('Remind Me clicked')} variant='secondary' className='w-full'>
            🔔 Remind Me
          </Button>
          <Button onClick={() => console.log('Edit clicked')} variant='ghost' className='w-full'>
            ✍️ Edit
          </Button>
          <Button onClick={() => console.log('Encourage Me clicked')} className='w-full'>
            ✨ Encourage Me
          </Button>
        </div>
      </main>

      <footer className='w-full max-w-3xl text-center py-8 mt-10'>
        <p className='text-slate-400 text-sm'>
          {schedule ? schedule.note : "Today’s Vibe: Let’s get that bread 🥖🔥"}
        </p>
      </footer>
    </div>
  );
}

export default App;
