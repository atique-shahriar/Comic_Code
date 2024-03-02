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
        const singleForum = document.createElement("div");
        singleForum.classList.add("singleForum", "bg-slate-200", "p-6", "flex", "gap-4", "rounded-xl");
        singleForum.innerHTML = `
                    <div>
                        <div class="avatar indicator">
                            <span class="indicator-item badge badge-secondary  border-white"></span>
                            <div class="w-20 h-20 rounded-lg">
                                <img alt="Tailwind CSS examples"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><span># Music</span><span class="ml-10">Author : Awlad Hossain</span></p>
                        <h4 class="text-3xl font-extrabold colorText my-4">10 Kids Unaware of Their Halloween Costume
                        </h4>
                        <p class="text-[#12132d9d] border-b-2 border-[#12132d9d] border-dashed pb-4">It’s one thing to
                            subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
                        <div class="mt-4 flex justify-between items-center">
                            <div>
                                <p class="text-[#12132d9d]">
                                    <span class="mr-5"><i class="fa-regular fa-message mr-4"></i>560</span>
                                    <span class="mr-5"><i class="fa-regular fa-eye mr-4"></i>560</span>
                                    <span class="mr-5"><i class="fa-regular fa-clock mr-4"></i>5 min</span>
                                </p>
                            </div>
                            <div>
                                <i class="fa-regular fa-envelope-open bg-green-600 p-2 rounded-[100%] text-white"></i>
                            </div>
                        </div>
                    </div>
        `
        forumContainer.appendChild(singleForum);
    });
}