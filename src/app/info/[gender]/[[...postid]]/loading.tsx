import { LoadingOverlay } from "@mantine/core";
import React from "react";

function loading() {
  return (
    <LoadingOverlay
      loaderProps={{
        type: "bars",
      }}
      visible
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
}

export default loading;
