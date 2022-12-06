
let partBlogArray = [  
    {
    wherePic: "./assets/Images/Little_img_1.png", 
    when: "21 Oct, 2022",
    title: "How I've started learning web",
    text: "My prevus job was not related to web development, but I have exhausted my potential and decided to try a new field of activity.",
    },
    { 
    wherePic:"./assets/Images/Little_img_2.png",
    when: "03 Dec, 2022",
    title: "Why does JavaScript is so exciting",
    text: "This programming language allows you to write frontend, backend, create websites, desktop or mobile applications, and even develop games in it."
    },
    { 
    wherePic:"./assets/Images/Little_img_3.png",
    when: "20 Dec, 2022", 
    title: "How I've developed this site",
    text: "This is my training ground, where I grow my skills)"
    },
];
let arrow = document.createElement("p");

function createPartOfBlog(partBlogArray) {
    for (let i=0; i<partBlogArray.length; i++) {
let Blog = document.querySelector(".blog");
let partOfBlog = document.createElement("div");
Blog.appendChild(partOfBlog);
partOfBlog.classList.add("part-of-blog");     
let pictureText = document.createElement("div");
let HrefVievPost = document.createElement("div");
partOfBlog.appendChild(pictureText);
partOfBlog.appendChild(HrefVievPost);
pictureText.classList.add("picture-text");
HrefVievPost.classList.add("view-post");

let LittleImg = document.createElement("img");
let blogDescription = document.createElement("div");
pictureText.appendChild(LittleImg);
pictureText.appendChild(blogDescription);
LittleImg.classList.add("little-img");
LittleImg.setAttribute("src", partBlogArray[i]["wherePic"]);
blogDescription.classList.add("blog-description");

let DescriptionDate = document.createElement("h5");
let PartBlogName = document.createElement("h4")
let Description = document.createElement("p");
blogDescription.appendChild(DescriptionDate);
blogDescription.appendChild(PartBlogName);
blogDescription.appendChild(Description);
DescriptionDate.classList.add("red-text");
Description.classList.add("inika-15");
DescriptionDate.textContent = partBlogArray[i]["when"];
PartBlogName.textContent = partBlogArray[i]["title"];
Description.textContent = partBlogArray[i]["text"];

let HrefPost = document.createElement("p");
let arrow = document.createElement("p");
HrefVievPost.appendChild(HrefPost);
HrefVievPost.appendChild(arrow);
HrefPost.classList.add("red-text", "inika-19");
HrefPost.textContent = "View post ";
arrow.innerHTML = "➡";

let lineBlog = document.createElement("hr");
Blog.appendChild(lineBlog);
lineBlog.classList.add("hr");

}
}

createPartOfBlog(partBlogArray);

