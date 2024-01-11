import ReactQuill from "react-quill";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import { useSelector } from 'react-redux';


const Write = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [postbyId, setPostById] = useState([]);
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState("");
    const [tags, setTags] = useState([]);
    const [isDraft, setIsDraft] = useState(true);
    const [imageUrl, setImageUrl] = useState("");
    const { id } = useParams();
    const userID = useSelector((state) => state?.user?.userId);

    useEffect(() => {
        axios.get(`${process.env.SERVER_URL}/blogs/getblogpostbyid/${id}`)
          .then(response => {
            const{title, content, image, category, tags} = response.data;
            setTitle(title);
            setValue(content);
            setImageUrl(image);
            setCat(category);
            setTags(tags);
            setPostById(response.data);
          })
      }, [id]);


    const handleAddTag = (e) => {
        // Add the tag to the list of tags
        if (e.key === "Enter" && e.target.value !== "") {
            const newTags = e.target.value.trim().split(" ");
            const formattedTags = newTags.map((tag) => `#${tag}`);
            setTags([...tags, ...formattedTags]);
            e.target.value = "";
        }
    };

    // console.log("handleAddTag", tags)

    const handlePublish = () => {
        // Create a payload object with all the state variables
        const payload = {
            title,
            content: value,
            category: cat,
            tags,
            image: imageUrl,
            author: userID,
        };

        // Send the payload to the server using axios.post
        axios.post(`${process.env.SERVER_URL}/blogs/createblog`, payload)
            .then(() => {
                toast("Blog post added successfully")
            })
            .catch((error) => {
                console.log(error)
                toast("Failed to add blog. Please try again")
            });
    };

    const handleSaveDraft = () => {
        // Create a payload object with all the state variables
        const payload = {
            title,
            content: value,
            file,
            category: cat,
            tags,
            isDraft: true,
        };

        // Send the payload to the server using axios.post
        axios.post("/api/posts", payload)
            .then((response) => {
                console.log("Draft saved successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error saving draft:", error);
            });
    };
     

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        axios.post("/api/images", formData)
            .then((response) => {
                setImageUrl(response.data.url);
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
            });
    };

    return (
        <>
        <Navbar/>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="mb-3">
                        <h4>Title</h4>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <h4>Content</h4>
                        <ReactQuill
                            className="form-control h-100"
                            theme="snow"
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                    <div className="mb-3">
                        <h4>Tags</h4>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Add tags"
                                onKeyDown={handleAddTag}
                            />
                        </div>
                        <div className="mt-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge bg-secondary me-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="imageUrl">
                            Image URL
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrl"
                            placeholder="Enter image URL"
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <h4>Publish</h4>
                        <p>
                            <b>Status:</b> {isDraft ? "Draft" : "Published"}
                        </p>
                        {/* <figure className="figure">
                            <a href="blog-post-text.html" className="figure-img">
                                <img
                                    src="http://placehold.it/300x200"
                                    className="img-fluid"
                                    alt="Recent Post"
                                />
                            </a>
                            <figcaption className="figure-caption">
                                <h4>filename.jpg</h4>
                            </figcaption>
                        </figure>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            name=""
                            onChange={handleImageUpload}
                        />
                        <button className="form-label btn btn-danger me-2" htmlFor="file">
                            Select Image
                        </button>
                        <button className="form-label btn btn-danger me-2" htmlFor="file">
                            Upload Image
                        </button> */}
                        {imageUrl && (
                            <img
                            src={imageUrl}
                            alt="Uploaded image"
                            className="img-fluid mb-3"
                            />
                        )}
                            <p>
                                <b>Visibility:</b> Public
                            </p>
                        <div className="mb-3">
                            <button className="btn btn-secondary me-2" onClick={() => setIsDraft(true)}>Save as a draft</button>
                            <button className="btn btn-primary" onClick={handlePublish}>Publish</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h4>Category</h4>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={cat === "technology"}
                                name="cat"
                                value="technology"
                                id="technology"
                                onChange={(e) => setCat(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="technology">
                            Technology
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={cat === "lifestyle"}
                                name="cat"
                                value="lifestyle"
                                id="lifestyle"
                                onChange={(e) => setCat(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="lifestyle">
                                Lifestyle
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={cat === "travel"}
                                name="cat"
                                value="travel"
                                id="travel"
                                onChange={(e) => setCat(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="travel">
                                Travel
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                checked={cat === "other"}
                                name="cat"
                                value="other"
                                id="other"
                                onChange={(e) => setCat(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Write;