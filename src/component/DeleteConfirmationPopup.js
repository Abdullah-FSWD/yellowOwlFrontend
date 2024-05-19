import axios from "axios";

export const DeleteConfirmationPopup = ({
  onClose,
  setConfirmationPopup,
  fetchData,
  student,
  id,
}) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://yellowowlbackend-obv0.onrender.com/students/delete/${id}`
      );
      fetchData();
      setConfirmationPopup(false);
      console.log("Post deleted:", id);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-20 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4"></h2>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Are you sure to delete this student
              </h2>
            </div>
            <div>
              <button
                onClick={() => handleDelete(id)}
                // disabled={!formData.isDirty}
                className="bg-green-500 text-white px-4 py-2 rounded w-full mt-2">
                Yes
              </button>

              <br />

              <button
                onClick={() => setConfirmationPopup(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded mr-2 w-full mt-2">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
