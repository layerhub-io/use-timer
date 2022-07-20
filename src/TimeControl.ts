import { SetStatus, SetTime, Status } from './types';

class TimeControl {
  private time: number;
  private interval: NodeJS.Timer;
  private lastUpdatedTime: number;
  private setTime: SetTime;
  private setStatus: SetStatus;
  private status: Status;

  constructor({
    setTime,
    setStatus,
  }: {
    setTime: SetTime;
    setStatus: SetStatus;
  }) {
    this.status = 'STOPPED';
    this.setTime = setTime;
    this.setStatus = setStatus;
    this.time = 0;
  }

  public start() {
    if (this.status === 'RUNNING') return;
    this.lastUpdatedTime = Date.now();
    this.interval = setInterval(() => {
      const now = Date.now();
      const deltaTime = now - this.lastUpdatedTime;
      this.lastUpdatedTime = now;
      this.time = this.time + deltaTime;
      this.setTime(this.time);
      this.status = 'RUNNING';
      this.setStatus('RUNNING');
    }, 16);
  }

  public pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.status = 'PAUSED';
      this.setStatus('PAUSED');
    }
  }

  public reset() {
    if (this.interval) {
      clearInterval(this.interval);
      this.time = 0;
      this.status = 'STOPPED';
      this.setStatus('STOPPED');
      this.setTime(0);
    }
  }
  public destroy = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.status = 'STOPPED';
      this.setStatus('STOPPED');
    }
  };
}

export default TimeControl;
