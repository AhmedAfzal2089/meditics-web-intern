import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LogoSwiper from "@/helpers/EnvantoSwiper";
import { Heart } from "lucide-react";

const HealthProblems = () => {
  return (
    <div className="bg-[#021c35] py-20 ">
      <div className="flex items-center justify-between w-3/4 m-auto">
        <div className="flex flex-col gap-3">
          <div className="border-2 border-green-200 flex gap-2 rounded-2xl p-2 w-fit mx-auto md:mx-0">
            <Heart className="text-green-200" />
            <span className="text-green-200">Do you need Emergency Care</span>
          </div>
          <span className="text-4xl text-white font-bold">
            Do you have any Health Problems
          </span>
        </div>
        <div>
          <Button className="w-full sm:w-50 h-15 bg-blue-500">
            I Need Help
          </Button>
        </div>
      </div>
        <Separator className="my-15 w-3/4"/>
        <LogoSwiper/>
    </div>
  );
};

export default HealthProblems;
