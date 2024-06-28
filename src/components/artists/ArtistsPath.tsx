import React, { useEffect, useRef, useState } from "react";
import Graph from "react-graph-vis";
import Loading from "../commons/Loading";
import { useTranslation } from "react-i18next";

export type Artist = {
  id: string;
  name: string;
  images: string[];
  popularity: number;
};

type ArtistPathProps = {
  path: Artist[];
  setArtists: (artists: Artist[]) => void;
};

type Node = {
  id: number;
  label: string;
  title?: string;
  x: number;
  y: number;
  size: number;
};

type Edge = {
  from: number;
  to: number;
};

type GraphData = {
  nodes: Node[];
  edges: Edge[];
};

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const character = str.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash |= 0;
  }
  return Math.abs(hash);
}

const ArtistPath = ({ path, setArtists }: ArtistPathProps) => {
  const { t } = useTranslation();
  const graphContainerRef = useRef(null); 
  const [graph, setGraph] = useState<GraphData>({ nodes: [], edges: [] });
  const [containerDimensions, setContainerDimensions] = useState({ width: 800, height: 400 }); 
  console.log(path);
  useEffect(() => {
    const updateSize = () => {
      if (graphContainerRef.current) {
        const { offsetWidth, offsetHeight } = graphContainerRef.current;
        setContainerDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (path.length > 0) {
      const nodes: Node[] = path.map((artist, index) => ({
        id: hashCode(artist.id),
        label: artist.name,
        title: artist.name,
        x: index % 2 === 0 ? -containerDimensions.width/4 +150: containerDimensions.width/4 - 150,
        y: (-containerDimensions.height/4 + 50) + index * 50,
        size: 20,
      }));

      const edges: Edge[] = path.slice(1).map((artist, index) => ({
        from: hashCode(path[index].id),
        to: hashCode(artist.id),
      }));

      setGraph({ nodes, edges });
    }
  }, [path, containerDimensions]);
  
  

  const options = {
    layout: {
      hierarchical: false,
      improvedLayout: true,
    },
    edges: {
      color: "#1db954",
      arrows: {
        to: { enabled: true, scaleFactor: 1.2 },
      },
    },
    nodes: {
      shape: "dot",
      font: {
        size: 24,
        color: "#FFFFFF",
        face: "Montserrat",
      },
      borderWidth: 2,
      color: {
        background: "#1db954",
        border: "#121212",
      },
      shadow: true,
    },
    height: `${containerDimensions.height}px`,
    width: `${containerDimensions.width}px`,
    physics: {
      enabled: false,
    },
    interaction: {
      dragNodes: true,
      dragView: true,
      zoomView: false,
    },
  };
  return (
    <div className="pb-60 flex flex-col items-center justify-start bg-black size-full" ref={graphContainerRef}>
      <div className="pt-8 px-20 w-full justify-start ">
        <button
          onClick={() => setArtists([])}
          className="bg-green flex flex-row space-x-2 items-center justify-center rounded-full py-2 pl-2 pr-4 hover:bg-opacity-70 transition-colors duration-100"
        >
          <div className="bg-black h-full rounded-full">
            <svg
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
            >
              <path d="M14 7l-5 5 5 5V7z" fill="white" />
              <path d="M19 7l-5 5 5 5V7z" fill="white" />
            </svg>
          </div>
          <p className="font-sans text-xl font-bold text-black">{t("back")}</p>
        </button>
      </div>
      <div
        className="flex flex-col items-start justify-start w-full h-full"
        style={{ height: containerDimensions.height }}
      >
        <Graph
          graph={graph}
          options={options}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default ArtistPath;
