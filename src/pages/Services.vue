<template>
  <Layout>
    <!-- hero -->
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Services</div>
        <div class="text-2xl"><span class="text-gray-500">How can I help?</span></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/business_deal.svg" alt="services" class="max-w-xs mx-auto sm:mx-0" />
      </div>
    </div>
    <!-- end hero -->
      <!-- PERSONAL INTERESTS -->
      <div class="overflow-x-hidden border-gray-200">
        <div class="container-inner mx-auto text-xl pt-8 pb-4 mt-4 mb-8 relative">
          <h2 class="font-bold mb-6" id="about">Teamwork makes the dream work</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
            <div
              class="flex-1 text-lg sm:text-xl ml-6"
            >Don't spend countless hours struggling through growing pains. Don't go at it alone, hoping things will get better. Focus on what you do best and let me empower you and your team. I will work collaboratively with you to produce results that neither side could achieve on their own. Read on to learn about how I can help you.</div>
          </div>
          <div class="absolute left-0" style="bottom: 10px; transform: translateX(-100%)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>

        <div class="absolute right-0" style="top: 10px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>
        </div>
      </div>
      <!-- END PERSONAL INTERESTS -->
      <!-- SERVICES 1 -->
      <div class="overflow-x-hidden border-gray-200 bg-background-secondary">
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pt-10">
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/all_the_data.svg" alt="data collection consulting" class="max-w-xs w-5/6 mx-auto sm:mx-0 px-8" />
      </div>
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left px-8">
        <div>Data Collection Consulting</div>
      </div>
    </div>
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Helping you work smarter, not harder</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              Do you need help mobilizing your data collection, workflow processing, or analytics and reports? I've worked with both SMB and enterprise organizations on digitizing traditional data capture and building automation workflows.
              <ul class="text-lg sm:text-xl mx-6" style="list-style-type: circle;">
                <li>Digitizing paper forms</li>
                <li>Workflow integrations</li>
                <li>Analytics and report generation</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- END SERVICES 1 -->

      <!-- SERVICES 2 -->
      <div class="overflow-x-hidden border-gray-200 bg-background-primary">
      <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pt-10">
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/pair_programming.svg" alt="personal tech coaching" class="max-w-xs mx-auto sm:mx-0 px-8" />
      </div>
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left px-8">
        <div>Personal Tech Coaching</div>
      </div>
    </div>
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Don't learn to code on your own</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              Programming is tough. Normally you learn on a need-to-know basis, leading to pockets of knowledge that don't relate to each other. Let me help you connect the dots. Whether you need to generate a custom report or connect your CRM to a 3rd party service, I can save you time, headaches, and future problems by personally coaching you on coding.
              <ul class="text-lg sm:text-xl mx-6" style="list-style-type: circle;">
                <li>JavaScript</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>REST API integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- END SERVICES 2 -->

      <!-- SERVICES 3 -->
      <div class="overflow-x-hidden border-gray-200 bg-background-secondary pb-16">
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pt-10 pb-5">
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer_activity.svg" alt="freelance content creation" class="max-w-xs mx-auto sm:mx-0 px-8" />
      </div>
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left px-8">
        <div>Freelance Content Creation</div>
      </div>
    </div>
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Content that speaks to you</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              Writing preferences are subjective, but I believe the best content reads and views like a conversation. Engage your audience with inclusive content that speaks to them as an individual.
              <ul class="text-lg sm:text-xl mx-6" style="list-style-type: circle;">
                <li>Blog posts</li>
                <li>White papers</li>
                <li>Documentation and training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- END SERVICES 3 -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me"
  }
};
</script>

