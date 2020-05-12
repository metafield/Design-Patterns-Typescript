export interface Device {
  turnOn(): void;
  turnOff(): void;
  setChannel(num: number): void;
}
