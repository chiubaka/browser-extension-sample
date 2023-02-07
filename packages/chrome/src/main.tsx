import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

Sentry.init({
  dsn: "https://fd3b1d22b7a24687827900fc9a9585e2@o120200.ingest.sentry.io/4504635860516864",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1,
});

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement,
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
