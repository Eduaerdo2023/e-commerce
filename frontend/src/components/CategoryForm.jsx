const CategoryForm = ({
  value,
  setValue,
  handleSubmit,
  handleDelete,
  buttonText = "Submit",
}) => {
  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          className="py-3 px-4 border rounded-lg w-full"
          placeholder="Write category name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <div className="flex justify-around ">
          <button
            className="bg-pink-500 text-white py-2 rounded-lg
          hover:bg-pink-600  
           px-4 mt-4 "
          >
            {buttonText} 
          </button>
          
          {handleDelete && (
            <button 
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-4 "
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
