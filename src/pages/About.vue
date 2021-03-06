<template>
  <Layout>
    <!-- hero -->
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">About Me</div>
        <div class="text-2xl"><span class="text-gray-500">Where I've been and where I want to go</span></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/profile.svg" alt="hero" class="max-w-xs mx-auto sm:mx-0" />
      </div>
    </div>
    <!-- end hero -->
      <!-- PROFESSIONAL PROFILE -->
      <div class="overflow-x-hidden border-gray-200">
        <div class="container-inner mx-auto text-xl pt-8 pb-4 mb-4 mt-4 relative">
          <h2 class="font-bold mb-6" id="about">Some men dream of fortunes...</h2>

          <div class="absolute left-0" style="bottom: 25px; transform: translateX(-100%)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

        <div class="absolute right-0" style="top: 25px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

          <div class="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div
              class="flex-1 text-lg sm:text-xl ml-6"
            >My goal is to continue empowering those around me and solve complex challenges through leadership, creativity, and a critical pragmatism. I've worked with SMB and enterprise customers alike. As much as I enjoy going out and collaborating with customers, working internally to lead a team to be self-empowered is what truly energizes me.</div>
          </div>
        </div>
      </div>
      <!-- END PROFESSIONAL PROFILE -->

      <!-- PROFESSIONAL EXPERIENCE -->
      <div class="overflow-x-hidden border-gray-200 bg-background-primary">
        <hr width="50%" style="margin: auto" />
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Profesional Experience</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              My professional experiences are diverse and I'm better for it. Here are some of the organizations, roles, and successes I have been a part of.
              <ul class="text-lg sm:text-xl mx-6">
                <li class="my-6">
                  <strong>Solutions Engineer / Customer Success </strong>(2016-Present)
                  <ul class="pl-6" style="list-style-type: circle;">
                    <li>Manage the retention and expansion of customers through building strong relationships, co-creating solutions, and advocating for customer needs.</li>
                    <li>Led an initiative to increase annual subscription rate of existing customers.</li>
                    <li>Led 2019 pricing change to offer "full service" subscriptions.</li>
                    <li>Facilitated communication between customers, CS team, and Engineering to develop multiple core feature enhancements.</li>
                    </ul>
                </li>
                <li class="my-6">
                  <strong>Freelance Writer </strong>(2018-Present)
                  <ul class="pl-6" style="list-style-type: circle;">
                    <li>Programming tutorials published by Better Programming on Medium.com</li>
                    <li>Writing advice published by Better Marketing on Medium.com</li>
                  </ul>
                </li>
                <li class="my-6">
                  <strong>Adjunct Professor, Undergraduate Programming </strong>(2010-2016)
                  <ul class="pl-6" style="list-style-type: circle;">
                    <li>IT 102: Discrete Structures, discrete mathematics with programming fundamentals in Python</li>
                    <li>IT 207: Applied IT Programming, web-focused server-side programming with PHP, MySQL, and HTML</li>
                    </ul>
                </li>
                <li class="my-6">
                  <strong>Martial Arts Instructor </strong>(1997-2017)
                  <ul class="pl-6" style="list-style-type: circle;">
                    <li>Hired, trained, and supervised junior instructors</li>
                    <li>Community role model, leadership, and student advocacy</li>
                    <li>Over 20,000 hours of experience teaching</li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- END PROFESSIONAL EXPERIENCE -->

      <!-- EDUCATION -->
      <div class="overflow-x-hidden border-gray-200 bg-background-primary">
        <div class="container-inner mx-auto text-xl mt-2 relative">
          <h2 class="font-bold mb-6" id="about">Education</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              I was raised with education being paramount. I am proud to hold three degrees that have shaped my expertise and form a unique blend of technical, leadership, and communication skills.
              <ul class="text-lg sm:text-xl mx-6">
                <li class="my-6">
                  <b>PhD in Education, Specialization in Higher Education</b><br />Investigating the Professional Experiences of Adjunct Faculty
                </li>
                <li class="my-6">
                  <b>Master's of Science in Applied Information Technology</b><br />IT Project Management in the Federal Sector
                </li>
                <li class="my-6">
                  <strong>Bachelor's of Science in Information Technology</strong><br />Web-based ticketing system for campus IT support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr width="50%" style="margin: auto" />
      </div>
      <!-- END EDUCATION -->

      <!-- PERSONAL INTERESTS -->
      <div class="overflow-x-hidden border-gray-200">
        <div class="container-inner mx-auto text-xl pt-8 pb-4 mt-4 mb-8 relative">
          <h2 class="font-bold mb-6" id="about">Others dream of cookies...</h2>

          <div class="absolute left-0" style="bottom: 25px; transform: translateX(-100%)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

        <div class="absolute right-0" style="top: 25px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

          <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
            <div
              class="flex-1 text-lg sm:text-xl ml-6"
            >I'm a lifelong learner and martial artist. I'm energized by learning new technologies and I embrace the grind of developing a new skill. I relax by building PCs, watching mixed martial arts, and competing in anything and everything.</div>
          </div>
        </div>
      </div>
      <!-- END PERSONAL INTERESTS -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me"
  }
};
</script>

