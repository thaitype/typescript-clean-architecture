import type { ILogger, LogLevel } from './ILogger';

export interface LoggedEntry {
  level: LogLevel;
  message: string;
  meta?: Record<string, unknown>;
}

export class MemoryLogger implements ILogger {
  public readonly entries: LoggedEntry[] = [];
  public level: LogLevel;

  constructor(level: LogLevel = 'debug') {
    this.level = level;
  }

  logWithLevel(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    this.entries.push({ level, message, meta });
  }

  log(message: string, meta?: Record<string, unknown>): void {
    this.logWithLevel('info', message, meta);
  }

  info(message: string, meta?: Record<string, unknown>): void {
    this.logWithLevel('info', message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this.logWithLevel('warn', message, meta);
  }

  error(message: string, meta?: Record<string, unknown>): void {
    this.logWithLevel('error', message, meta);
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    this.logWithLevel('debug', message, meta);
  }

  clear() {
    this.entries.length = 0;
  }

  get logs(): LoggedEntry[] {
    return [...this.entries];
  }

  findByLevel(level: LogLevel) {
    return this.entries.filter(e => e.level === level);
  }
}
