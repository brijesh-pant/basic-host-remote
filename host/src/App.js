import React from "react";

const RemoteButton = React.lazy(() =>
  import("basic-host-remote_shared/Button")
);
const RemoteHeading = React.lazy(() =>
  import("basic-host-remote_shared/Heading")
);

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
      <RemoteHeading />
    </React.Suspense>
  </div>
);

export default App;
