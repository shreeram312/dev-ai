"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "@excalidraw/excalidraw/index.css";
import {
  AppState,
  ExcalidrawImperativeAPI,
} from "@excalidraw/excalidraw/types";

const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  }
);

const page = () => {
  console.log(Excalidraw.displayName, "Excalidraw");
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<ExcalidrawImperativeAPI | null>(null);
  const [currentAppState, setCurrentAppState] = useState<AppState | null>(null);

  console.log(currentAppState, "currentAppState");
  return (
    <div className="h-screen w-full">
      {/* @ts-ignore */}
      <Excalidraw
        initialData={{
          elements: [
            {
              id: "cwYC_1cOFAmf_LRZjEN-3",
              type: "ellipse",
              x: 136,
              y: 91.20001220703125,
              width: 243.20001220703125,
              height: 213.60000610351562,
              angle: 0,
              strokeColor: "#1e1e1e",
              backgroundColor: "transparent",
              fillStyle: "solid",
              strokeWidth: 2,
              strokeStyle: "solid",
              roughness: 1,
              opacity: 100,
              groupIds: [],
              frameId: null,
              index: "a0",
              roundness: {
                type: 2,
              },
              seed: 316281914,
              version: 9,
              versionNonce: 861634918,
              isDeleted: false,
              boundElements: null,
              updated: 1750687944193,
              link: null,
              locked: false,
            },
            {
              id: "pVzvdojXlOiDjce2pPgtB",
              type: "diamond",
              x: 102.39997863769531,
              y: 203.99999237060544,
              width: 288.00001525878906,
              height: 294.4000015258789,
              angle: 0,
              strokeColor: "#1e1e1e",
              backgroundColor: "transparent",
              fillStyle: "solid",
              strokeWidth: 2,
              strokeStyle: "solid",
              roughness: 1,
              opacity: 100,
              groupIds: [],
              frameId: null,
              index: "a1",
              roundness: {
                type: 2,
              },
              seed: 231743674,
              version: 56,
              versionNonce: 308741306,
              isDeleted: false,
              boundElements: null,
              updated: 1750687981343,
              link: null,
              locked: false,
            },
            {
              id: "HplPfwnAPXEwBJW2WAUDm",
              type: "ellipse",
              x: 85.5999984741211,
              y: 191.37499911524358,
              width: 330.4000015258789,
              height: 296.8000183105469,
              angle: 0,
              strokeColor: "#1e1e1e",
              backgroundColor: "transparent",
              fillStyle: "solid",
              strokeWidth: 2,
              strokeStyle: "solid",
              roughness: 1,
              opacity: 100,
              groupIds: [],
              frameId: null,
              index: "a2",
              roundness: {
                type: 2,
              },
              seed: 233086522,
              version: 35,
              versionNonce: 287551910,
              isDeleted: false,
              boundElements: null,
              updated: 1750687988076,
              link: null,
              locked: false,
            },
          ],
        }}
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
      />
    </div>
  );
};

export default page;
