/** Prepends basePath to a public-folder asset path. Handles dev vs. production automatically. */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
