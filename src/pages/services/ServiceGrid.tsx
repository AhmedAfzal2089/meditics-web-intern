import {
  ArrowUpRight,
  Microscope,
  FlaskConical,
  TestTube,
  Droplet,
  Beaker,
  Thermometer,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "clinical-pathology",
    title: "Clinical Pathology",
    description:
      "Clinical pathology involves the analysis of blood, urine, and tissues",
    image: "https://meditics.temptics.com/assets/img/service-1.jpg", // Image URL placeholder
    icon: <Microscope size={20} className="text-blue-600" />,
  },
  {
    id: "histopathology",
    title: "Histopathology",
    description:
      "Histopathology examines tissue samples under a microscope to detect",
    image: "https://meditics.temptics.com/assets/img/service-2.jpg",
    icon: <TestTube size={20} className="text-blue-600" />,
  },
  {
    id: "biochemistry",
    title: "Biochemistry",
    description:
      "Biochemistry tests measure chemical in blood and body fluids, helping",
    image: "https://meditics.temptics.com/assets/img/service-3.jpg",
    icon: <FlaskConical size={20} className="text-blue-600" />,
  },
  {
    id: "hematology",
    title: "Hematology (Blood Tests)",
    description:
      "Hematology tests analyze blood components to detect anemia, infections",
    image: "https://meditics.temptics.com/assets/img/service-4.jpg",
    icon: <Droplet size={20} className="text-blue-600" />,
  },
  {
    id: "urine-stool",
    title: "Urine & Stool Analysis",
    description:
      "Urine and stool analysis help detect infections, digestive issues, kidney problems",
    image: "https://meditics.temptics.com/assets/img/service-5.jpg",
    icon: <Beaker size={20} className="text-blue-600" />,
  },
  {
    id: "hemoglobin",
    title: "Hemoglobin (Hb)",
    description:
      "Hemoglobin (Hb) is a vital protein in red blood cells that carries oxygen throughout",
    image: "https://meditics.temptics.com/assets/img/service-6.jpg",
    icon: <Thermometer size={20} className="text-blue-600" />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              to={`/services/service-detail`}
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="bg-blue-100 w-full h-full flex items-center justify-center text-4xl text-blue-500">
                    🖼️
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
