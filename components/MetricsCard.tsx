type MetricsCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function MetricsCard({ title, value, description }: MetricsCardProps) {
  return (
    <div className="bg-[#212121] rounded-2xl text-white aspect-square w-full max-w-[300px] flex flex-col justify-between justify-center items-center">
        <div className="text-2xl md:text-3xl text-center pb-8">{title}</div>
        <div className="text-2xl md:text-3xl text-center pb-8">{value}</div>
        <div className="text-sm md:text-base text-center px-4">{description}</div>
    </div>
  );
}
