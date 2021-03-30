import React, { ReactNode } from 'react'
// import { Web3Provider } from '@ethersproject/providers'
// import { BlockNumberProvider } from './blockNumber/provider'
// import { ChainStateProvider } from './chainState/provider'
// import { WalletProvider } from './wallet/provider'
// import { TransactionProvider } from './transactions/provider'
import { HelmetProvider } from 'react-helmet-async'
// import IpfsRouter from 'ipfs-react-router'

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
		<HelmetProvider>
			{/* <IpfsRouter> */}
					{children}
			{/* </IpfsRouter> */}
		</HelmetProvider>
  )
}
