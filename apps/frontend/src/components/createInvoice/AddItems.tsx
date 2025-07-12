import { useState } from 'react'

interface Item {
  category: string
  code: string
  qty: number
  units: string
  price: number
  discount: number
}

export default function AddItems() {
  const [items, setItems] = useState<Item[]>([
    { category: '', code: '', qty: 1, units: '', price: 0, discount: 0 },
  ])

  const handleChange = <K extends keyof Item>(index: number, field: K, value: Item[K]) => {
    const updated = [...items]
    updated[index][field] =
      (field === 'qty' || field === 'price' || field === 'discount'
        ? Number(value)
        : value) as Item[K]
    setItems(updated)
  }

  const handleAddRow = () => {
    setItems([
      ...items,
      { category: '', code: '', qty: 1, units: '', price: 0, discount: 0 },
    ])
  }

  const handleRemoveRow = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const calculateAmount = (item: Item) => {
    const total = item.qty * item.price
    const discount = (total * item.discount) / 100
    return (total - discount).toFixed(2)
  }

  return (
    <div className="add-items p-4">
      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-2 border">S.No</th>
            <th className="px-2 py-2 border">Category</th>
            <th className="px-2 py-2 border">Code</th>
            <th className="px-2 py-2 border">Qty</th>
            <th className="px-2 py-2 border">Units</th>
            <th className="px-2 py-2 border">Price</th>
            <th className="px-2 py-2 border">Discount (%)</th>
            <th className="px-2 py-2 border">Amount</th>
            <th className="px-2 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="even:bg-gray-50">
              <td className="px-2 py-1 border text-center">{idx + 1}</td>
              <td className="px-2 py-1 border">
                <input
                  type="text"
                  value={item.category}
                  onChange={(e) =>
                    handleChange(idx, 'category', e.target.value)
                  }
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </td>
              <td className="px-2 py-1 border">
                <input
                  type="text"
                  value={item.code}
                  onChange={(e) => handleChange(idx, 'code', e.target.value)}
                  className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </td>
              <td className="px-2 py-1 border">
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={(e) => handleChange(idx, 'qty', Number(e.target.value))}
                  className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-right"
                />
              </td>
              <td className="px-2 py-1 border">
                <input
                  type="text"
                  value={item.units}
                  onChange={(e) => handleChange(idx, 'units', e.target.value)}
                  className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </td>
              <td className="px-2 py-1 border">
                <input
                  type="number"
                  min={0}
                  value={item.price}
                  onChange={(e) => handleChange(idx, 'price', Number(e.target.value))}
                  className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-right"
                />
              </td>
              <td className="px-2 py-1 border">
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={item.discount}
                  onChange={(e) =>
                    handleChange(idx, 'discount', Number(e.target.value))
                  }
                  className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-200 text-right"
                />
              </td>
              <td className="px-2 py-1 border text-right font-semibold">
                {calculateAmount(item)}
              </td>
              <td className="px-2 py-1 border text-center">
                <button
                  onClick={() => handleRemoveRow(idx)}
                  disabled={items.length === 1}
                  className={`px-2 py-1 rounded text-white ${
                    items.length === 1
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-red-500 hover:bg-red-600'
                  }`}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="mt-4 px-2.5 py-0.5 bg-button text-white hover:bg-blue-700 transition rounded-full text-2xl font-bold"
        onClick={handleAddRow}
      >
        +
      </button>
    </div>
  )
}
