import { ParentProps, PropsWithChildren, JSX, Context } from "solid-js";

/**
 * Warning: contains extreme type fuckery
 *
 * TODO: Create PR to solid-mdx, it should be better documented and export correct type definitions
 *
 * Context:
 * The `solid-mdx` library has broken types and an interesting approach. We are able to
 * take advantage of this but we need to define the types from the library ourselves.
 *
 * Full explaination + sources:
 * The function `useMDXComponents` provided by `providerImportSource` in `app.config.ts` is
 * used in the compiled mdx code to correctly map the mdx component to a component that can be
 * consumed by the frontend/framework
 * https://mdxjs.com/guides/injecting-components/
 * https://mdxjs.com/packages/mdx/#usemdxcomponents
 * https://mdxjs.com/packages/mdx/#processoroptions
 *
 * `solid-mdx` exports a `useMDXComponents` function which returns a component mapping from mdx
 * to solidjs components. Which is why it can be used in `providerImportSource: 'solid-mdx'`
 *
 * Behind the scenes `solid-mdx` is using a context to hold the default mapping
 * https://docs.solidjs.com/concepts/context
 * https://github.com/nksaraf/solid-mdx/blob/main/src/index.ts#L49 (uses `createComponent` over JSX)
 *
 * Meaning that it looks like this
 * ```
 * export const useMDXComponents = () => useContext(MDXContext);
 * ```
 *
 * This allows us to use our own provider and override these settings,
 * allowing us to inject components, or override the base styles.
 *
 * It also exposes a `wrapper` component
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/HEAD/types/mdx/types.d.ts#L76
 */

// @ts-ignore
import * as mdx from "solid-mdx";
const { MDXProvider } = mdx as {
  MDXProvider: (
    props: PropsWithChildren<{
      components: {
        [k: string]: (props: any) => JSX.Element;
      };
    }>
  ) => JSX.Element;
  MDXContext: Context<{
    [k: string]: (props: any) => JSX.Element;
  }>;
  useMDXComponents: () => {
    [k: string]: (props: any) => JSX.Element;
  };
};

const overrides: Record<string, (_: ParentProps) => JSX.Element> = {
  wrapper: (props) => <div class="border-2 border-black">{props.children}</div>,
};

export const MdxProvider = (
  props: ParentProps<{
    components?: Record<string, (_: ParentProps) => JSX.Element>;
  }>
) => (
  <MDXProvider components={{ ...overrides, ...props.components }}>
    {props.children}
  </MDXProvider>
);
