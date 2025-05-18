import type { SetRequired } from 'type-fest';

/**
 * Make sure the type has at least 'id' field (required),
 * while allowing other fields to remain optional.
 *
 * @example
 * type UserWithId = WithId<User>;
 */
export type WithId<T extends { id?: unknown }> = SetRequired<Partial<T>, 'id'>;
