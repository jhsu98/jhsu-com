<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/creative_thinking.svg" alt="hero" class="w-3/5 max-w-sm mx-auto sm:mx-0" />
      </div>
      <div class="ml-8 text-5xl font-bold w-full sm:w-3/5 text-center sm:text-right align-text-bottom align-bottom border-b">
        <div class="leading-tight">Blog</div>
        <div class="text-2xl"><span class="text-secondary-700">&nbsp;</span></div>
      </div>

    </div>
    <!-- end hero -->
    <div class="container-inner mx-auto py-16">
      <div v-for="post in $page.posts.edges" :key="post.id" class="post border-gray-400 border-b mb-12">
        <g-link :to="post.node.path"><g-image :src="post.node.featured" alt="featured-image" /></g-link>
        <h2 class="text-3xl font-bold">{{ post.node.title }}</h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        featured
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>

