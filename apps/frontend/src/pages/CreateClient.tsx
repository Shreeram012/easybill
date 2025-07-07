import React, { useState } from 'react'

export default function CreateClient() {
  const [clientName, setClientName] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [pin, setPin] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [balance, setBalance] = useState('')
  const [gstin, setGstin] = useState('')

  const idTypes = ['Aadhar', 'PAN', 'Passport', 'Voter ID', 'Other']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle client creation logic here
    alert(`Client Created: ${clientName}`)
    setClientName('')
    setAddressLine1('')
    setAddressLine2('')
    setCity('')
    setPin('')
    setContact('')
    setEmail('')
    setIdType('')
    setIdNumber('')
    setBalance('')
    setGstin('')
  }

  return (
    <section className="create-client">
      <div className="bg-main p-5 my-28 w-11/12 mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Create Client</h1>
        <hr className="my-2 border-gray-300" />
        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1" htmlFor="clientName">
              Client Name
            </label>
            <input
              id="clientName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block font-semibold mb-1"
                htmlFor="addressLine1"
              >
                Address Line 1
              </label>
              <input
                id="addressLine1"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block font-semibold mb-1"
                htmlFor="addressLine2"
              >
                Address Line 2
              </label>
              <input
                id="addressLine2"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="city">
                City
              </label>
              <input
                id="city"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="pin">
                PIN
              </label>
              <input
                id="pin"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                maxLength={10}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="contact">
                Contact Number
              </label>
              <input
                id="contact"
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                maxLength={15}
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="idType">
                ID Type
              </label>
              <select
                id="idType"
                className="w-full p-2 border border-gray-300 rounded"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select ID Type
                </option>
                {idTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="idNumber">
                ID Number
              </label>
              <input
                id="idNumber"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="gstin">
                GSTIN (optional)
              </label>
              <input
                id="gstin"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={gstin}
                onChange={(e) => setGstin(e.target.value)}
                maxLength={15}
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="balance">
                Opening Balance
              </label>
              <input
                id="balance"
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                min="0"
                step="0.01"
                placeholder="0.00"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Create Client
          </button>
        </form>
      </div>
    </section>
  )
}
