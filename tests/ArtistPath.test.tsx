import React from "react";
import { render, screen } from "@testing-library/react";
import ArtistPath from "../src/components/artists/ArtistsPath";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("ArtistPath", () => {
  it("renders without crashing", () => {
    const path = [{ id: "1", name: "Artist 1", images: [], popularity: 10 }];
    render(<ArtistPath path={path} setArtists={jest.fn()} />);
    expect(screen.getByText("Artist 1")).toBeInTheDocument();
  });
});
