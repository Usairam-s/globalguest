import React, { ReactNode } from "react";

function LayoutCreation({ children }: { children: ReactNode }) {
  return <div className="mt-10">{children}</div>;
}

export default LayoutCreation;
