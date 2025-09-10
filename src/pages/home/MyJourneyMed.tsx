import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Heart } from "lucide-react";

const MyJourneyMed = () => {
  return (
    <div className="flex items-center gap-25 justify-center mt-20 ">
      <Card className="w-80 rounded-2xl overflow-hidden shadow-lg text-white bg-gradient-to-br from-[#021c35] to-[#1a2b60]">
        <div className="p-6 text-center">
          <CardTitle className="font-bold text-xl mb-4">
            Time For Meet
          </CardTitle>
          <Separator className="mb-4 border-gray-500" />

          <CardContent className="flex flex-col gap-3">
            <div>
              <p className="font-medium">Monday - Friday</p>
              <p className="text-sm text-gray-300">9:00 AM - 06:00 PM</p>
            </div>

            <Separator className="border-gray-600" />

            <div>
              <p className="font-medium">Saturday - Sunday</p>
              <p className="text-sm text-gray-300">9:00 AM - 06:00 PM</p>
            </div>
          </CardContent>
        </div>

        {/* Fully Blue Footer */}
        <CardFooter className="bg-blue-600 text-center w-full py-4 flex flex-col items-center">
          <p className="text-white font-medium">For Emergency Care</p>
          <p className="text-white text-sm">+208-6666-0112</p>
        </CardFooter>
      </Card>
      <div className="flex flex-col w-120 gap-5">
        <div>
          <div className="border-2 border-blue-500 flex gap-2 rounded-2xl p-2 w-fit mx-auto md:mx-0">
            <Heart className="text-blue-500" />
            <span className="text-blue-500">HI I AM</span>
          </div>
        </div>
        <div className="text-4xl font-bold">The Journey in Medicine</div>
        <span className="text-sm text-gray-600">
          I'm Dr. Tushar Raja a [Specialization, e.g., Internal Medicine
          Specialist] with a passion for providing holistic, evidence-based
          medical care. With over 12 years of experience, I’ve had the privilege
          of treating thousands of patients with empathy, accuracy, and
          dedication.
        </span>
        <span className="text-sm text-gray-600">
          I strongly believe that medicine is not just about treating diseases,
          but about understanding people, building trust, and guiding them
          toward long-term wellness.
        </span>
        <div className="flex gap-2 items-center ">
          <div className=" bg-blue-600 rounded-full p-1">
            <ArrowRight className="text-white" size={15} />
          </div>
          <div>Doctor's Motto or Belief</div>
          <div> Healing begins with listening.</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-4">
          <Button className="w-full sm:w-50 h-15 bg-blue-500 hover:bg-[#021c35]">
            Send Message
          </Button>
          <Button className="w-full sm:w-50 h-15 bg-white text-black hover:text-white hover:bg-[#021c35] border-2">
            Video Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyJourneyMed;
