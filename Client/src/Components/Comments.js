import React from "react";

const Comments = () => {
  return (
    <div>
      <div className="form border p-3">
        <h2 className="mb-5 text-xl tracking-wider">Comments</h2>
        <hr className="mb-5" />
        <form action="https://api.web3forms.com/submit" className="flex gap-x-5 ">
          <div className="user-profile flex justify-center items-center h-12 w-12 bg-gray-300 rounded-full">
            <span className="text-4xl p-1 text-gray-500">
              <ion-icon name="person"></ion-icon>
            </span>
          </div>
          <div className="grow">
            <div className="relative z-0 ">
              <textarea
                name="message"
                rows="3"
                className="peer block w-full appearance-none border border-gray-500 bg-transparent py-2 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
