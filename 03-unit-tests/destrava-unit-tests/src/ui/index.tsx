import { ReactNode } from "react";

export function Container({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-green-100 py-16">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
        Destrava Web - Simulador de remessas online
      </h2>
      <div className="container mx-auto py-8">
        <div className="mx-auto px-8 flex flex-col">{children}</div>
      </div>
    </div>
  );
}

export function Button(props: any) {
  return (
    <div className="flex justify-center">
      <button
        {...props}
        className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Simular
      </button>
    </div>
  );
}

export function Result({ value }: { value: number }) {
  return (
    <h2 data-testid="value" className="my-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
      Quanto você vai precisar R$: {value || 0.0}
    </h2>
  );
}

export function MoneyInput({ value, onChange }: { value?: any; onChange?: (event: any) => void }) {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Quanto você precisa enviar hoje?
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-green-500 focus:border-green-500 block w-full pl-9 pr-4 py-4 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
            value={value}
            onChange={onChange}
          />
        </div>{" "}
      </div>
    </div>
  );
}

export function Select({ options, onChange }: { options: any; onChange: (event: any) => void }) {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="currency"
          className="block text-sm font-medium text-gray-700"
        >
          Quanto você precisa enviar hoje?
        </label>

        <select
          onChange={onChange}
          name="currency"
          aria-label="Selecione uma moeda"
          className="form-select appearance-none
          block
          w-full
          px-3
          py-4
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option>Selecione uma moeda</option>
          {options.map((option: any) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
