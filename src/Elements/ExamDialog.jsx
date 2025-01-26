import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const ExamDialog = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Read More</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[50vw] sm:min-h-[50vh] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Exam Title</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            dolorum autem ex voluptate quam rem, ipsam minima. Vero ratione
            necessitatibus consequatur voluptates culpa cum temporibus expedita
            dolores, rerum, delectus amet.Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Alias sit eligendi delectus doloribus!
            Laboriosam, incidunt inventore quae, doloremque enim nihil
            voluptates dolorem, natus quibusdam doloribus sequi rem eum
            laudantium modi?
          </DialogDescription>
        </DialogHeader>
        
        <Label className="text-xl">Rules & Regulations</Label>

        {/* Rule 1 */}
        <Collapsible
          open={isOpen1}
          onOpenChange={setIsOpen1}
          className="w-[500px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Rule 01</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              architecto officiis fuga magnam, alias explicabo quisquam non
              reiciendis illum perferendis dolor ducimus aspernatur, deserunt
              harum. Veniam, voluptatibus placeat. Necessitatibus, nesciunt?
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Rule 2 */}
        <Collapsible
          open={isOpen2}
          onOpenChange={setIsOpen2}
          className="w-[500px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Rule 02</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              Description of Rule 2 goes here.
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Rule 3 */}
        <Collapsible
          open={isOpen3}
          onOpenChange={setIsOpen3}
          className="w-[500px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Rule 03</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              Description of Rule 3 goes here.
            </div>
          </CollapsibleContent>
        </Collapsible>

        <DialogFooter>
          <Button type="submit">Take the Exam</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExamDialog;
