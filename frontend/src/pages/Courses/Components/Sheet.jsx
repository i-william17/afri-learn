import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-[state=open]:opacity-100 data-[state=closed]:opacity-0 ${className}`}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={`fixed z-50 flex flex-col bg-gray-900 text-white shadow-2xl transition-transform duration-500 ease-in-out data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full inset-y-0 right-0 h-full w-full sm:w-3/4 lg:w-1/3 border-l border-gray-700 p-6 ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between pb-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-red-500">Filters</h2>
        <SheetPrimitive.Close className="text-gray-400 hover:text-red-500 transition duration-200">
          <Cross2Icon className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </div>
      <div className="mt-6 flex flex-col gap-6">{children}</div>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }) => (
  <div className={`text-left ${className}`} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold text-gray-300 ${className}`}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
};
