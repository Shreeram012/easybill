import React, { useState } from 'react'

export default function CreateItem() {
  const [itemName, setItemName] = useState('')
  const [itemCode, setItemCode] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([
    'General',
    'Electronics',
    'Office',
  ])
  const [showNewCategory, setShowNewCategory] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [description, setDescription] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')
  const [salePrice, setSalePrice] = useState('')
  const [defaultDiscount, setDefaultDiscount] = useState('')
  const [qtyUnits, setQtyUnits] = useState('pcs')
  const [initialStock, setInitialStock] = useState('')
  const [lowStockReminder, setLowStockReminder] = useState('')

  const qtyUnitsOptions = ['pcs', 'kg', 'litre', 'box', 'pack']

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
      setCategory(newCategory)
      setNewCategory('')
      setShowNewCategory(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle item creation logic here
    alert(`Item Created: ${itemName}`)
    setItemName('')
    setItemCode('')
    setCategory('')
    setDescription('')
    setPurchasePrice('')
    setSalePrice('')
    setDefaultDiscount('')
    setQtyUnits('pcs')
    setInitialStock('')
    setLowStockReminder('')
  }

  return (
    <section className="create-item">
      <div className="bg-main p-5 my-28 w-11/12 mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Create Item</h1>
        <hr className="my-2 border-gray-300" />
        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="category">
                Category
              </label>
              <div className="flex gap-2">
                <select
                  id="category"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
                  onClick={() => setShowNewCategory(!showNewCategory)}
                  title="Add new category"
                >
                  +
                </button>
              </div>
              {showNewCategory && (
                <div className="flex mt-2 gap-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="New category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-green-600 text-white px-3 rounded hover:bg-green-700"
                    onClick={handleAddCategory}
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="itemCode">
                Item Code
              </label>
              <input
                id="itemCode"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={itemCode}
                onChange={(e) => setItemCode(e.target.value)}
                placeholder="e.g. SKU123"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="itemName">
              Item Name
            </label>
            <input
              id="itemName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block font-semibold mb-1"
                htmlFor="purchasePrice"
              >
                Purchase Price
              </label>
              <input
                id="purchasePrice"
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="salePrice">
                Sale Price
              </label>
              <input
                id="salePrice"
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block font-semibold mb-1"
                htmlFor="defaultDiscount"
              >
                Default Discount (%)
              </label>
              <input
                id="defaultDiscount"
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={defaultDiscount}
                onChange={(e) => setDefaultDiscount(e.target.value)}
                min="0"
                max="100"
                step="0.01"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="qtyUnits">
                Quantity Units
              </label>
              <select
                id="qtyUnits"
                className="w-full p-2 border border-gray-300 rounded"
                value={qtyUnits}
                onChange={(e) => setQtyUnits(e.target.value)}
              >
                {qtyUnitsOptions.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block font-semibold mb-1"
                htmlFor="initialStock"
              >
                Initial Stock
              </label>
              <input
                id="initialStock"
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={initialStock}
                onChange={(e) => setInitialStock(e.target.value)}
                min="0"
                step="1"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block font-semibold mb-1"
                htmlFor="lowStockReminder"
              >
                Low Stock Reminder
              </label>
              <input
                id="lowStockReminder"
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={lowStockReminder}
                onChange={(e) => setLowStockReminder(e.target.value)}
                min="0"
                step="1"
                placeholder="e.g. 5"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Create Item
          </button>
        </form>
      </div>
    </section>
  )
}
