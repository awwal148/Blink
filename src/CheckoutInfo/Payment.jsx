import React from 'react'

const Payment = ({shippingInfo}) => {
  return (
    <section>
    <div className="text-green-600 mt-4">
      <p className="text-lg font-semibold">Payment Successful!</p>
      <p>Your order has been successfully processed. Thank you for your purchase!</p>
      {/* You can add more information or links to the confirmation page here */}
    </div>
    </section>
  )
}

export default Payment