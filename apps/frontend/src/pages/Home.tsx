import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            EasyBill Dashboard
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Logout
          </button>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full py-8 px-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-gray-700">
            Here’s a summary of your billing activity.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-medium mb-1">Total Invoices</h3>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-medium mb-1">Pending Payments</h3>
            <p className="text-3xl font-bold text-yellow-500">3</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-medium mb-1">Revenue This Month</h3>
            <p className="text-3xl font-bold text-green-600">$4,200</p>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Recent Invoices</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Invoice #
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">Client</th>
                  <th className="px-4 py-2 text-left text-gray-600">Amount</th>
                  <th className="px-4 py-2 text-left text-gray-600">Status</th>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">INV-0012</td>
                  <td className="px-4 py-2">Acme Corp</td>
                  <td className="px-4 py-2">$1,200</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-2">2025-07-01</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">INV-0011</td>
                  <td className="px-4 py-2">Beta LLC</td>
                  <td className="px-4 py-2">$800</td>
                  <td className="px-4 py-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-2">2025-06-28</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">INV-0010</td>
                  <td className="px-4 py-2">Gamma Inc</td>
                  <td className="px-4 py-2">$2,200</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-2">2025-06-25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm">
        &copy; 2025 EasyBill. All rights reserved.
      </footer>
    </div>
  )
}
