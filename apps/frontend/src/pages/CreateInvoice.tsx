import AddItems from '../components/create/AddItems'
import ClientDetails from '../components/create/ClientDetails'

export default function CreateInvoice() {
  return (
    <section className="create-invoice">
      <div className="bg-main p-5 my-28 w-11/12 mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Create Invoice</h1>
        <hr className="my-2 border-gray-300" />
        <ClientDetails />
        <hr className="my-8 border-gray-300" />
        <AddItems />
      </div>
    </section>
  )
}
