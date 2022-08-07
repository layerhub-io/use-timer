# use-timer

Simple timer using React Context API. Can be accesible from any component.

## Installation

```sh
npm i @layerhub-io/use-timer
```

Using pnpm:

```sh
pnpm i @layerhub-io/use-timer
```

## Usage

Wrap you application with `TimerProvider`, then use it from anywhere your application.

```tsx
import { TimerProvider, useTimer } from '@layerhub-io/use-timer';

const ParentApp = () => {
  return (
    <TimerProvider>
      <App />
    </TimerProvider>
  );
};

const App = () => {
  const { start, time, pause, reset, setTime } = useTimer();
  return (
    <div>
      <div onClick={start}>start</div>
      <div onClick={pause}>pause</div>
      <div onClick={reset}>reset</div>
      <div onClick={() => setTime(1000)}>set time 10</div>
      <div>{time}</div>
    </div>
  );
};
```
