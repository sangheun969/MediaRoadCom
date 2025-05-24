declare module "@ap.cx/react-fullpage" {
  import * as React from "react";

  export interface FullpageSectionProps {
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const FullpageSection: React.FC<FullpageSectionProps>;
  export const FullPageSections: React.FC<{ children?: React.ReactNode }>;
  const Fullpage: React.FC<{ children?: React.ReactNode }>;

  export default Fullpage;
}
