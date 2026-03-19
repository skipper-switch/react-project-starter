
import { ShieldX, CircleCheck, InfoIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        unstyled: false,
        classNames: {
          // toast: "[&:is([data-type])]:bg-transparent",
          error:
            "!bg-[#DC2626] !border-[#b91c1c] !text-white [&_[data-icon]]:text-white [&_[data-title]]:text-white [&_[data-description]]:text-white/80 [&_[data-close-button]]:!border-white/30 [&_[data-close-button]]:!text-white",
          success:
            "!bg-[#0061F9] !border-[#0050d0] !text-white [&_[data-icon]]:text-white [&_[data-title]]:text-white [&_[data-description]]:text-white/80 [&_[data-close-button]]:!border-white/30 [&_[data-close-button]]:!text-white",
          warning:
            "!bg-yellow-500 !border-yellow-600 !text-white [&_[data-icon]]:text-white [&_[data-title]]:text-white [&_[data-description]]:text-white/80",
          info:
            "!bg-blue-400 !border-blue-500 !text-white [&_[data-icon]]:text-white [&_[data-title]]:text-white [&_[data-description]]:text-white/80",
        },
      }}
      icons={{
        success: <CircleCheck className="text-white" size={20} />,
        error: <ShieldX className="text-white" size={20} />,
        info: <InfoIcon className="text-white" size={20} />,
        // warning: <WarningIcon />,
      }}
    />
  );
};

export default ToasterProvider;