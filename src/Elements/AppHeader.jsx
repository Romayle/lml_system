import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

const AppHeader = ({ pageName }) => {
  return (
    <div className="w-full items-center justify-between flex py-4">
      <Label className="text-xl font-bold">{pageName}</Label>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AppHeader;
