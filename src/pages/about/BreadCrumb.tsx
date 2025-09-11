import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadCrumbProps {
  title: string;
  page?: string;
}

const BreadCrumb = ({ title, page }: BreadCrumbProps) => {
  return (
    <section className="relative w-full h-[220px] bg-gradient-to-r from-[#1a3080] to-[#021c35] flex flex-col justify-center items-center text-white px-5 lg:px-0 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-10 w-6 h-6 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-4 right-12 w-6 h-6 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-8 left-1/4 w-4 h-4 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-4 right-1/3 w-5 h-5 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold z-10">{title}</h1>

      {/* Breadcrumb */}
      <Breadcrumb className="text-sm mt-2 z-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-white/80 hover:underline">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white/60 px-2">
            ›
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/about" className="text-white font-semibold">
              {page}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default BreadCrumb;
