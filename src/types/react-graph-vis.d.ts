// src/types/react-graph-vis.d.ts
declare module 'react-graph-vis' {
    export interface GraphProps {
      graph: {
        nodes: Array<{ id: number ; label: string; title?: string }>;
        edges: Array<{ from: number; to: number }>;
      };
      options?: object;
      events?: object;
      style?: React.CSSProperties;
      getNetwork?: (network: any) => void;
      getEdges?: (edges: any) => void;
      getNodes?: (nodes: any) => void;
    }
  
    const Graph: React.ComponentType<GraphProps>;
    export default Graph;
  }
  