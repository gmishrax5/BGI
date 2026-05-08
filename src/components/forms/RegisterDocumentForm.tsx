"use client";
import { z } from "zod";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MetadataForm } from "@/components/document/MetadataForm";

const types = ["Degree Certificate", "Medical Record", "Legal Contract", "Government License", "Experience Letter", "Land Record", "Financial Document", "Research Paper", "Other"] as const;
const sectors = ["Education", "Healthcare", "Legal", "Government", "Corporate", "Finance"] as const;

export const DocumentRegistrationSchema = z.object({
  title: z.string().min(3).max(100),
  documentType: z.enum(types),
  sector: z.enum(sectors),
  issuerName: z.string().min(2),
  holderName: z.string().optional(),
  expiryDate: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export type RegisterDocumentInput = z.infer<typeof DocumentRegistrationSchema>;

export function RegisterDocumentForm({ onSubmit, defaultIssuer }: { onSubmit: (values: RegisterDocumentInput) => void; defaultIssuer?: string; }) {
  const form = useForm<RegisterDocumentInput>({
    resolver: zodResolver(DocumentRegistrationSchema),
    defaultValues: { documentType: "Degree Certificate", sector: "Education", issuerName: defaultIssuer ?? "" },
  });
  const { register, handleSubmit, formState: { errors }, control } = form;
  const watchedNotes = useWatch({ control, name: "notes" });
  const notesCount = (watchedNotes ?? "").length;
  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"><MetadataForm register={register} errors={errors} notesCount={notesCount} /><button aria-label="Register on blockchain" className="w-full rounded-xl bg-[#40415D] px-4 py-3 text-white hover:bg-[#2e2f46]" type="submit">Register on Blockchain</button></form>;
}
