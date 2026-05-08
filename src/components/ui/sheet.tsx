"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;
const SheetPortal = Dialog.Portal;

const SheetOverlay = React.forwardRef<React.ElementRef<typeof Dialog.Overlay>, React.ComponentPropsWithoutRef<typeof Dialog.Overlay>>(({ className, ...props }, ref) => (
  <Dialog.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/30", className)} {...props} />
));
SheetOverlay.displayName = "SheetOverlay";

const SheetContent = React.forwardRef<React.ElementRef<typeof Dialog.Content>, React.ComponentPropsWithoutRef<typeof Dialog.Content> & { side?: "right" | "left" }>(
  ({ className, children, side = "right", ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        ref={ref}
        className={cn("fixed top-0 z-50 h-full bg-white p-6 transition", side === "right" ? "right-0 border-l" : "left-0 border-r", className)}
        {...props}
      >
        {children}
        <SheetClose className="absolute right-4 top-4" aria-label="Close menu"><X className="h-4 w-4" /></SheetClose>
      </Dialog.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = "SheetContent";

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

const SheetTitle = Dialog.Title;

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle };
