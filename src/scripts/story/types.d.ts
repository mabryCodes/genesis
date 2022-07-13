declare module 'replace' {

  interface Options {
    regex: string;
    replacement: string;
    paths: string[];
    recursive?: boolean;
    silent?: boolean;
  }

  export default function replace(
    options?: Options,
    str?: string,
    replace?: string,
    search?: string,
  ): string
}
