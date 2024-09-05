"use client";
import { Button } from "@/components/ui/button";
import { useGameModeStore } from "@/store/gameMode.store";
import { useBoardStore } from "@/store/board.store";
import { usePlayerStore } from "@/store/player.store";
import { HelpCircle, Info, User, Users } from "lucide-react";
import { Link } from "@/i18n/routing";

const Minesweeper: React.FC = () => {
  const { setGameMode } = useGameModeStore();
  const { resetBoard } = useBoardStore();
  const { setPlayers, setCurrentPlayer } = usePlayerStore();

  const resetGame = () => {
    resetBoard();
    setCurrentPlayer(0);
    setPlayers([
      { name: "Player 1", score: 0 },
      { name: "Player 2", score: 0 },
    ]);
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl h-[70%] flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold mb-6">Minesweeper</h1>
      <Link
        href="/sigle"
        onClick={() => {
          setGameMode("single-player");
          resetGame();
        }}
      >
        <Button className="w-48">
          <User className="mr-2 h-4 w-4" /> Single Player
        </Button>
      </Link>

      <Link
        href="/multi-menu"
        onClick={() => {
          setGameMode("multiplayer");
          resetGame();
        }}
      >
        <Button className="w-48">
          <Users className="mr-2 h-4 w-4" /> Multiplayer
        </Button>
      </Link>

      <Link href="/manual" onClick={() => setGameMode("instructions")}>
        <Button className="w-48">
          <HelpCircle className="mr-2 h-4 w-4" /> Instructions
        </Button>
      </Link>

      <Link href="/credits" onClick={() => setGameMode("credits")}>
        <Button className="w-48">
          <Info className="mr-2 h-4 w-4" /> Credits
        </Button>
      </Link>
    </div>
  );
};

export default Minesweeper;
