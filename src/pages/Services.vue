<template>
  <Layout>
    <!-- hero -->
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Services</div>
        <div class="text-2xl"><span class="text-gray-500">How can I help?</span></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <!-- <g-image src="../../static/business_deal.svg" alt="hero" class="max-w-xs mx-auto sm:mx-0" /> -->
        <g-image src="../../static/under_construction.svg" alt="hero" class="max-w-xs mx-auto sm:mx-0" />
      </div>
    </div>
    <!-- end hero -->
      <!-- PERSONAL INTERESTS -->
      <div class="overflow-x-hidden border-gray-200">
        <div class="container-inner mx-auto text-xl pt-8 pb-4 mt-4 mb-8 relative">
          <h2 class="font-bold mb-6" id="about">Introduction</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
            <div
              class="flex-1 text-lg sm:text-xl ml-6"
            >Text</div>
          </div>
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
        </div>
      </div>
      <!-- END PERSONAL INTERESTS -->
      <!-- SERVICES 1 -->
      <div class="overflow-x-hidden border-gray-200 bg-background-secondary">
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pt-10" pb-5>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/all_the_data.svg" alt="hero" class="max-w-xs w-5/6 mx-auto sm:mx-0 px-8" />
      </div>
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left px-8">
        <div>Data Collection Consulting</div>
      </div>
    </div>
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Subtitle</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              Content
            </div>
          </div>
        </div>
      </div>
      <!-- END SERVICES 1 -->

      <!-- SERVICES 2 -->
      <div class="overflow-x-hidden border-gray-200 bg-background-primary">
      <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pt-10 pb-5">
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/pair_programming.svg" alt="hero" class="max-w-xs mx-auto sm:mx-0 px-8" />
      </div>
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left px-8">
        <div>Personal Tech Coaching</div>
      </div>
    </div>
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Subtitle</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              Content
            </div>
          </div>
        </div>
      </div>
      <!-- END SERVICES 2 -->

      <!-- SERVICES 3 -->
      <div class="overflow-x-hidden border-gray-200 bg-background-secondary pb-16">
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between pt-10 pb-5">
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer_activity.svg" alt="hero" class="max-w-xs mx-auto sm:mx-0 px-8" />
      </div>
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left px-8">
        <div>Freelance Content Creation</div>
      </div>
    </div>
        <div class="container-inner mx-auto text-xl mt-8 relative">
          <h2 class="font-bold mb-6" id="about">Subtitle</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div class="flex-1 text-lg sm:text-xl ml-6">
              Content
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

