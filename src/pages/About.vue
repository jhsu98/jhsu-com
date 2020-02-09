<template>
  <Layout>
      <!-- PROFESSIONAL PROFILE -->
      <div class="overflow-x-hidden border-gray-200">
        <div class="container-inner mx-auto text-xl pt-16 pb-6 mb-8 relative">
          <h2 class="font-bold mb-6" id="about">Who am I?</h2>

          <div class="absolute left-0" style="bottom: 10px; transform: translateX(-100%)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

          <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
            <div
              class="flex-1 text-lg sm:text-xl ml-6"
            >For my "day job" I work as a Customer Success professional co-creating data collection solutions for SMB and enterprise companies. You can also find me blogging on Medium.com, playing Starcraft II, or in the dojo practicing martial arts.</div>
          </div>
        </div>
      </div>
      <!-- END PROFESSIONAL PROFILE -->

      <!-- PROFESSIONAL EXPERIENCE -->
      <div class="overflow-x-hidden border-gray-200 bg-background-primary">
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Profesional Experience</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              My professional experiences are diverse and I'm better for it. Here are some of the organizations, roles, and successes I have been a part of.
              <ul class="text-lg sm:text-xl mx-6">
                <li class="my-6">
                  <b>Solutions Engineer / Customer Success <span class="text-gray-500">(2016-Present)</span></b>
                  <ul class="pl-6" style="list-style-type: circle;">
                    <li>Manage the retention and expansion of customers through building strong relationships, co-creating solutions, and advocating for customer needs.</li>
                    <li>Led an initiative to increase annual subscription rate of existing customers.</li>
                    <li>Led 2019 pricing change to offer "full service" subscriptions.</li>
                    <li>Facilitated communication between customers, CS team, and Engineering to develop multiple core feature enhancements.</li>
                    </ul>
                </li>
                <li class="my-6">
                  <b>Freelance Writer <span class="text-gray-500">(2018-Present)</span></b><br />ASDF
                </li>
                <li class="my-6">
                  <b>Adjunct Professor, Undergraduate Programming <span class="text-gray-500">(2010-2016)</span></b><br />ASDF
                </li>
                <li class="my-6">
                  <strong>Martial Arts Instructor <span class="text-gray-500">(1997-2017)</span></strong><br />ASDF
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- END PROFESSIONAL EXPERIENCE -->

      <!-- EDUCATION -->
      <div class="overflow-x-hidden border-gray-200 bg-background-primary">
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Education</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
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
      </div>
      <!-- END EDUCATION -->

      <!-- PERSONAL INTERESTS -->
      <div class="overflow-x-hidden border-gray-200">
        <div class="container-inner mx-auto text-xl pt-16 pb-6 mb-8 relative">
          <h2 class="font-bold mb-6" id="about">Personal Interests</h2>

          <div class="absolute left-0" style="bottom: 10px; transform: translateX(-100%)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

          <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
            <div
              class="flex-1 text-lg sm:text-xl ml-6"
            >For my "day job" I work as a Customer Success professional co-creating data collection solutions for SMB and enterprise companies. You can also find me blogging on Medium.com, playing Starcraft II, or in the dojo practicing martial arts.</div>
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

