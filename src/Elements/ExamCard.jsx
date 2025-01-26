import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExamDialog from "./ExamDialog";

const ExamCard = () => {
  return (
    <Card className="w-full">
      <img
        className="w-full h-40 rounded-t-xl object-cover"
        src="https://images.pexels.com/photos/249360/pexels-photo-249360.jpeg"
      />
      <CardHeader>
        <CardTitle className="text-xl">Exam Title</CardTitle>
        {/* <CardDescription>
          HTML is the standard markup language for web pages. Use it to to
          structure the content on your own website.
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum atque id
          quod nemo? Pariatur ipsum culpa iste vel harum qui dolore, veniam
          nulla enim voluptate ut, rerum provident at perferendis!
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Take Exam</Button>
        <ExamDialog />
        {/* <Button>Read More</Button> */}
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
