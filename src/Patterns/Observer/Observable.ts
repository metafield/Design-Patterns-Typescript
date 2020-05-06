import { Observer } from './Observer';

export abstract class Observable {
  protected observers: Observer[] = [];

  protected abstract attach(obs: Observer): void;

  protected abstract detach(obs: Observer): void;

  protected abstract notify(): void;
}
