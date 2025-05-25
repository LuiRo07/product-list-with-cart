import React from 'react'

function OrderActionButton({label, handleAction}) {
  return (
    <button
          type="button"
          label={label}
          className="hover:bg-opacity-80 w-1/2 bg-red_orange text-slate-200 p-4 rounded-full border border-black"
          onClick={handleAction}
        >
          Start New Order
        </button>
  )
}

export default OrderActionButton