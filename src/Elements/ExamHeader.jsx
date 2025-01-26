import { Label } from "@/components/ui/label";

const ExamHeader = () => {
  return (
    <div className="w-full items-center justify-between flex py-4">
      <Label className="text-xl font-bold">Do not REFRESH the Tab while taking the exam.</Label>
      {/* <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
    </div>
  );
};

export default ExamHeader;
