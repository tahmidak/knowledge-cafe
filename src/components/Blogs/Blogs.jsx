import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, useBlogs]= useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        // eslint-disable-next-line react-hooks/rules-of-hooks
        .then(data => useBlogs(data));
    },[]);

    return (
        <div className="text-white">
            Bolg-length:{blogs.length}
            {console.log(blogs)}
        </div>
    );
};



export default Blogs;