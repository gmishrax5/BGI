"use client";
import { UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { FilePreview } from "./FilePreview";

const defaults = [".pdf", ".docx", ".png", ".jpg", ".zip"];

export function FileDropzone({ onFileSelect, accept = defaults, maxSize = 10485760, selectedFile, onClear }: { onFileSelect: (file: File) => void; accept?: string[]; maxSize?: number; selectedFile?: File | null; onClear?: () => void; }) {
  const acceptMap: Record<string, string[]> = {
    "application/pdf": [".pdf"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
    "application/zip": [".zip"],
  };
  const filteredAccept = Object.fromEntries(Object.entries(acceptMap).filter(([, exts]) => exts.some((ext) => accept.includes(ext))));
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: filteredAccept, maxSize, multiple: false, onDropAccepted: (files) => files[0] && onFileSelect(files[0]) });

  if (selectedFile) {
    return <div className="space-y-2 rounded-2xl border-2 border-dashed border-[#40415D] bg-[#F5F6FC] p-4"><FilePreview file={selectedFile} onRemove={onClear} /><button {...getRootProps()} className="text-xs text-[#6B6E9A] underline"><input {...getInputProps()} />Change file</button></div>;
  }

  return <div {...getRootProps()} aria-label="Document upload dropzone" className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-200 ${isDragActive ? "scale-[1.01] border-[#40415D] bg-[#DDDFEE]" : "border-[#C8CBDE] bg-[#F5F6FC] hover:border-[#40415D] hover:bg-[#DDDFEE]"}`}><input {...getInputProps()} /><UploadCloud className={`mx-auto mb-4 h-12 w-12 ${isDragActive ? "animate-bounce text-[#40415D]" : "text-[#9A9BB5]"}`} /><p className={`text-lg ${isDragActive ? "font-bold text-[#40415D]" : "font-semibold text-[#1A1B2E]"}`}>{isDragActive ? "Release to upload" : "Drop your document here"}</p><p className="text-sm text-[#6B6E9A]">or click to browse files</p><p className="mx-auto mt-3 inline-flex rounded-full bg-[#DDDFEE] px-3 py-1 text-xs text-[#6B6E9A]">PDF, DOCX, PNG, JPG, ZIP ? Max 10MB</p></div>;
}
