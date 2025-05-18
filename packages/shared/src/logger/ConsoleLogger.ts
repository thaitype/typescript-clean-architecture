import c from 'ansis';
import type { ILogger, LogLevel } from './ILogger';

export const MARK_CHECK = c.green('✔');
export const MARK_INFO = c.blue('ℹ');
export const MARK_ERROR = c.red('✖');
export const MARK_WARNING = c.yellow('!');

const LEVEL_ORDER: LogLevel[] = ['silent', 'error', 'warn', 'info', 'debug'];

export class ConsoleLogger implements ILogger {
  constructor(public level: LogLevel = 'debug') {}

  // Used by logWithLevel to check if the level should output
  private shouldLog(target: LogLevel): boolean {
    if (this.level === 'silent') return false;
    return LEVEL_ORDER.indexOf(target) <= LEVEL_ORDER.indexOf(this.level);
  }

  // Generic unformatted log (default info-level)
  log(message: string, meta?: Record<string, unknown>): void {
    this.logWithLevel('info', message, meta);
  }

  // Dynamic log level (no prefix)
  logWithLevel(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    if (!this.shouldLog(level)) return;

    const out = this.formatRaw(message, meta);
    switch (level) {
      case 'error':
        console.error(out);
        break;
      case 'warn':
        console.warn(out);
        break;
      case 'info':
        console.info(out);
        break;
      case 'debug':
        console.debug(out);
        break;
    }
  }

  info(message: string, meta?: Record<string, unknown>): void {
    if (!this.shouldLog('info')) return;
    console.info(`${MARK_INFO} ${message}${this.metaStr(meta)}`);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    if (!this.shouldLog('warn')) return;
    console.warn(`${MARK_WARNING} ${message}${this.metaStr(meta)}`);
  }

  error(message: string, meta?: Record<string, unknown>): void {
    if (!this.shouldLog('error')) return;
    console.error(`${MARK_ERROR} ${message}${this.metaStr(meta)}`);
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    if (!this.shouldLog('debug')) return;
    console.debug(c.gray(`[debug] ${message}${this.metaStr(meta, false)}`));
  }

  // Helper to format meta
  private metaStr(meta?: Record<string, unknown>, isDimmed = true): string {
    const metaString = isDimmed ? c.dim(JSON.stringify(meta)) : JSON.stringify(meta);
    return meta ? ` ${metaString}` : '';
  }

  // Raw (no mark/prefix)
  private formatRaw(message: string, meta?: Record<string, unknown>): string {
    return `${message}${this.metaStr(meta)}`;
  }
}
