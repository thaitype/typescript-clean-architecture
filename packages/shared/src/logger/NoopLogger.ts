import type { ILogger, LogLevel } from './ILogger';

export class NoopLogger implements ILogger {
  level: LogLevel = 'silent';

  logWithLevel(): void {}
  log(): void {}

  info(): void {}
  warn(): void {}
  error(): void {}
  debug(): void {}
}
