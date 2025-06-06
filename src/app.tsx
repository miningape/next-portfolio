import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MdxProvider } from "./mdx/mdx-provider";

import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MdxProvider>
          <main>
            <Suspense>{props.children}</Suspense>
          </main>
        </MdxProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
