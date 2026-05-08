import { AlertTriangle } from "lucide-react";

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        <p>{message}</p>
      </div>
    </div>
  );
}
