import type { FC } from 'react';
import { Plus } from 'lucide-react';

const specialties: string[] = [
  'Orthopedics',
  'Neurology',
  'Dermatology',
  'Cardiology',
  'Pediatrics',
  'Oncology',
  'Gastroenterology',
];

const Slider: FC = () => {
  return (
    <div className="relative overflow-hidden bg-lime-200 py-3">
      <div className="flex animate-marquee whitespace-nowrap gap-8 px-4">
        {[...specialties, ...specialties].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-lg font-bold text-neutral-900 uppercase"
          >
            <Plus className="w-5 h-5 text-blue-950" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
