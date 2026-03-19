import React from "react"
import ReduxProvider from "@/redux/ReduxProvider"
import { RefetchProvider } from "@/contexts/RefetchContext"
import ToasterProvider from "@/components/common/toaster"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <RefetchProvider>
        {children}
       <ToasterProvider />
      </RefetchProvider>
    </ReduxProvider>
  )
}

export default Providers
