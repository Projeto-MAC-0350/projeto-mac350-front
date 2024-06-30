import React from "react";
import { render, screen } from "@testing-library/react";
import ArtistPath from "../src/components/artists/ArtistsPath";

interface Node {
  id: string | number;
  label: string;
}

interface Graph {
  nodes: Node[];
}


jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string): string => str,
  }),
}));


jest.mock("react-graph-vis", () => ({
  __esModule: true,
  default: ({ graph }: { graph: Graph }) => (
    <div>
      {graph.nodes.map((node: Node) => (
        <div key={node.id}>{node.label}</div>
      ))}
    </div>
  ),
}));

describe("ArtistPath", () => {
  it("renders without crashing and shows both artists", () => {
    const path = [
      { id: "1", name: "Artist 1", images: [], popularity: 10 },
      { id: "2", name: "Artist 2", images: [], popularity: 10 },
    ];
    render(<ArtistPath path={path} setArtists={jest.fn()} />);

    expect(screen.getByText("Artist 1")).toBeInTheDocument();
    expect(screen.getByText("Artist 2")).toBeInTheDocument();
  });
});
