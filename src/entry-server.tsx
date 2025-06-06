// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="bg-[#191917]">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Kyle - hermetic.dev</title>
          <meta
            name="description"
            content="Kyle Johnson's Portfolio - hermetic.dev"
          />
          <link rel="icon" href="/favicon-32x32.png" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
