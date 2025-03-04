interface ReadOnlyFormData extends Iterator<[string, string]> {
	get: (key: string) => string;
	getAll: (key: string) => string[];
	has: (key: string) => boolean;
	entries: () => Iterator<[string, string]>;
	keys: () => Iterator<string>;
	values: () => Iterator<string>;
}

type BaseBody = string | Buffer | ReadOnlyFormData;
export type ParameterizedBody<Body = unknown> = Body extends FormData
	? ReadOnlyFormData
	: BaseBody & Body;

// TODO we want to differentiate between request headers, which
// always follow this type, and response headers, in which
// 'set-cookie' is a `string[]` (or at least `string | string[]`)
// but this can't happen until TypeScript 4.3
export type Headers = Record<string, string>;

export type Location = {
	host: string;
	path: string;
	params: Record<string, string>;
	query: URLSearchParams;
};
