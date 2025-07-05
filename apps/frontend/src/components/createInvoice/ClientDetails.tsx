
export default function ClientDetails() {
  return (
    <form action="">
      <h2 className="text-lg font-bold">Client Details</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col font-medium" htmlFor="name">
            <span className="mb-1">Name:</span>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter name"
              required
            />
          </label>
          <label className="flex flex-col font-medium" htmlFor="contact">
            <span className="mb-1">Contact Number:</span>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter contact number"
              required
            />
          </label>
          <label className="flex flex-col font-medium" htmlFor="id">
            <span className="mb-1">ID:</span>
            <input
              type="text"
              id="id"
              name="id"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter email"
              required
            />
          </label>
          <button className="bg-button w-fit p-2 text-white rounded hover:brightness-110 transition">
            Create client
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col font-medium" htmlFor="address">
            <span className="mb-1">Address Line 1:</span>
            <input
              type="text"
              id="address"
              name="address"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter address"
              required
            />
          </label>
          <label className="flex flex-col font-medium" htmlFor="address2">
            <span className="mb-1">Address Line 2:</span>
            <input
              type="text"
              id="address2"
              name="address2"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter address"
            />
          </label>
          <label className="flex flex-col font-medium" htmlFor="city">
            <span className="mb-1">City:</span>
            <input
              type="text"
              id="city"
              name="city"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter city"
              required
            />
          </label>
          <label className="flex flex-col font-medium" htmlFor="pincode">
            <span className="mb-1">Pincode:</span>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter pincode"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="paymentStatus">
            <span className="mb-1">Payment Status:</span>
            <select
              id="paymentStatus"
              name="paymentStatus"
              className="p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select payment status</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="partial">Partial</option>
            </select>
          </label>
        </div>
      </div>
    </form>
  )
}
