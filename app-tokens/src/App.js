import React from "react";

const RemoteButton = React.lazy(() =>
  import("basic-host-remote_shared/Button")
);
const RemoteHeading = React.lazy(() =>
  import("basic-host-remote_shared/Heading")
);
const RemoteInput = React.lazy(() => import("basic-host-remote_shared/Input"));

const App = () => (
  <div>
    <h2>Tokens App</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
      <RemoteHeading />
      <RemoteInput />
    </React.Suspense>
  </div>
);

export default App;
