import React from "react";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import PlayButton from "../src/components/commons/PlayButton";
import { store } from "../src/redux/store";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => (key === "play-button" ? "Search" : undefined),
  }),
}));

jest.mock("../src/client/api", () => ({
  sendArtistInput: jest.fn().mockResolvedValue({
    data: {
      hasResponse: true,
      artists: [
        { id: "1", name: "Artist 1", images: [""], popularity: 10 },
        { id: "2", name: "Artist 2", images: [""], popularity: 10 },
      ],
    },
  }),
}));

describe("PlayButton", () => {
  it("triggers loading on click", () => {
    const setLoading = jest.fn();
    const setArtists = jest.fn();
    render(
      <Provider store={store}>
        <PlayButton
          setLoading={setLoading}
          setArtists={setArtists}
          loading={false}
        />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(setLoading).toHaveBeenCalledWith(true);
  });
});
