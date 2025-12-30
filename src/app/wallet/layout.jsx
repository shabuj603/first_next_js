import Link from "next/link";
import React from "react";

export default function WalletLayout({ children }) {
  return (
    <div>
        <hr />
        <nav>
        <Link href="/wallet/deposit">Deposit</Link>||   
        <Link href="/withdraw">Withdraw</Link>
        <Link href="/transfer">Transfer</Link>  
    </nav>
      {children}
    </div>
  );
}