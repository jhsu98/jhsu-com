<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
      <div class="text-5xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Jonathan Hsu, PhD</div>
        <div class="text-2xl"><span class="text-secondary-700">Problem Solver | Coder | Writer</span></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/solution_mindset.svg" alt="hero" class="max-w-xs mx-auto sm:mx-0" />
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        Welcome to my corner of the global digital community. I'll be working to update this site in the coming days. Join my mailing list if you'd like to keep up to date with my exploits. Looking forward to the fresh new look!
      </p>

      <div class="flex justify-between items-center py-10">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/professor.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/success_factors.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div>SaaS Pricing Increase</div>
            <div
              class="text-lg text-gray-600"
            >Strategically led the execution of a 50% increase to annual subscription cost.</div>
          </li>
          <li class="checkmark mb-6">
            <div>Writer for Better Programming</div>
            <div
              class="text-lg text-gray-600"
            >Published over 100 Python and JavaScript tutorials for Better Programming on Medium.com</div>
          </li>
          <li class="checkmark mb-6">
            <div>IFB Wrapper</div>
            <div
              class="text-lg text-gray-600"
            >Developed and maintained an API wrapper for the iFormBuilder mobile data collection platform.</div>
          </li>
          <li class="checkmark mb-6">
            <div>University Adjunct Professor</div>
            <div
              class="text-lg text-gray-600"
            >Taught introductory programming and mathematics at George Mason University for six years.</div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/avatar.png"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div
            class="flex-1 text-lg sm:text-xl ml-6"
          >For my "day job" I work as a Customer Success professional co-creating data collection solutions for SMB and enterprise companies. You can also find me blogging on Medium.com, playing Starcraft II, or in the dojo practicing martial arts.</div>
        </div>

        <!-- <div class="responsive-container">
          <iframe
            class="responsive-iframe w-full h-full top-0 left-0 border-0"
            src="https://www.youtube.com/embed/uHo6o1TNQeE"
            style="border:0;"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div> -->
      </div>
      <!-- end get-to-know me -->
    </div>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "J-Hsu.com"
  }
};
</script>

