const loadForum = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const forumPosts = data.posts;
    displayForumPost(forumPosts);

}

loadForum();

const displayForumPost = (forumPosts) => {

    const forumContainer = document.getElementById("forumContainer");
    forumPosts.forEach(post => {
        console.log(post);

        const singleForum = document.createElement("div");
        singleForum.classList.add("singleForum", "bg-slate-200", "p-6", "flex", "gap-4", "rounded-xl");
        if (post.isActive === true) {
            singleForum.innerHTML = `
                    <div>
                        <div class="avatar indicator">
                            <span class="indicator-item badge badge-secondary border-white bg-green-500"></span>
                            <div class="w-20 h-20 rounded-lg">
                                <img alt="Tailwind CSS examples"
                                    src="${post.image}" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <p><span># ${post.category}</span><span class="ml-10">Author : ${post.author.name}</span></p>
                        <h4 class="text-2xl font-extrabold colorText my-4">${post.title}
                        </h4>
                        <p class="text-[#12132d9d] border-b-2 border-[#12132d9d] border-dashed pb-4">${post.description}</p>
                        <div class="mt-4 flex justify-between items-center">
                            <div>
                                <p class="text-[#12132d9d]">
                                    <span class="mr-5"><i class="fa-regular fa-message mr-4"></i>${post.comment_count}</span>
                                    <span class="mr-5"><i class="fa-regular fa-eye mr-4"></i>${post.view_count}</span>
                                    <span class="mr-5"><i class="fa-regular fa-clock mr-4"></i>${post.posted_time} min</span>
                                </p>
                            </div>
                            <div>
                               <button onclick="markRead(${post.title},${post.view_count})"> <i class="fa-regular fa-envelope-open bg-green-600 p-2 rounded-[100%] text-white"></i></button>
                            </div>
                        </div>
                    </div>
`
        }
        else {
            singleForum.innerHTML = `
                    <div>
                        <div class="avatar indicator">
                            <span class="indicator-item badge badge-secondary border-white bg-red-500"></span>
                            <div class="w-20 h-20 rounded-lg">
                                <img alt="Tailwind CSS examples"
                                    src="${post.image}" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <p><span># ${post.category}</span><span class="ml-10">Author : ${post.author.name}</span></p>
                        <h4 class="text-2xl font-extrabold colorText my-4">${post.title}
                        </h4>
                        <p class="text-[#12132d9d] border-b-2 border-[#12132d9d] border-dashed pb-4">${post.description}</p>
                        <div class="mt-4 flex justify-between items-center">
                            <div>
                                <p class="text-[#12132d9d]">
                                    <span class="mr-5"><i class="fa-regular fa-message mr-4"></i>${post.comment_count}</span>
                                    <span class="mr-5"><i class="fa-regular fa-eye mr-4"></i>${post.view_count}</span>
                                    <span class="mr-5"><i class="fa-regular fa-clock mr-4"></i>${post.posted_time} min</span>
                                </p>
                            </div>
                            <div>
                            <button onclick="markRead(${post.title},${post.view_count})"> <i class="fa-regular fa-envelope-open bg-green-600 p-2 rounded-[100%] text-white"></i></button>
                            </div>
                        </div>
                    </div>
`
        }
        forumContainer.appendChild(singleForum);

    });
}





