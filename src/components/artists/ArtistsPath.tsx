import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";

type Artist = {
    id: number;
    name: string;
};

type ArtistPathProps = {
    path: Artist[];
};

const ArtistPath = ({ path }: ArtistPathProps) => {
    const [graphDimensions, setGraphDimensions] = useState({ width: window.innerWidth + 'px', height: '400px' });



    useEffect(() => {
        const updateSize = () => {
            const updatedWidth = window.innerWidth - 12; 
           
            const calculatedHeight = Math.max(120, path.length * 120 ) + 'px';
            setGraphDimensions({
                width: updatedWidth + 'px',
                height: calculatedHeight
            });
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [path.length]);


    const nodes = path.map((artist, index) => ({
        id: artist.id,
        label: artist.name,
        title: artist.name,
        x: (window.innerWidth - 12) * ((index % 2) * 0.8 + 0.1), 
        y: index * 120,
        size: 40,
    }));

    const edges = path.slice(1).map((artist, index) => ({
        from: path[index].id,
        to: artist.id,
    }));

    const graph = { nodes, edges };

    const options = {
        layout: {
            hierarchical: false,
            improvedLayout: true
        },
        edges: {
            color: "#1db954",
            arrows: {
                to: { enabled: true, scaleFactor: 1.2 }
            }
        },
        nodes: {
            shape: "dot",
            font: {
                size: 32,
                color: '#FFFFFF',
                face: 'Montserrat'
            },
            borderWidth: 2,
            color: {
                background: '#1db954',
                border: '#121212'
            },
            shadow: true
        },
        height: graphDimensions.height,
        width: graphDimensions.width,
        physics: {
          enabled: false
        },
        interaction: {
          dragNodes: true,
          dragView: true,
          zoomView: false,
        }
    };

    return (
        <div className="p-8 mb-20 flex flex-col items-center justify-center bg-black w-full overflow-hidden" style={{ height: graphDimensions.height }}>
            <Graph graph={graph} options={options} style={{ height: '100%', width: '100%' }} />
        </div>
    );
};

export default ArtistPath;
