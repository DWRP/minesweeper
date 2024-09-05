"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Credits: React.FC = () => {
  const { back } = useRouter();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Credits</h2>
      <Card className="p-4 max-w-2xl">
        <CardContent>
          <p>Minesweeper game created by Douglas Pardim</p>
          <p>Built with React and Tailwind CSS</p>
          <p>Icons provided by Lucide React</p>
        </CardContent>
      </Card>
      <Button onClick={back}>Back to Menu</Button>
    </div>
  );
};

export default Credits;
