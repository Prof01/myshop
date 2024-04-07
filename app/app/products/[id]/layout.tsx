import React from "react"


export default function NewProductLayout({ children }) {
    return (
      <div>
        <header>
        <title>MyShop | Product Details</title>
        <meta name="description" content='Read more about a product here' />
          <link rel="icon" href="/favicon.ico" />
        </header>
      <div className="dashboard flex-1 text-gray-100">
          {children}
      </div>
    </div>
    )
  }
  