const Formulario = ({ cliente }) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="nombre">
          Name:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Name"
          name="nombre"
          defaultValue={cliente?.nombre}

        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="empresa">
          Company:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Company"
          name="empresa"
          defaultValue={cliente?.empresa}

        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email"
          defaultValue={cliente?.email}
          name="email"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="telefono">
          Phone:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Phone"
          defaultValue={cliente?.telefono}
          name="telefono"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notas">
          Notes:
        </label>
        <textarea
          as="textarea"
          id="notas"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notes"
          defaultValue={cliente?.notas}
          name="notas"
        />
      </div>
    </>
  );
};

export default Formulario;
