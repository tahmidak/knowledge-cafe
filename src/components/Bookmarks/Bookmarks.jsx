
const Bookmarks = ({ bookmarks = [] }) => {
    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            <ul className="flex flex-col gap-4 mt-2">
                {bookmarks.map((bookmark, idx) => (
                    <li key={bookmark.id || idx} className="rounded-2xl bg-gray-800 p-4">
                        <div className="text-xl flex items-center">{bookmark.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bookmarks;