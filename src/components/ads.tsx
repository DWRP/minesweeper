import { AdPlaceholderProps } from "@/@types/global.types";

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center ${className}`}
    >
      <p className="text-gray-500 font-bold">Ad Space</p>
    </div>
  );
};
