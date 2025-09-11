import { type FC, useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-gray-100 rounded-lg transition-all ${
        open ? "shadow-md" : ""
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-4 flex justify-between items-center text-left"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {open ? <ChevronDown size={18} /> : <ArrowUpRight size={18} />}
      </button>
      {open && content && (
        <div className="px-4 pb-4 text-sm text-gray-600 border-t border-gray-300">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
