<template>
  <Layout>
    <!-- hero -->
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Contact Me</div>
        <div class="text-2xl"><span class="text-gray-500">I'd love to hear from you</span></div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/emails.svg" alt="hero" class="max-w-xs w-4/5 mx-auto sm:mx-0" />
      </div>
    </div>
    <!-- end hero -->
    <div class="overflow-x-hidden">
      <div class="contact-me bg-background-primary mb-12">
        <div class="container-inner mx-auto text-xl pb-8 pt-16 relative">
          <div class="absolute right-0" style="top: 25px; transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>
          <div class="absolute left-0" style="bottom: 25px; transform: translateX(-100%)">
            <svg width="170px" height="170px">
              <use xlink:href="#dots-triangle" />
            </svg>
          </div>
          <p
            class="mb-12"
          >I'm your guy for data solutions consulting, technical coaching, or freelance content creation. Just fill out the form below and I'll get back to you at my earliest convenience!</p>

          <div class="text-lg sm:text-lg mb-12">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              class="mb-12"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <label class="block mb-2 text-copy-primary" for="name">Name</label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-yellow-700 mb-2 p-4"
                    required
                  />
                </div>

                <div class="w-full px-4 md:w-1/2">
                  <label class="block text-copy-primary mb-2" for="email">Email Address</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-yellow-700 mb-2 p-4"
                    required
                  />
                </div>
              </div>

              <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-yellow-700 mb-2 px-4 py-4"
                  placeholder="Enter your message here."
                  required
                ></textarea>
              </div>

              <div class="flex justify-end w-full">
                <input
                  type="submit"
                  value="Submit"
                  class="block bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end contact-me -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact Me"
  }
};
</script>

