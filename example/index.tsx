import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimerProvider, useTimer } from '../.';

const App = () => {
  const { start, time, pause, reset } = useTimer();
  return (
    <div>
      <div onClick={start}>start</div>
      <div onClick={pause}>pause</div>
      <div onClick={reset}>reset</div>
      <div>{time}</div>
    </div>
  );
};

ReactDOM.render(
  <TimerProvider>
    <App />
  </TimerProvider>,
  document.getElementById('root')
);
