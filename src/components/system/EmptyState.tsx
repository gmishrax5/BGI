import { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#C8CBDE] bg-white py-16 text-center">
      <Icon className="mx-auto h-8 w-8 text-[#9A9BB5]" />
      <h3 className="mt-3 text-lg font-semibold text-[#1A1B2E]">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-[#6B6E9A]">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
