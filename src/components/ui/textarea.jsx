import * as React from "react";

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ${className}`}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
