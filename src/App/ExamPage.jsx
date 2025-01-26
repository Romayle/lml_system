import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

// Define the schema using Zod
const FormSchema = z.object({
  question1: z.enum(["place", "portable", "price", "promotion"], {
    required_error: "Please select an answer for Question 1.",
  }),
  question2: z.enum(["java", "python", "html", "csharp"], {
    required_error: "Please select an answer for Question 2.",
  }),
});

const ExamPage = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      console.log(value, name, type);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const totalQuestions = Object.keys(FormSchema.shape).length;
  const answeredQuestions = Object.values(form.watch()).filter(Boolean).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="max-w-2xl">
      <div className="pt-8">
        <Form {...form}>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Section 2</h2>
              <p className="mt-1 text-sm text-gray-600">
                Choose the CORRECT answers for the following questions
              </p>
            </div>

            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-gray-600 text-right">
                {answeredQuestions} of {totalQuestions} questions answered
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Question 1 */}
              <FormField
                control={form.control}
                name="question1"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-medium">
                      1. Which of the following is NOT one of the 4Ps?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <RadioOption value="place" label="a) Place" />
                        <RadioOption value="portable" label="b) Portable" />
                        <RadioOption value="price" label="c) Price" />
                        <RadioOption value="promotion" label="d) Promotion" />
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Question 2 */}
              <FormField
                control={form.control}
                name="question2"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-medium">
                      2. Which language is primarily used for web structure?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <RadioOption value="java" label="a) Java" />
                        <RadioOption value="python" label="b) Python" />
                        <RadioOption value="html" label="c) HTML" />
                        <RadioOption value="csharp" label="d) C#" />
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-3 text-lg font-semibold transition-colors duration-300 ease-in-out"
              >
                Submit Answers
              </Button>
            </form>
          </div>
        </Form>
      </div>
    </div>
  );
};

const RadioOption = ({ value, label }) => (
  <FormItem className="flex items-center space-x-3 space-y-0">
    <FormControl>
      <RadioGroupItem
        value={value}
        className="h-5 w-5 border-2 border-gray-300 text-primary focus:ring-2 focus:ring-primary"
      />
    </FormControl>
    <FormLabel className="font-medium text-gray-700 cursor-pointer select-none">
      {label}
    </FormLabel>
  </FormItem>
);

export default ExamPage;
