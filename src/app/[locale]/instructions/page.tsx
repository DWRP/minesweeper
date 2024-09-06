"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const Instructions: React.FC = () => {
  const { back } = useRouter();
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Instructions</h2>
      <Card className="p-4 max-w-2xl">
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Click on a cell to reveal it.</li>
            <li>Right-click on a cell to flag it as a potential mine.</li>
            <li>Numbers indicate how many mines are adjacent to that cell.</li>
            <li>Avoid clicking on mines!</li>
            <li>In multiplayer mode, players take turns revealing cells.</li>
            <li>
              The game ends when a mine is revealed or all non-mine cells are
              uncovered.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Button onClick={back}>Back to Menu</Button>
    </div>
  );
};

export default Instructions;
