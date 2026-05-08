"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DialogRoot = Dialog.Root;
const DialogTrigger = Dialog.Trigger;
const DialogPortal = Dialog.Portal;
const DialogClose = Dialog.Close;

const DialogContent = React.forwardRef<React.ElementRef<typeof Dialog.Content>, React.ComponentPropsWithoutRef<typeof Dialog.Content>>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30" />
    <Dialog.Content ref={ref} className={cn("fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#C8CBDE] bg-white p-6", className)} {...props}>
      {children}
      <DialogClose className="absolute right-4 top-4" aria-label="Close dialog"><X className="h-4 w-4" /></DialogClose>
    </Dialog.Content>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("space-y-2", className)} {...props} />;
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("mt-4 flex justify-end gap-2", className)} {...props} />;
const DialogTitle = Dialog.Title;
const DialogDescription = Dialog.Description;

export { DialogRoot as Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
