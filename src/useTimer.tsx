import React from 'react';
import { TimerContext } from './TimerContext';

export function useTimer() {
  const { pause, reset, start, status, time } = React.useContext(TimerContext);
  return {
    pause,
    reset,
    start,
    status,
    time,
  };
}
