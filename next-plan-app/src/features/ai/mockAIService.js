/**
 * Simulates an AI response by generating a mock plan based on input text.
 */
export const generateMockPlan = (rawText) => {
  console.log('Mock AI processing text:', rawText);

  // Simple keyword-based mock responses
  if (rawText.toLowerCase().includes('gym')) {
    return {
      title: "Your Fitness Plan 💪",
      tasks: [
        { time: '5:00PM', description: 'Gym session - time to get those gains!' },
        { time: '6:30PM', description: 'Post-workout protein shake' },
      ],
      note: "Go crush that workout! 🔥"
    };
  } else if (rawText.toLowerCase().includes('meeting') || rawText.toLowerCase().includes('call')) {
    return {
      title: "Your Connection Schedule 🤝",
      tasks: [
        { time: '10:00AM', description: 'Prep for meeting' },
        { time: '11:00AM', description: 'Important call - be ready!' },
        { time: '1:00PM', description: 'Follow-up emails' },
      ],
      note: "You've got this! Make those connections count. ✨"
    };
  } else if (rawText.toLowerCase().includes('study') || rawText.toLowerCase().includes('paper') || rawText.toLowerCase().includes('learn')) {
    return {
      title: "Your Study Grind 🧠",
      tasks: [
        { time: '2:00PM', description: 'Focus session: Deep work on paper' },
        { time: '3:30PM', description: 'Short break & stretch' },
        { time: '3:45PM', description: 'Review notes and plan next steps' },
      ],
      note: "Knowledge is power! Keep up the great work. 📚"
    };
  }

  // Default fallback mock plan
  return {
    title: "Today's General Plan ✨",
    tasks: [
      { time: 'Morning', description: 'Seize the day!' },
      { time: 'Afternoon', description: 'Stay productive & hydrated.' },
      { time: 'Evening', description: 'Reflect and relax.' },
    ],
    note: "Let's make today amazing! You're doing great. 😊"
  };
};
