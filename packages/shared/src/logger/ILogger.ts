export type LogLevel = 'silent' | 'error' | 'warn' | 'info' | 'debug';

export interface ILogger {
  level: LogLevel;

  /** Raw level-specific log (no prefix/format) */
  logWithLevel(level: LogLevel, message: string, meta?: Record<string, unknown>): void;

  /** Shortcut for logWithLevel('info', ...) */
  log(message: string, meta?: Record<string, unknown>): void;

  /** Formatted log with prefix (e.g., [info]) */
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, meta?: Record<string, unknown>): void;
  debug(message: string, meta?: Record<string, unknown>): void;
}
