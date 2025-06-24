import user_1 from "../assets/users/user-2.png";
import { Link } from "react-router-dom";
import post_1 from "../assets/articles/post-1.jpg";
import post_2 from "../assets/articles/post-2.jpg";
import post_3 from "../assets/articles/post-3.jpg";
import post_4 from "../assets/articles/post-4.jpg";
import post_5 from "../assets/articles/post-5.jpg";
import post_6 from "../assets/articles/post-6.jpg";
import post_7 from "../assets/articles/post-7.jpg";
import author_1 from "../assets/articles/author-1.svg";

export default function PostDetails() {
  return (
    <div class="max-w-6xl w-full py-2 ml-12 px-4">
      {/* <!-- Post Details Section --> */}
      <div class="bg-white border rounded-sm overflow-hidden mb-8 mx-auto max-w-5xl">
        <div class="flex flex-col md:flex-row">
          {/* <!-- Left Side - Post Image --> */}
          <div class="w-full md:w-1/2 bg-black flex items-center">
            <img
              src={post_1}
              alt="Post image"
              class="w-full post-image"
            />
          </div>

          {/* <!-- Right Side - Post Info and Comments --> */}
          <div class="w-full md:w-1/2 flex flex-col">
            {/* <!-- Post Header --> */}
            <div class="flex items-center justify-between p-3 border-b">
              <Link to="/profile">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full overflow-hidden">
                    <div class="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={author_1}
                        alt="User avatar"
                        class="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div class="ml-2">
                    <div class="flex items-center">
                      <span class="font-semibold text-sm">
                        Learn with Sumit
                      </span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-[10px] text-gray-600">
                        June 9, 2025 08:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="p-3">
              <p class="text-sm ">
                ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও আবশ্যিক
                বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর
                পদ্ধতি আপনাকে একজন দক্ষ রিয়্যাক্ট ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে
                সাহায্য করবে বলে আমাদের বিশ্বাস।
              </p>
            </div>

            {/* <!-- Comments Section --> */}
            <div class="comments-section flex-grow p-3 border-b">
              {/* <!-- Post Owner Comment --> */}
              <h3 class="font-bold pb-4">Comments</h3>

              {/* <!-- Comment One --> */}
              <div class="flex mb-4">
                <div class="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
                  <div class="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
                    <img
                      src={user_1}
                      alt="Saad Hasan"
                      class="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <span class="font-semibold text-sm">Saad Hasan</span>

                    <span class="text-xs text-gray-500 ml-2">3h</span>
                  </div>
                  <p class="text-sm mt-2 text-gray-800">
                    Tucked away in Raipur, this thoughtfully designed
                    multigenerational home by Studio Jane Designs is a study in
                    quiet sophistication and mindful living. Aptly named Silk
                    Route, the residence is as serene and introspective as it is
                    welcoming—a space crafted for both intimate reflection and
                    joyful gatherings.
                  </p>
                </div>
              </div>

              {/* <!-- Comment Two --> */}
              <div class="flex mb-4">
                <div class="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
                  <div class="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
                    <img
                      src={user_1}
                      alt="Saad Hasan"
                      class="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <span class="font-semibold text-sm">Saad Hasan</span>

                    <span class="text-xs text-gray-500 ml-2">3h</span>
                  </div>
                  <p class="text-sm mt-2 text-gray-800">
                    Tucked away in Raipur, this thoughtfully designed
                    multigenerational home by Studio Jane Designs is a study in
                    quiet sophistication and mindful living. Aptly named Silk
                    Route, the residence is as serene and introspective as it is
                    welcoming—a space crafted for both intimate reflection and
                    joyful gatherings.
                  </p>
                </div>
              </div>

              {/* <!-- Comment Three --> */}
              <div class="flex mb-4">
                <div class="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r  mr-2 ">
                  <div class="w-full h-full rounded-full overflow-hidden bg-white p-[1px] mr-2">
                    <img
                      src={user_1}
                      alt="Saad Hasan"
                      class="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <span class="font-semibold text-sm">Saad Hasan</span>

                    <span class="text-xs text-gray-500 ml-2">3h</span>
                  </div>
                  <p class="text-sm mt-2 text-gray-800">
                    Tucked away in Raipur, this thoughtfully designed
                    multigenerational home by Studio Jane Designs is a study in
                    quiet sophistication and mindful living. Aptly named Silk
                    Route, the residence is as serene and introspective as it is
                    welcoming—a space crafted for both intimate reflection and
                    joyful gatherings.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Post Actions --> */}
            <div class="p-3 border-b">
              <div class="flex justify-between mb-2">
                <div class="flex space-x-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <!-- Likes --> */}
              <div class="mb-1">
                <p class="text-sm font-semibold">42 likes</p>
              </div>

              {/* <!-- Post Time --> */}
              <div class="mb-2">
                <p class="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>

            {/* <!-- Add Comment --> */}
            <div class="p-3 flex items-center">
              <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-300 mr-2">
                <img
                  src={user_1}
                  alt="User avatar"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  class="text-sm w-full outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- More Posts Section --> */}
      <div class="mb-8 mx-auto max-w-5xl">
        <h2 class="text-sm text-gray-500 font-normal mb-4">
          More posts from{" "}
          <span class="font-semibold text-black">Learn with Sumit</span>
        </h2>

        <div class="grid grid-cols-3 gap-1">
          {/* <!-- Grid Item 1 --> */}
          <a href="./post-details.html">
            <div class="relative">
              <img
                src={post_2}
                alt="Grid image"
                class="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 2 --> */}
          <a href="./post-details.html">
            <div class="relative">
              <img
                src={post_3}
                alt="Grid image"
                class="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 3 --> */}
          <a href="./post-details.html">
            <div class="relative">
              <img
                src={post_4}
                alt="Grid image"
                class="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 4 --> */}
          <a href="./post-details.html">
            <div class="relative">
              <img
                src={post_5}
                alt="Grid image"
                class="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 5 --> */}
          <a href="./post-details.html">
            <div class="relative">
              <img
                src={post_6}
                alt="Grid image"
                class="w-full grid-image"
              />
            </div>
          </a>

          {/* <!-- Grid Item 6 --> */}
          <a href="./post-details.html">
            <div class="relative">
              <img
                src={post_7}
                alt="Grid image"
                class="w-full grid-image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
