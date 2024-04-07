import React from "react"


export default function NewProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <div>
        <header>
        <title>MyShop | Add New Product</title>
        <meta name="description" content='You can add new product here' />
          <link rel="icon" href="/favicon.ico" />
        </header>
      <div className="dashboard flex-1 text-gray-100">
          {children}
      </div>
    </div>
    )
  }
  