import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AppCard = () => {
  return (
    <Card className="w-full">
      <img
        className="w-full h-56 rounded-t-xl object-cover"
        src="https://images.pexels.com/photos/30299804/pexels-photo-30299804/free-photo-of-dramatic-forest-silhouette-at-vibrant-sunset.jpeg"
      />
      <div>
        <CardHeader>
          <CardTitle>Mastering UI Design for Impactful Solutions</CardTitle>
          <CardDescription>
            HTML is the standard markup language for web pages. Use it to to
            structure the content on your own website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <CardDescription>Completion Rate</CardDescription> */}
          <div className="flex justify-between items-center">
          <Label>1/75 <span className="font-normal">lessons completed</span></Label>
          <Label className="text-xl font-bold">1%</Label>
          </div>
          <Progress value={50} className="bg-slate-950 mt-1" />
          {/* <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form> */}
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter> */}
      </div>
    </Card>
  );
};

export default AppCard;
