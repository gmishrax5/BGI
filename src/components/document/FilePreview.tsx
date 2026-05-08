import { File, FileText, ImageIcon, X } from "lucide-react";

function formatBytes(size: number): string {
  if (size < 1024) return `${size} B`;
  const mb = size / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  return `${(size / 1024).toFixed(1)} KB`;
}

function getIcon(name: string) {
  const ext = name.toLowerCase().split(".").pop() ?? "";
  if (ext === "pdf") return <FileText className="h-5 w-5 text-red-500" />;
  if (["png", "jpg", "jpeg", "webp"].includes(ext)) return <ImageIcon className="h-5 w-5 text-blue-500" />;
  if (ext === "docx") return <File className="h-5 w-5 text-blue-500" />;
  return <File className="h-5 w-5 text-gray-500" />;
}

export function FilePreview({ file, onRemove }: { file: File; onRemove?: () => void }) {
  const ext = file.name.split(".").pop()?.toUpperCase() ?? "FILE";
  const name = file.name.length > 40 ? `${file.name.slice(0, 37)}...` : file.name;
  return (
    <div className="relative flex items-center gap-4 rounded-xl border border-[#C8CBDE] bg-white p-4">
      <div>{getIcon(file.name)}</div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[#1A1B2E]">{name}</p>
        <p className="text-xs text-[#6B6E9A]">{formatBytes(file.size)}</p>
      </div>
      <span className="rounded-full bg-[#DDDFEE] px-2 py-1 text-xs text-[#40415D]">{ext}</span>
      {onRemove ? (
        <button aria-label="Remove selected file" onClick={onRemove} className="absolute right-2 top-2 rounded p-1 text-[#6B6E9A] hover:text-[#40415D]">
          <X className="h-3.5 w-3.5" />
        </button>
      ) : null}
    </div>
  );
}
